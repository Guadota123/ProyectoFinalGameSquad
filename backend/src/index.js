import express from 'express';
import cors from 'cors';
import juegosRoutes from './routes/juegosRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/salud', (req, res) => {
  res.json({ estado: 'ok' });
});

app.use('/api/juegos', juegosRoutes);
app.use('/api/usuarios', usuariosRoutes);

// '0.0.0.0' permite que acepte peticiones externas de otros dispositivos en tu Wi-Fi (como tu celular)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en la red en el puerto ${PORT}`);
});