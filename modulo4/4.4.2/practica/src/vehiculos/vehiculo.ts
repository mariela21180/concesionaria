export default class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected patente: string;
    protected precio: number;
    protected puertas: number;
    protected airbags: number;
    protected kilometraje: number;
    protected funcionaOk: boolean;

    constructor (marca: string, modelo: string, anio: number, precio: number, kilometraje: number, patente?: string, puertas?: number, airbags?: number, funcionaOk?: boolean) {
        this.marca= marca;
        this.modelo = modelo;
        this.anio= anio;
        this.precio = precio;
        this.kilometraje = kilometraje;
        if (patente) {
            this.patente = patente;
        } else {
            this.patente = "";
        }
        if (puertas) {
            this.puertas = puertas;
        } else {
            this.puertas = null;
        }
        if (airbags) {
            this.airbags = airbags;
        } else {
            this.airbags = null;
        }
        if (funcionaOk) {
            this.funcionaOk = funcionaOk;
        } else {
            this.funcionaOk = null;
        }
    }
    
    public setPatente(patente: string): void {
        this.patente = patente;
        
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public setKilometraje(kilometraje: number): void {
        this.kilometraje = kilometraje;
    }

    public setPuertas(puertas: number): void {
        this.puertas = puertas;
    }

    public setAirbags(airbags: number): void {
        this.airbags = airbags;
    }
    
    public getMarca(): string {
        return this.marca;
    } 
    public getModelo(): string {
        return this.modelo;
    } 
    public getAnio(): number {
        return this.anio;
    } 
    public getPatente(): string {
        return this.patente;
    } 
    public getPrecio(): number {
        return this.precio;
    } 
    public getPuertas(): number {
        return this.puertas;
    } 
    public getAirbags(): number {
        return this.airbags;
    } 
    public getKilometraje(): number {
        return this.kilometraje;
    } 
    public getFuncionaOk(): boolean {
        return this.funcionaOk;
    }   
}
