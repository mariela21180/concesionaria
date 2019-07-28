import IAuto from "./IAuto";
import Autos from "./Autos";

export default class AutoDeportivo extends Autos implements IAuto {

    protected marca: string;
    protected modelo: number;
    protected dominio: string;
    protected velocidad: number;

    constructor(marca: string, modelo: number, dominio: string, velocidad: number) {
        super(false);
        this.marca = marca;
        this.modelo = modelo;
        this.dominio = dominio;
        this.velocidad = velocidad;
    }
    acelerar(): void {
        this.velocidad += 1;
        console.log("Runnnnn");
    } 
    getVelocidadActual(): number {
        return this.velocidad;
    }
    encender() {
        this.encendido = true;
    }
}