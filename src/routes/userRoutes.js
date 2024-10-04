// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const response = require('../util/response'); // Importamos el manejador de respuestas
const Contacto = require('../models/contacto');

// Simular una base de datos en memoria
const users = [];
const contactos = [];

// Ruta para agregar un nuevo usuario
router.post('/user/register', (req, res) => {
  const { nombre, correo, telefono, direccion, usuario, pass } = req.body;

  // Validación de los campos
  if (!nombre || !correo || !telefono || !direccion || !usuario || !pass) {
    return response.error(req, res, 400, 'Todos los campos son obligatorios');
  }

  const newUser = new User(users.length + 1, nombre, correo, telefono, direccion, usuario, pass);
  users.push(newUser);

  // Respuesta exitosa
  response.success(req, res, 201, 'Usuario creado exitosamente');
});

// Ruta para loguear un usuario
router.post('/user/login', (req, res) => {
  const { usuario, pass } = req.body;

  // Validación de los campos
  if (!usuario || !pass) {
    return response.error(req, res, 400, 'Todos los campos son obligatorios');
  }

  // Respuesta exitosa
  response.success(req, res, 201, 'Usuario Correcto');
});

// Ruta para loguear un usuario
router.post('/set-contacto', (req, res) => {
  const { usuario, correo, descripcion } = req.body;

  // Validación de los campos
  if (!usuario || !correo || !descripcion) {
    return response.error(req, res, 400, 'Todos los campos son obligatorios');
  }

  const newContacto = new Contacto(contactos.length + 1, usuario, correo, descripcion);
  contactos.push(newContacto);

  // Respuesta exitosa
  response.success(req, res, 201, 'Exitoso');
});

// Ruta para loguear un usuario
router.get('/get-contacto', (req, res) => {

  // Respuesta exitosa
  res.body = contactos;
  response.success(req, res, 201, 'Exitoso');
});

module.exports = router;
