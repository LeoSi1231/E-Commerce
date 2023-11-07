const routerUsuarios = require("express").Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
} = require("../controllers/usuario");

const catchAsync = require("../utils/catchAsync");
const {validarUsuario} = require("../validations/validations");

routerUsuarios
    .route("/")
    .get(catchAsync(verUsuarios))
    .post(validarUsuario, catchAsync(crearUsuario));

routerUsuarios
    .route("/:id")
    .put(catchAsync(editarUsuario))
    .delete(catchAsync(eliminarUsuario))
    .get(catchAsync(verUsuarios))


module.exports = routerUsuarios