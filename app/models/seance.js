
module.exports = (sequelize, Sequelize) => {
    const Seance = sequelize.define("seance", {
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
     /* modulleId: {
        type: Sequelize.INTEGER,
      }, */
    });
  
    return Seance;
  };
  