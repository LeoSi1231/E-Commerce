const routerCategoria = require("express").Router();

const {
    verCategorias,
    verCategoria,
    crearCategoria,
    editarCategoria,
    eliminarCategoria
} = require("../controllers/categoria");

const catchAsync = require("../utils/catchAsync");
const {validarCategoria} = require("../validations/validations"); 

routerCategoria
    .route("/")
    .get(catchAsync(verCategorias))
    .post(validarCategoria,catchAsync(crearCategoria));

routerCategoria
    .route("/:id")
    .put(catchAsync(editarCategoria))
    .delete(catchAsync(eliminarCategoria))
    .get(catchAsync(verCategoria));

module.exports = routerCategoria;
