const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

module.exports = model("Service", serviceSchema, "services");
