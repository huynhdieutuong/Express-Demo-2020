const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  books: [{
    type: mongoose.Types.ObjectId,
    ref: "Book"
  }],
  isComplete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
