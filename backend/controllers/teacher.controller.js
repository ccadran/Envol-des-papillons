const TeacherModel = require("../models/Teacher.model");

module.exports.getTeacher = async (req, res) => {
  const teacher = await TeacherModel.find();
  res.status(200).json(teacher);
};

module.exports.setTeacher = async (req, res) => {
  if (!req.body.classe) {
    res.status(400).json({ message: "Le mot de passe est obligatoire" });
  }
  const teacher = await TeacherModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    poste: req.body.poste,
    classe: req.body.classe,
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
