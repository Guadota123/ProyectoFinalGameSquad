import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaUsuarios = path.join(__dirname, '../data/usuarios.json');

// Función auxiliar para leer usuarios
const leerUsuarios = () => {
  try {
    if (!fs.existsSync(rutaUsuarios)) return [];
    const contenido = fs.readFileSync(rutaUsuarios, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    return [];
  }
};

// 1. REGISTRO DE USUARIO
export const registrarUsuario = (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const usuarios = leerUsuarios();

  // Verificar si el correo ya está registrado
  const usuarioExiste = usuarios.find(u => u.email === email);
  if (usuarioExiste) {
    return res.status(400).json({ error: 'El correo ya está registrado' });
  }

  // Crear el nuevo usuario
  const nuevoUsuario = {
    id: Date.now(),
    nombre,
    email,
    password
  };

  usuarios.push(nuevoUsuario);
  fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2), 'utf-8');

  res.status(201).json({ mensaje: 'Usuario registrado con éxito', usuario: { id: nuevoUsuario.id, nombre, email } });
};

// 2. INICIO DE SESIÓN (LOGIN)
export const loginUsuario = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña requeridos' });
  }

  const usuarios = leerUsuarios();

  // Buscar el usuario por email
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Verificar si la contraseña es incorrecta
  if (usuario.password !== password) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  res.json({ 
    mensaje: 'Inicio de sesión exitoso', 
    usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } 
  });
};

// 3. ACTUALIZAR CONTRASEÑA
export const actualizarPassword = (req, res) => {
  const { email, nuevaPassword } = req.body;

  if (!email || !nuevaPassword) {
    return res.status(400).json({ error: 'El correo y la nueva contraseña son obligatorios' });
  }

  const usuarios = leerUsuarios();
  const index = usuarios.findIndex(u => u.email === email);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Actualizamos la contraseña del usuario encontrado
  usuarios[index].password = nuevaPassword;

  // Guardamos el array actualizado en el archivo usuarios.json
  try {
    fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2), 'utf-8');
    res.json({ mensaje: 'Contraseña actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la nueva contraseña' });
  }
};
// 4. VERIFICAR SI EL CORREO EXISTE
export const verificarEmail = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'El correo es obligatorio' });
  }

  const usuarios = leerUsuarios();
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return res.status(404).json({ error: 'El correo no está registrado en el sistema' });
  }

  res.json({ mensaje: 'Correo verificado con éxito' });
};