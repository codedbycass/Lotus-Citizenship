const mongoose = require("mongoose");

const PersonalizeSchema = new mongoose.Schema(
  {
    age: String,
    lang: String,
    lpr: String,
    pb: String,
  //   age: {
  //     type: Number,
  //     required: true,
  //   },
  //   lang: {
  //     type: String,
  //     required: true,
  //   },
  //   lpr: {
  //     type: String,
  //     required: true,
  //   },
  //   pb: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // { timestamps: true }
  });

const Personalize = mongoose.model("Personalize", PersonalizeSchema);

module.exports = Personalize;