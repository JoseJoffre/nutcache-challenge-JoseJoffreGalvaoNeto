const Employee = require("../models/Employee");
const { StatusCodes } = require("http-status-codes");
const DateFns = require("date-fns");
const { isEmpty } = require("lodash");


class EmployeeController {
  async list() {
    try {
      const users = await Employee.list();

      if (isEmpty(users)) {
        return {
          msg: "No Registered Employess",
          error: StatusCodes.NOT_FOUND,
        };
      }
      return users;
    } catch (err) {
        throw new Error(err);
    }
  }

  async getByID(id) {
    try {
      const user = await Employee.getByID(id);
      if (isEmpty(user)) {
        return {
          msg: "Employee not found.",
          error: StatusCodes.NOT_FOUND,
        };
      }
      return user;
    } catch (err) {
        throw new Error(err);
    }
  }
  async create(employee) {
    
    const { name,  cpf, birthDate, email, startDate, teamID, gender, customizeGender } = employee;

      if (await Employee.findCPF(cpf)) {
          return{error: true, status: StatusCodes.BAD_REQUEST }
      }

    const now = new Date();

    const insert = {
        name: name,
        email: email,
        gender: gender,
        customizeGender: customizeGender,
        cpf: cpf,
        teamID:teamID,
        birthDate: DateFns.format(DateFns.parseISO(birthDate), "yyyy-MM-dd'T'HH:mm:ss"),
        startDate: DateFns.format(DateFns.parseISO(startDate), "yyyy-MM-dd'T'HH:mm:ss"),
        created: now,
        updated: now,
    };
    console.log('INSERT', insert)
    const userId = await Employee.create(insert);



    return userId;
  }

  async delete(id) {
    const user = await Employee.getByID(id);
    if (!isEmpty(user)) {
      await Employee.delete(id);
      return id;
    }
    return {
      msg: "Employee not found",
      status: StatusCodes.NOT_FOUND,
    };
  }

  async update(insert, id) {
    const user = await Employee.getByID(id);
    if (!isEmpty(user)) {
        const result = await Employee.update(insert, id);
        console.log(result);
      return 
    }
    return {
      msg: "Employee not found",
      status: StatusCodes.NOT_FOUND,
    };
  }
}

module.exports = new EmployeeController();
