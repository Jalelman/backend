
var express = require('express');
const { createSeance, getSeance, updateSeance, deleteSeance, getAllSeances, findAbsenceBySeance } = require('../controllers/seance.controller');

var router = express.Router();

router.get('/', getAllSeances);
router.get('/:seanceId', getSeance);
router.post('/', createSeance);
router.put('/:seanceId',  updateSeance);
router.delete('/:seanceId', deleteSeance);
router.get('/absence/:seanceId', findAbsenceBySeance);

module.exports = router;
