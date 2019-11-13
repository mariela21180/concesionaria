import Vehiculo from "./vehiculo";

export default class Camioneta extends Vehiculo{
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, precio: number, kilometraje: number, capacidadCarga: number, patente?: string, puertas?: number, airbags?: number, funcionaOk?: boolean) {
        super(marca, modelo, anio, precio, kilometraje, patente, puertas, airbags, funcionaOk);

        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
}