var express=require('express');

var db = require('../models')

const createInstitut= ('/add', (req, res)=>{
    // const { nom, adresse,email,telephon,fax,UniversiteId} = req.body;
    // const univ =Universite.findOne({where:{nom:req.body.nom}})
    console.log(req.body);
    let data = req.body;
    data.UniversiteId = parseInt(req.body.UniversiteId);
    db.Institut.create(req.body).then((response)=>{
        res.status(200).send(response)}).catch((err=>{
            res.status(400).send(err)
        }))
    });


   const updateInstitut= ('/update/:id', (req, res)=>{
        db.Institut.update(req.body, {where:{id:req.params.id}}).then((response)=>{
            res.status(200).json(response)}).catch((err=>{
                res.status(400).json(err)
            }))
        });

        const deleteInstitut= ('/remove/:id', (req, res) => {

            db.Institut.destroy({where:{id:req.params.id}}).then((response)=>{
              res.status(200).json(response)}).catch((err=>{
                  res.status(400).send(err)
              }))
          });

            const getInstitut= ('/institut/:id', (req, res)=>{
                db.Institut.findOne(req.body,{where:{id:req.params.id}}).then((response)=>{
                    res.status(200).send(response)}).catch((err=>{
                        res.status(400).send(err)
                    }))
                });

                const getAllInstitut= ('/fetch', (req, res)=>{
                    db.Institut.findAll().then((response)=>{
                        res.status(200).json(response)}).catch((err=>{
                            res.status(400).json(err)
                        }))
                    });

module.exports= {
    createInstitut,
    updateInstitut,
    deleteInstitut,
    getInstitut,
    getAllInstitut
};
