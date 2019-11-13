import { Vehiculo } from "./vehiculo.entity";


export class Auto extends Vehiculo{
    private capacidadBaul: number;

    constructor(marca: string, modelo: string, anio: number, precio: number, kilometraje: number, capacidadBaul: number, patente?: string, puertas?: number, airbags?: number, funcionaOk?: boolean) {
        super(marca, modelo, anio, precio, kilometraje, patente, puertas, airbags, funcionaOk);
        super.tipo = "auto";
        super.capacidad = capacidadBaul;
    }

    public getCapacidadBaul(): number {
        return super.capacidad;
    }
}