const routerPublicacion = require("express").Router();

const {
    verPublicaciones,
    verPublicacion,
    crearPublicacion,
    editarPublicacion,
    eliminarPublicacion
} = require("../controllers/publicacion");

const catchAsync = require("../utils/catchAsync");
const {validarPublicacion} = require("../validations/validations");


routerPublicacion
    .route("/")
    .get(catchAsync(verPublicaciones))
    .post(validarPublicacion, catchAsync(crearPublicacion));

routerPublicacion
    .route("/:id")
    .put(catchAsync(editarPublicacion))
    .delete(catchAsync(eliminarPublicacion))
    .get(catchAsync(verPublicacion));

module.exports = routerPublicacion;