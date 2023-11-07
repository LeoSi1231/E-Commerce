const routerComentarios = require("express").Router();

const {
    crearComentario,
    editarComentario,
    eliminarComentario
} = require("../controllers/comentario");

const  catchAsync  = require("../utils/catchAsync");
const {validarComentario} = require("../validations/validations");

routerComentarios
    .route("/:id")
    .put(catchAsync(editarComentario))
    .delete(catchAsync(eliminarComentario))
    
    

routerComentarios
    .route("/")
    .post(validarComentario, catchAsync(crearComentario))
   

 module.exports = routerComentarios