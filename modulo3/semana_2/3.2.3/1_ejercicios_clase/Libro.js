"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(id, autor, titulo, editorial, edicion) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.editorial = editorial;
        this.edicion = edicion;
    }
    Libro.prototype.getId = function () {
        return this.id;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Libro.prototype.setEdicion = function (edicion) {
        this.edicion = edicion;
    };
    return Libro;
}());
exports["default"] = Libro;
