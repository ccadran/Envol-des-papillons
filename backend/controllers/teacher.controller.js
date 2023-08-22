const TeacherModel = require("../models/teacher.model");

module.exports.getTeacher = async (req, res) => {
  const etablissement = req.query.etablissement; // Récupérer la valeur de l'établissement depuis les paramètres de requête

  let teachers;
  if (etablissement) {
    teachers = await TeacherModel.find({ etablissement: etablissement });
  } else {
    teachers = await TeacherModel.find();
  }

  res.status(200).json(teachers);
};

module.exports.setTeacher = async (req, res) => {
  if (!req.body.classe || !req.body.etablissement) {
    res
      .status(400)
      .json({ message: "La classe et l'établissement sont obligatoires" });
    return;
  }

  const teacher = await TeacherModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    poste: req.body.poste,
    classe: req.body.classe,
    formation: req.body.formation,
    etablissement: req.body.etablissement,
  });

  res.status(200).json(teacher);
};

module.exports.editTeacher = async (req, res) => {
  const teacher = await TeacherModel.findById(req.params.id);

  if (!teacher) {
    res.status(400).json({ message: "Ce teacher n'existe pas" });
  }

  const updateTeacher = await TeacherModel.findByIdAndUpdate(
    teacher,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateTeacher);
};

module.exports.deleteTeacher = async (req, res) => {
  const teacher = await TeacherModel.findById(req.params.id);
  if (!teacher) {
    res.status(400).json({ message: "Ce teacher n'existe pas" });
  }

  await teacher.deleteOne();
  res.status(200).json("Teacher supprimé " + req.params.id);
};
