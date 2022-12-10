const Institut = require("./Institut");

module.exports=(sequelize, Sequelize)=>{
    const Universite= sequelize.define('Universite',{
    
     nom:{
        type: Sequelize.STRING,


     },
     adresse:{
        type: Sequelize.STRING,


     },

     ville:{
        type: Sequelize.STRING,


     },

     codep:{
        type: Sequelize.INTEGER,

     },

    



    });


   //  Universite.associate=models=>{
   //    Universite.hasMany(models.Institut,{
        
   //       onDelete:"cascade"
   //    })
   //   }

    return Universite;
};
