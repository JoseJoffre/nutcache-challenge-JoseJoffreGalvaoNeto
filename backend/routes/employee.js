const express = require("express");
const routes = express.Router();

const EmployeeController = require("../controllers/EmployeeController");

routes.post("/patients", EmployeeController.create);
routes.get("/patients", EmployeeController.list);
routes.get("/patients/:id", EmployeeController.find);
routes.put("/patients/:id", EmployeeController.update);
routes.delete("/patients/:id", EmployeeController.destroy);

module.exports = routes;
