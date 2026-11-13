import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Esto ayuda a encontrar la ruta exacta del archivo juegos.json
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaArchivo = path.join(__dirname, '../data/juegos.json');

// Función para obtener los juegos (lee el archivo JSON)
export const obtenerJuegos = (req, res) => {
  try {
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
    const juegos = JSON.parse(contenido);
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo leer el archivo de juegos' });
  }
};

// Función por si después querés agregar juegos
export const crearJuego = (req, res) => {
  res.json({ mensaje: 'Función para crear juego (próximamente)' });
};