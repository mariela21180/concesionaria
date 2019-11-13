import { Vehiculo } from "./vehiculo.entity";

export class Camioneta extends Vehiculo{
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, precio: number, kilometraje: number, capacidadCarga: number, patente?: string, puertas?: number, airbags?: number, funcionaOk?: boolean) {
        super(marca, modelo, anio, precio, kilometraje, patente, puertas, airbags, funcionaOk);
        super.tipo = "camioneta";
        super.capacidad = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return super.capacidad;
    }
}