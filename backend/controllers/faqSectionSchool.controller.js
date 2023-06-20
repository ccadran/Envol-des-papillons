const SectionModel = require("../models/faqSectionSchool.model");

module.exports.getSection = async (req, res) => {
  const section = await SectionModel.find();
  res.status(200).json(section);
};

module.exports.setSection = async (req, res) => {
  if (!req.body.section_title) {
    res.status(400).json({ message: "Le titre est obligatoire" });
  }
  const section = await SectionModel.create({
    section_title: req.body.section_title,
  });
  res.status(200).json(section);
};

module.exports.editSection = async (req, res) => {
  const section = await SectionModel.findById(req.params.id);

  if (!section) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updateSection = await SectionModel.findByIdAndUpdate(
    section,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateSection);
};

module.exports.deleteSection = async (req, res) => {
  const section = await SectionModel.findById(req.params.id);
  if (!section) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await section.deleteOne();
  res.status(200).json("Section supprimé " + req.params.id);
};
