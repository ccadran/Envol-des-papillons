const QuestionModel = require("../models/faqQuestionCollege.model");

module.exports.getQuestion = async (req, res) => {
  const question = await QuestionModel.find();
  res.status(200).json(question);
};

module.exports.setQuestion = async (req, res) => {
  if (!req.body.question) {
    res.status(400).json({ message: "La question est obligatoire" });
  }
  const question = await QuestionModel.create({
    question: req.body.question,
    question_answer: req.body.question_answer,
    section_id: req.body.section_id,
  });
  res.status(200).json(question);
};

module.exports.editQuestion = async (req, res) => {
  const question = await QuestionModel.findById(req.params.id);

  if (!question) {
    res.status(400).json({ message: "Cette question n'existe pas" });
  }

  const updateQuestion = await QuestionModel.findByIdAndUpdate(
    question,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateQuestion);
};

module.exports.deleteQuestion = async (req, res) => {
  const question = await QuestionModel.findById(req.params.id);
  if (!question) {
    res.status(400).json({ message: "Cette question n'existe pas" });
  }

  await question.deleteOne();
  res.status(200).json("Question supprimé " + req.params.id);
};
