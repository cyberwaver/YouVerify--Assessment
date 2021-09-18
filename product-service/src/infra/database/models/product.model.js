/* eslint-disable no-tabs */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const schema = mongoose.Schema(
  {
    name: { type: String },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
      },
    },
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

module.exports = mongoose.model("products", schema);
