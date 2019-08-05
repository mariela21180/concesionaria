"use strict";
exports.__esModule = true;
var leer_info_1 = require("./leer_info");
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var guardar_info_1 = require("./guardar_info");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(id, nombre, automotoresTexto) {
        this.id = id;
        this.nombre = nombre;
        if (automotoresTexto) {
            this.automotores = this.cargarAutomotores(automotoresTexto);
        }
        else {
            this.automotores = new Array();
        }
    }
    RegistroAutomotor.prototype.getId = function () {
        return this.id;
    };
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * Carga de automotores al registro a partir de un archivo de texto
     * @param automotoresTexto Es la ruta del archivo de texto a leer
     */
    RegistroAutomotor.prototype.cargarAutomotores = function (automotoresTexto) {
        var automotoresString;
        var aux;
        var retorno;
        automotoresString = leer_info_1["default"](automotoresTexto);
        retorno = new Array();
        for (var i = 0; i < automotoresString.length; i++) {
            aux = automotoresString[i].split(',');
            var automotor = void 0;
            if (aux[6]) {
                automotor = new Auto_1["default"](aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[6]), parseInt(aux[7]), parseInt(aux[8]));
            }
            else if (aux[9]) {
                automotor = new Moto_1["default"](aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[9]));
            }
            else if (aux[10]) {
                automotor = new Camion_1["default"](aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[10]), Boolean(JSON.parse(aux[11])));
            }
            retorno.push(automotor);
        }
        return retorno;
    };
    RegistroAutomotor.prototype.guardarAutomotores = function (nombreArchivo) {
        var automotoresString = "";
        for (var i = 0; i < this.automotores.length; i++) {
            automotoresString += this.automotores[i].toString();
            if (i < this.automotores.length - 1) {
                automotoresString += "\n";
            }
        }
        guardar_info_1["default"](nombreArchivo, automotoresString);
    };
    /**
     * Busca por patente en la lista del automotores del registro.
     * @param patente La patente a buscar
     * @returns Si encuentra la patente, retorna el indice del automotor, sino retorna -1.
     */
    RegistroAutomotor.prototype.buscarPatente = function (patente) {
        var indice = -1;
        for (var i = 0; i < this.automotores.length; i++) {
            if (this.automotores[i].getPatente() === patente) {
                indice = i;
            }
        }
        ;
        return indice;
    };
    RegistroAutomotor.prototype.agregarAutomotor = function (automotores) {
        if (this.buscarPatente(automotores.getPatente()) === -1) {
            this.automotores.push(automotores);
        }
        else {
            console.log("Ya existe un automotor con esa patente en este registro.");
        }
    };
    RegistroAutomotor.prototype.burcarAutomotor = function (patente) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            return null;
        }
        else {
            return this.automotores[indice];
        }
    };
    RegistroAutomotor.prototype.borrarAutomotor = function (patente) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            console.log("No existe un automotor con esa patente en este registro.");
        }
        else {
            this.automotores.splice(indice, 1);
            console.log("Automotor borrado.");
        }
    };
    RegistroAutomotor.prototype.actualizarAutomotor = function (patente, titular) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            console.log("No existe un automotor con esa patente en este registro.");
        }
        else {
            if (titular) {
                this.automotores[indice].setTitular(titular);
                console.log("Automotor actualizado.");
            }
            else {
                console.log("Debe ingresar el nombre del titular a actualizar.");
            }
        }
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
