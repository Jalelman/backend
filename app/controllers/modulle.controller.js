
const { modulle } = require("../models");

const createModulle = async (req, res, next) => {
  const { name, coef } = req.body;
  console.log(req.body)
  try {
    const createdModulle = await modulle.create({
      name,
      coef

    });
    res.status(201).json(createdModulle);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};



const getModulle = async (req, res) => {
  try {
    const { modulleId } = req.params;
    const modulleData = await modulle.findOne({
      where: { id: modulleId },
    });
    if (!modulleData) {
      throw new Error("Modulle not found");
    }
    res.status(200).json({
      modulleData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateModulle = async (req, res) => {
  try {
    const { modulleId } = req.params;
    const [updated] = await modulle.update(req.body, {
      where: { id: modulleId },
    });
    if (!updated) {
      throw new Error("Modulle not found");
    }
    const updatedModulle = await modulle.findOne({ where: { id: modulleId } });
    res.status(200).json({
      modulle: updatedModulle,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteModulle = async (req, res) => {
  try {
    const { modulleId } = req.params;
    const deleted = await modulle.destroy({
      where: { id: modulleId },
    });
    if (!deleted) {
      throw new Error("Modulle not found");
    }
    res.status(204).send("Modulle deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllModulles = async (req, res) => {
  try {
    const modulles = await modulle.findAll();
    if (!modulles) {
      throw new Error("No Modulles found");
    }
    res.status(200).json({
      modulles,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const findSeanceByModulle = async (req, res) => {
  try {
    const { modulleId } = req.params;
    const modulleData = await modulle.findOne({
      where: { id: modulleId },
      include: "seances",
    });
    if (!modulleData) {
      throw new Error("modulle not found");
    }
    res.status(200).json({
      modulleData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const findExamenByModulle = async (req, res) => {
  try {
    const { modulleId } = req.params;
    const modulleData = await modulle.findOne({
      where: { id: modulleId },
      include: "examens",
    });
    if (!modulleData) {
      throw new Error("modulle not found");
    }
    res.status(200).json({
      modulleData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


module.exports = {
  createModulle,
  getModulle,
  getAllModulles,
  updateModulle,
  deleteModulle,
  findSeanceByModulle,
  findExamenByModulle,
};
