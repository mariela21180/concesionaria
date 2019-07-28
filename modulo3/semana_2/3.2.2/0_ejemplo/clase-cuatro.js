var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        if (modelo == undefined) {
            this.modelo = "Modelo Sin Definir";
        }
        else {
            this.modelo = modelo;
        }
        this.marca = marca;
        this.velocidad = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidad += 10;
    };
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Auto;
}());
var miAuto = new Auto("Fiat");
var miSegundoAuto = new Auto("Fiat", "Uno");
console.log("Antes de acelerar:");
console.log("Auto sin Modelo: ", miAuto);
console.log("Auto con Modelo: ", miSegundoAuto);
miAuto.acelerar();
miSegundoAuto.acelerar();
console.log("Despues de acelerar:");
console.log("Auto sin Modelo: ", miAuto);
console.log("Auto con Modelo: ", miSegundoAuto);
