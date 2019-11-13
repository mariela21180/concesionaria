import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vehiculo')
export class Vehiculo {
    @PrimaryGeneratedColumn() id: number;
    @Column()
    public tipo: string;
    @Column()
    protected marca: string;
    @Column()
    protected modelo: string;
    @Column()
    protected anio: number;
    @Column()
    protected precio: number;
    @Column()
    protected kilometraje: number;
    @Column()
    protected capacidad: number;
    @Column()
    protected patente: string;
    @Column()
    protected puertas: number;
    @Column({ nullable: true })
    protected airbags: number;
    @Column()
    protected funcionaOk: boolean;

    constructor (marca: string, modelo: string, anio: number, precio: number, kilometraje: number, patente?: string, puertas?: number, airbags?: number, funcionaOk?: boolean) {
        this.tipo = null;
        this.capacidad = 0;
        this.marca= marca;
        this.modelo = modelo;
        this.anio= anio;
        this.precio = precio;
        this.kilometraje = kilometraje;
        if (patente) {
            this.patente = patente;
        } else {
            this.patente = null;
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
        this.funcionaOk = funcionaOk;
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
