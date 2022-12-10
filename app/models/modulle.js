
module.exports = (sequelize, Sequelize) => {
    const Modulle = sequelize.define("modulle", {
      name: {
        type: Sequelize.STRING,
      },
     
      coef: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Modulle;
  };
  