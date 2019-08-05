import Automotor from "./Automotor";

export default class Moto extends Automotor {
    private cilindrada: number;

    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string, titular: string, cilindrada: number) {
        super(marca, modelo, combustible, año, patente, titular);
        this.cilindrada = cilindrada;
    }
    public acelerar(): void {
        this.velocidadActual += 20;
    }
    public desacelerar(): void {
        this.velocidadActual -= 20;
    }
    public toString(): string {
        return this.marca+","+this.modelo+","+this.combustible+","+this.año+","+this.patente+","+this.titular+",,,,"+this.cilindrada+",,"
    }
}