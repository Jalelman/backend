const Universite = require("./Universite");

module.exports=(sequelize, Sequelize)=>{
    const Institut= sequelize.define('Institut',{
      
     nom:{
        type: Sequelize.STRING,


     },


     adresse:{
        type: Sequelize.STRING,


     },

     email:{
        type: Sequelize.STRING,


     },

     telephon:{
        type: Sequelize.INTEGER,

     },

     nombreDepartement:{
      type: Sequelize.INTEGER,

   },
   
   file:{
      type: Sequelize.STRING,

   },

   nombreEtudiant:{
      type: Sequelize.INTEGER,

   }, 


   image:{
      type: Sequelize.STRING,
   },
   
   UniversiteId:{
      type: Sequelize.INTEGER,

   },

    


    });

   //  Institut.associate=models=>{
   //    Institut.belongsTo(models.Universite,{
   //       onDelete:"cascade"
   //    })
   // }
    return Institut;
};
