import UserService from '../../services/UserService.js'

const userService = new UserService();

export const getAllUsers = async (req, res) => {
  const users = await userService.getAll()
  res.status(200).send("Accediendo a todos los usuarios");
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await userService.filterById(id);
  if (!user) {
    return res.status(400).json({ 'message': 'usuario no encontrado' })
  }
  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  try {
    let data = req.body;
    await userService.create(data)
    res.status(201).send("Usuario Registrado");
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
};

export const updateUser = async (req, res) => {
  let data = req.body;
  const id = req.params.id;
  const user = await userService.filterById(id);
  if (!user) {
    return res.status(400).json({ "message": "Usuario no encontrado" });
  }
  await userService.update(id, data);
  res.status(200).send('se modifico el registro correctamente');
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await userService.filterById(id);
  if (!user) {
    return res.status(400).json({ 'message': 'usuario no encontrado' })
  }
  await userService.delete(id);
  res.status(200).send('se elimino el usuario');
};