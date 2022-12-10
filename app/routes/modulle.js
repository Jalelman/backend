
const express = require("express");
const router = express.Router();
const { createModulle, findSeanceByModulle, getModulle, getAllModulles, updateModulle, deleteModulle, findExamenByModulle } = require("../controllers/modulle.controller");

router.post("/", createModulle);
router.get("/find/:modulleId", findSeanceByModulle);
router.get('/', getAllModulles);
router.get('/:modulleId', getModulle);
router.put('/:modulleId',  updateModulle);
router.delete('/:modulleId', deleteModulle);
router.get('/examen/:modulleId', findExamenByModulle);


module.exports = router;