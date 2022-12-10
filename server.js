const express = require("express");
const cors = require("cors");
const modulleRouter = require("./app/routes/modulle");
const seanceRouter = require("./app/routes/seance");
var universiteRouter = require('./app/routes/universite');
var institutRouter = require('./app/routes/institut');
const app = express();
const cookieParser = require("cookie-parser");
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
//seances et modulle
app.use("/modulle", modulleRouter);
app.use("/seance", seanceRouter);
//université et institut
app.use('/universite', universiteRouter);
app.use('/institut', institutRouter);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "admin"
  });
 
  Role.create({
    id: 2,
    name: "enseignant"
  });
 
  Role.create({
    id: 3,
    name: "etudiant"
  });
}