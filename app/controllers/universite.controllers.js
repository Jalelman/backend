var express = require("express");
var router = express.Router();
var db = require("../models");
// const Universite = require('../models/Universite');

const createUniversite = (req, res) => {
  db.Universite.create(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const updateUniversite = (req, res) => {
  db.Universite.update(req.body, { where: { id: req.params.id } })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const deleteUniversite = (req, res) => {
    db.Universite.destroy({ where: { id: req.params.id } }).then((response) => {
      res.status(200).json(response);
    }).catch((er)=>console.log(er));
};

const getUniversite = (req, res) => {
  db.Universite.findOne({ where: { id: req.params.id } })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getAllUniversite = (req, res) => {
  db.Universite.findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  createUniversite,
  updateUniversite,
  deleteUniversite,
  getUniversite,
  getAllUniversite,
};
