import Automotor from "./Automotor";

export default class Auto extends Automotor {
    private asientos: number;
    private airbags: number;
    private puertas: number;

    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string, titular: string, asientos: number, airbags: number, puertas: number) {
        super(marca, modelo, combustible, año, patente, titular);
        this.asientos = asientos;
        this.airbags = airbags;
        this.puertas = puertas;
    }
    public acelerar(): void {
        this.velocidadActual += 30;
    }
    public desacelerar(): void {
        this.velocidadActual -= 30;
    }
}