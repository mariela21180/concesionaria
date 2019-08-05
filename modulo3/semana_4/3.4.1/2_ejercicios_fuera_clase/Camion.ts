import Automotor from "./Automotor";

export default class Camion extends Automotor {
    private ejes: number;
    private acoplado: boolean;

    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string, titular: string, ejes: number, acoplado: boolean) {
        super(marca, modelo, combustible, año, patente, titular);
        this.ejes = ejes;
        this.acoplado = acoplado;
    }
    public acelerar(): void {
        this.velocidadActual += 30;
    }
    public desacelerar(): void {
        this.velocidadActual -= 30;
    }
    public toString(): string {
        return this.marca+","+this.modelo+","+this.combustible+","+this.año+","+this.patente+","+this.titular+",,,,,"+this.ejes+","+this.acoplado
    }
}