const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  question_answer: {
    type: String,
    required: true,
  },
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
});

module.exports = mongoose.model("question", QuestionSchema);
