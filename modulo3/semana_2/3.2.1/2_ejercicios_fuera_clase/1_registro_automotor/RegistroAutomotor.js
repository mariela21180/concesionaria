"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var leer_info_1 = require("./leer_info");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(id, nombre, autosTexto) {
        this.id = id;
        this.nombre = nombre;
        if (autosTexto) {
            this.autos = this.cargarAutos(autosTexto);
        }
        else {
            this.autos = new Array();
        }
    }
    RegistroAutomotor.prototype.getId = function () {
        return this.id;
    };
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * Carga de autos al registro a partir de un archivo de texto
     * @param autosTexto Es la ruta del archivo de texto a leer
     */
    RegistroAutomotor.prototype.cargarAutos = function (autosTexto) {
        var autosString;
        var aux;
        var retorno;
        autosString = leer_info_1["default"](autosTexto);
        retorno = new Array();
        for (var i = 0; i < autosString.length; i++) {
            aux = autosString[i].split(',');
            var auto = new Auto_1["default"](aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4]);
            retorno.push(auto);
        }
        return retorno;
    };
    /**
     * Busca por patente en la lista del autos del registro.
     * @param patente La patente a buscar
     * @returns Si encuentra la patente, retorna el indice del auto, sino retorna -1.
     */
    RegistroAutomotor.prototype.buscarPatente = function (patente) {
        var indice = -1;
        for (var i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getPatente() === patente) {
                indice = i;
            }
        }
        ;
        return indice;
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        if (this.buscarPatente(auto.getPatente()) === -1) {
            this.autos.push(auto);
        }
        else {
            console.log("Ya existe un auto con esa patente en este registro.");
        }
    };
    RegistroAutomotor.prototype.burcarAuto = function (patente) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            return null;
        }
        else {
            return this.autos[indice];
        }
    };
    RegistroAutomotor.prototype.borrarAuto = function (patente) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            console.log("No existe un auto con esa patente en este registro.");
        }
        else {
            this.autos.splice(indice, 1);
            console.log("Auto borrado.");
        }
    };
    RegistroAutomotor.prototype.actualizarAuto = function (patente, titular) {
        var indice = this.buscarPatente(patente);
        if (indice === -1) {
            console.log("No existe un auto con esa patente en este registro.");
        }
        else {
            if (titular) {
                this.autos[indice].setTitular(titular);
                console.log("Auto actualizado.");
            }
            else {
                console.log("Debe ingresar el nombre del titular a actualizar.");
            }
        }
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
