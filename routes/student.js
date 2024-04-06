var { Student } = require("./bd");
var express = require("express");
var router = express.Router();


router.get("/", async function (req, res, next) {
  try {
    const student = await Student.findAll();
    res.send(student);
  } catch (error) {
    next(error);
  }
  res.send("estudent get");
});

router.post("/", async function (req, res, next) {
  try {
    const { name, lastname, photo } = req.body;
    const student = await Student.create({ name, lastname, photo });
    res.send("estudiante creado con éxito");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      res.send(student);
    } else {
      res.status(404).send('Estudiante no encontrado');
    }
  } catch (error) {
    next(error);
  }
});

router.put("/", function (req, res, next) {
  res.send("estudent put");
});

router.delete("/:id", async function (req, res, next) {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.destroy();
      res.send('Estudiante eliminado');
    } else {
      res.status(404).send('Estudiante no encontrado');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
