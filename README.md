# GAMESQUAD
*Integrantes:* Guadalupe Aguilar Morón
## Descripción
- *Problema que resuelve:* En los videojuegos multijugador competitivos, los jugadores suelen enfrentarse a partidas frustrantes por la falta de comunicación, toxicidad y la disparidad de rangos en el matchmaking automático. GameSquad permite encontrar compañeros de equipo (squads) compatibles mediante filtros de rango, idioma y micrófono activo, con integración directa a llamadas de voz.

- *Qué incluye esta versión final:* Aplicación web completa estructurada en un entorno full-stack, con una API REST en Node.js/Express para la gestión de datos, un frontend dinámico desarrollado en React con componentes reutilizables, y el cumplimiento de los requisitos mínimo.

## Comandos	para instalar y	ejecutar el	programa
# Backend
- En la primer terminal, ejecutás lo siguiente:
cd backend (enter)
npm install (enter)
npm run dev (enter)
- El servidor debería mostrarte un mensaje como "Servidor en http://localhost:3000".
# Frontend
- Sin cerrar la primer terminal, abrí una segunda terminal nueva y ejecutá:
cd frontend (enter)
npm install (enter)
npm run dev (enter)
- Vite iniciará la aplicación y te dará una dirección local (ejemplo:http://localhost:5173), si abris esa dirección en el navegador, verás la interfaz de GameSquad conectada a la API.

## Lista de Endpoints de la API
# Estado del Servidor
* `GET /api/salud` — Verifica que el servidor esté activo y respondiendo correctamente (`{ estado: "ok" }`).

# Usuarios y Autenticación (`/api/usuarios`)
* `POST /api/usuarios/registro` — Registra un nuevo usuario en la base de datos.
* `POST /api/usuarios/login` — Inicia sesión y valida las credenciales del usuario.
* `PUT /api/usuarios/actualizar-password` — Actualiza la contraseña de un usuario existente.
* `POST /api/usuarios/verificar-email` — Verifica si un correo electrónico está registrado en el sistema.

# Juegos (`/api/juegos`)
* `GET /api/juegos` — Obtiene el listado completo de juegos registrados.
* `POST /api/juegos` — Crea y registra un nuevo juego en la base de datos.

## Capturas de pantalla Computadora
-Registro de usuario
![Registro](/docs/images/Registro.png)
-Inicio de sesión
![Inicio de Sesión](/docs/images/InicioSesion.png)
-Pantalla Home
![Pantalla Home](/docs/images/Home.png)
-Perfil de usuario
![Pantalla perfil del usuario](/docs/images/Perfil.png)
-Lobby Interno
![Pantalla del lobby interno](/docs/images/LobbyInterno.png)
-Pantalla de Partidas
![Partidas](/docs/images/Partidas.png)
-Pantalla de mi Equipo
![Mi equipo](/docs/images/Equipos.png)
-Pantalla de la comunidad
![Comunidad](/docs/images/Comunidad.png)

## Capturas de pantalla Celular
-Registro de usuario
![Registro](/docs/images/registrocel.png)
- Inicio de sesión
![Inicio de sesión](/docs/images/iniciosesioncel.png)
-Pantalla Home
![Pantalla Home](/docs/images/homecel.png)
-Perfil de usuario
![Pantalla perfil de usuario](/docs/images/perfilcel.png)
-Lobby Interno
![Pantalla del lobby interno](/docs/images/lobbycel.png)
-Pantalla de partidas
![Partidas](/docs/images/partidascel.png)
-Pantalla de mi equipo
![Mi equipo](/docs/images/equipocel.png)
-Pantalla de la comunidad
![Comunidad](/docs/images/comunidadcel.png)


















