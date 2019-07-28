export default class Auto {
    private marca: string
    private modelo: string
    private combustible: string
    private año: number
    private patente: string
    private titular: string;


    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string, titular?: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.año = año;
        this.patente = patente;
        if (titular) {
            this.titular = titular;
        } else {
            this.titular = '';
        }
    }

    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getCombustible(): string {
        return this.combustible;
    }
    public getAño(): number {
        return this.año;
    }
    public getPatente(): string {
        return this.patente;
    }
    public getTitular(): string {
        return this.patente;
    }
    public setTitular(titular: string): void {
        this.titular = titular;
    }
}