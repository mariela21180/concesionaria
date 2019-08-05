import IAcelerador from "./IAcelerador";

export default abstract class Automotor implements IAcelerador {
    protected marca: string;
    protected modelo: string;
    protected combustible: string;
    protected año: number;
    protected patente: string;
    protected titular: string;
    protected velocidadActual: number;
    protected estaPrendido: boolean;


    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string, titular: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.año = año;
        this.patente = patente;
        this.titular = titular;
    }
    public setTitular(titular: string): void {
        this.titular = titular;
    }
    public prenderApagar(): void {
        this.estaPrendido = !this.estaPrendido;
    }
    public getPatente(): string {
        return this.patente;
    }
    abstract acelerar(): void;
    abstract desacelerar(): void;
    abstract toString(): string;
}