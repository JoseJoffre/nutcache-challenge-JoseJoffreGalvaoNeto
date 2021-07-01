const knex = require("../database/index");
const validator = require("validator");




class Employee {
  async list() {
    try {
      const employees = await knex.select("*").from("employee");
      return employees;
    } catch (err) {
        throw new Error(err);
    }
  }
    async getByID(id) {

    try {
        const employee = await knex.select("*").from("employee").where({ id: id });
      return employee;
    } catch (err) {
        throw new Error(err);
    }
  }
  async create(employee) {
      try {

      const id = await knex("employee").insert(employee);
      
        return await this.getByID(id);
    } catch (err) {
      throw new Error(err);
    }
  }
  async createAddress(address) {
    try {
      const result = await knex("employee_address").insert(address);
      return result;
    } catch (err) {
        throw new Error(err);
    }
  }
  async createContact(contact) {
    try {
      const result = await knex("employee_contact").insert(contact);
      return result;
    } catch (err) {
        throw new Error(err);
    }
  }

  async findCPF(cpf) {
    try {
      let result = await knex.select("*").from("employee").where({ cpf: cpf });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
        new Error(err);
    }
  }

  async findEmail(email) {
    try {
      let result = await knex.select("*").from("employee").where({ email: email });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
        new Error(err);
      return { status: false };
    }
  }
  async update(insert,id) {
    try {
        await knex.update(insert).where("id", id).table("employee");
        return insert;
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      await knex("employee").where("id", id).del();
    } catch (err) {
      throw new Error(err);
    }
  }

  //Check CPF according to Brazilian Rules
  async checkCPF(cpf) {
    cpf = await cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;
    // Banlist
    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    )
      return false;
    // Validate 1st digit
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    // Validate 2nd digit
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  }
  
}

module.exports = new Employee();
