const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");
const _ = require("lodash");

//List all employees paginated.
router.get("/employees", async (req, res) => {
    
    const list = await EmployeeController.list();
  res.json(list);
});

//Get employee info by id

router.get("/employee/:id", async (req, res) => {
  const id = _.get(req, "params.id", null);
  const employee = await EmployeeController.getByID(id);
  res.json(employee);
});

//create employee
router.post("/employees", async (req, res) => {
    const name = _.get(req, "body.name", null);
    const email = _.get(req, "body.email", null);
    const gender = _.get(req, "body.gender", null);
    const customizeGender = _.get(req, "body.customizeGender", null);
    const startDate = _.get(req, "body.startDate", null)
    const teamID = _.get(req, "body.teamID", null)
    const cpf = _.get(req, "body.cpf", null);
    const birthDate= _.get(req, "body.birthDate", null);

    const employee = {
        name,
        email,
        gender,
        customizeGender,
        startDate,
        teamID,
        cpf,
        birthDate,
    };
    const create = await EmployeeController.create(employee);
    res.json(create);
    res.status(create.status);
});

router.put("/employees/:id", async (req, res) => {
    const id = _.get(req, "params.id", null);
    const name = _.get(req, "body.name", null);
    const email = _.get(req, "body.email", null);
    const gender = _.get(req, "body.gender", null);
    const customizeGender = _.get(req, "body.customizeGender", null);
    const startDate = _.get(req, "body.startDate", null)
    const teamID = _.get(req, "body.teamID", null)
    const cpf = _.get(req, "body.cpf", null);
    const birthDate= _.get(req, "body.birthDate", null);
   
  const employee = {
      name,
      email,
      gender,
      startDate,
      teamID,
      birthDate,
      cpf,
      customizeGender,
  };
    const result = await EmployeeController.update(employee, id);
    console.log("AAAA",result);
  res.json(result);

});

router.delete("/employee/:id", async (req, res) => {

const id = _.get(req, "params.id", null);
  const result = await EmployeeController.delete(id);
  res.json(result);
  res.status(result.status);
});

module.exports = router;
