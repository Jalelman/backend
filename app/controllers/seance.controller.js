
const { seance } = require("../models");

const createSeance = async (req, res, next) => {
  const { name, type, date, modulleId } = req.body;
  try {
    const createdSeance = await seance.create({
      name,
      type,
      date,
      modulleId
      
    });
    res.status(201).json({
      createSeance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
const getSeance = async (req, res) => {
  try {
    const { seanceId } = req.params;
    const seanceData = await seance.findOne({
      where: { id: seanceId },
    });
    if (!seanceData) {
      throw new Error("seance not found");
    }
    res.status(200).json({
      seanceData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateSeance = async (req, res) => {
  try {
    const { seanceId } = req.params;
    const [updated] = await seance.update(req.body, {
      where: { id: seanceId },
    });
    if (!updated) {
     
    throw new Error("seance not found");
    }
    const updatedseance = await seance.findOne({ where: { id: seanceId } });
    res.status(200).json({
      seance: updatedseance,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteSeance = async (req, res) => {
  try {
    const { seanceId } = req.params;
    const deleted = await seance.destroy({
      where: { id: seanceId },
    });
    if (!deleted) {
      throw new Error("seance not found");
    }
    res.status(204).send("seance deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllSeances = async (req, res) => {
  try {
    const seances = await seance.findAll();
    if(!seances){
        throw new Error("No seances found");
    }
    res.status(200).json({
      seances,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const findAbsenceBySeance = async (req, res) => {
  try {
    const { seanceId } = req.params;
    const seanceData = await seance.findOne({
      where: { id: seanceId },
      include: "absences",
    });
    if (!seanceData) {
      throw new Error("absence not found");
    }
    res.status(200).json({
      seanceData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


module.exports = {
  createSeance,
  getSeance,
  updateSeance,
  deleteSeance,
  getAllSeances,
  findAbsenceBySeance,
};
