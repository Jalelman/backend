// var express=require('express');
// var router = express.Router();
// var db = require('../models');
// const Universite = require('../models/Universite');

// router.post('/add', (req, res)=>{
//     db.Universite.create(req.body).then((response)=>{
//         res.status(200).send(response)}).catch((err=>{
//             res.status(400).send(err)
//         }))
//     });


//     router.put('/update/:id', (req, res)=>{
//         db.Universite.update(req.body, {where:{id:req.params.id}}).then((response)=>{
//             res.status(200).send(response)}).catch((err=>{
//                 res.status(400).send(err)
//             }))
//         });


//         router.delete('/remove/:id', (req, res) => {

//           db.Universite.destroy({where:{id:req.params.id}}).then((response)=>{
//             res.status(200).send(response)}).catch((err=>{
//                 res.status(400).send(err)
//             }))
//         });
        

       

//             router.get('/universite/:id', (req, res)=>{
//               db.Universite.findOne({where:{id:req.params.id}}).then((response)=>{
//                 res.status(200).send(response)}).catch((err=>{
//                     res.status(400).send(err)
//                 }))
//             });

            
//                 router.get('/fetch', (req, res)=>{
//                     db.Universite.findAll().then((response)=>{
//                         res.status(200).send(response)}).catch((err=>{
//                             res.status(400).send(err)
//                         }))
//                     });

// module.exports= router;

var express = require('express');
const {getAllUniversite, getUniversite, createUniversite, updateUniversite, deleteUniversite} = require('../controllers/universite.controllers');

var router = express.Router();

router.get('/fetch', getAllUniversite);
router.get('/institut/:id', getUniversite);
router.post('/add', createUniversite);
router.put('/update/:id',updateUniversite);
router.delete('/remove/:id', deleteUniversite);

module.exports = router;
