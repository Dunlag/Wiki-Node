const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("lista de usuarios");
});

router.get("/edit", (req, res) => {
  res.send("formulario de edicion");
});

router.post("/update", (req, res) => {
  res.send("gestion del formulario de edicion");
});

module.exports = router;
