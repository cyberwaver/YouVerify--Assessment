const mongoose = require("mongoose");
const { NotFoundException } = require("../exceptions/index");

class Repository {
  constructor(Model, modelOpts = {}) {
    this.Model = Model;
    this.modelOpts = modelOpts;
  }

  async add(payload = {}) {
    const res = await this.Model.create(payload);
    return res.toJSON();
  }

  async truncate(filter = {}) {
    if (process.env.NODE_ENV == "development") {
      console.log("truncation");
      return this.Model.deleteMany(filter);
    }
  }

  async deleteMany(filter = {}) {
    if (!filter) return;
    return this.Model.deleteMany(filter);
  }

  async deleteById(id, message) {
    const document = await this.getById(id);
    if (document) return document.delete();
    throw this._documentNotFoundException(message);
  }

  async getByFilter(filter, message) {
    const document = await this.Model.findOne(filter);
    if (document) return document;
    throw this._documentNotFoundException(message);
  }

  async getById(id, message) {
    const document = await this.Model.findById(id);
    if (document) return document;
    throw this._documentNotFoundException(message);
  }

  count(condition = {}) {
    return this.Model.find(condition).countDocuments();
  }

  async getMany(
    condition,
    paginationOpts = {
      sort: { createdAt: "desc" },
      page: 1,
      limit: 20,
    }
  ) {
    return this.Model.paginate(condition, paginationOpts);
  }

  async getAll(condition, opts = { sort: { _id: "-1" } }) {
    return this.Model.find(condition).sort(opts.sort);
  }

  async massInsert(data = []) {
    if (data.length === 0) return [];
    return await this.Model.insertMany(data);
  }

  async findOrCreate(attribute = {}, defaults = {}) {
    const find = await this.Model.findOne(attribute);
    if (!find) return this.Model.create(defaults);
    return find;
  }

  async updateById(id, data, message) {
    const document = await this.getById(id);
    if (document) return this.updateById(id, data);
    throw this._documentNotFoundException(message);
  }

  async updateMany(filter, data = {}) {
    return this.Model.updateMany(filter, { $set: data });
  }

  async upsert(query = {}, newData = {}) {
    return this.Model.update(query, newData, {
      upsert: true,
      setDefaultsOnInsert: true,
    });
  }

  async recordExistsForFilter(filter = {}) {
    const record = await this.getByFilter(filter);
    return Boolean(record);
  }

  isAnID(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  _documentNotFoundException(message) {
    return new NotFoundException(
      message || `${this.modelOpts.singularName} not found`
    );
  }
}

module.exports = Repository;
