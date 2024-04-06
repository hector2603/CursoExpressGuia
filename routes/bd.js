const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("verceldb", "default", "dcxGX3ZwO5vo", {
  host: "ep-lingering-bread-a4e1d0fw-pooler.us-east-1.aws.neon.tech",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
});

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    photo: DataTypes.STRING,
  },
  { sequelize, modelName: "student" }
);

sequelize.sync()
  .then(() => console.log('Tablas creadas con Sequelize'))
  .catch(error => console.log(error));

module.exports = {
    Student
  };