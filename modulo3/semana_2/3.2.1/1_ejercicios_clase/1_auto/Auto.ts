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

    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getCombustible(): string {
        return this.combustible;
    }
    getAño(): number {
        return this.año;
    }
    getPatente(): string {
        return this.patente;
    }
}

export default Auto;