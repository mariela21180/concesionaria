class Auto {
    private marca: string;
    private modelo: string;
    private velocidad: number;

    public constructor(marca: string, modelo?: string) {
        if (modelo == undefined) {
            this.modelo = "Modelo Sin Definir";
        } else {
            this.modelo = modelo;
        }
        this.marca = marca;
        this.velocidad = 0;
    }

    public acelerar(): void {
        this.velocidad += 10;
    }
    public getVelocidad(): number {
        return this.velocidad;
    }
}

let miAuto = new Auto("Fiat");
let miSegundoAuto = new Auto("Fiat", "Uno");

console.log("Antes de acelerar:");
console.log("Auto sin Modelo: ",miAuto);
console.log("Auto con Modelo: ",miSegundoAuto);
miAuto.acelerar();
miSegundoAuto.acelerar();
console.log("Despues de acelerar:");
console.log("Auto sin Modelo: ",miAuto);
console.log("Auto con Modelo: ",miSegundoAuto);