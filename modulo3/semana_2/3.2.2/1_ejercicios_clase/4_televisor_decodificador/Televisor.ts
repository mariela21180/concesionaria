import Decodificador from "./Decodificador";

export default class Televisor {
    private marca: string;
    private modelo: string;
    private TOTAL_CANALES: number;    
    private estaPrendido: boolean;
    private canalActual: number;
    private volumenActual: number;
    private decodificador: Decodificador;
    
    public constructor(decodificador: Decodificador, marca: string, modelo: string) {
        this.decodificador = decodificador;
        this.marca = marca;
        this.modelo = modelo;
        this.canalActual = 0;
        this.volumenActual = 0;
        this.estaPrendido = false;
        this.TOTAL_CANALES = 99;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    }

    public subirCanal(): void {
        if (this.canalActual === this.TOTAL_CANALES) {
            this.canalActual = 0;
        } else {
            this.canalActual++;
        }
    }

    public bajarCanal(): void {
        if (this.canalActual === 0) {
            this.canalActual = this.TOTAL_CANALES;
        } else {
            this.canalActual--;
        }
    }

    public irACanal(canal:number): void {
        if (canal <= this.TOTAL_CANALES && canal >= 0) {
            this.canalActual = canal;
        }
    }

    public subirVolumen(): void {
        if (this.volumenActual === 100) {
            this.volumenActual = 100;
        } else {
            this.volumenActual++;
        }
    }

    public bajarVolumen(): void {
        if (this.volumenActual === 0) {
            this.volumenActual = 0;
        } else {
            this.volumenActual--;
        }
    }
}