exports.getAllUsers = (req, res) => {
  res.status(200).send("Accediendo a todos los usuarios");
};

exports.getUser = (req, res) => {
  res.status(200).send("Accediendoal usuario con id: " + req.params.id);
};

exports.createUser = (req, res) => {
  const { nombre, apellido, email, telefono } = req.body;
  res.status(200).json({ nombre, apellido, email, telefono });
};

exports.updateUser = (req, res) => {
  const { nombre, apellido, email, telefono } = req.body;
  res.status(200).json({
    id: req.params.id,
    nombre,
    apellido,
    email,
    telefono
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "Usuario eliminado con id: " + req.params.id });
};
