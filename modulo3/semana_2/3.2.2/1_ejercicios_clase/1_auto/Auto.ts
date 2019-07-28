class Auto {
    private marca: string
    private modelo: string
    private combustible: string
    private año: number
    private patente: string

    public constructor(marca: string, modelo: string, combustible: string, año: number, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.año = año;
        this.patente = patente;
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
}

export default Auto;