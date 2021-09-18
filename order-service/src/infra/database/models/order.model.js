/* eslint-disable no-tabs */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const schema = mongoose.Schema(
  {
    customerId: { type: String },
    productId: { type: String },
    amount: { type: Number },
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

module.exports = mongoose.model("orders", schema);
