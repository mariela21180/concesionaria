import Auto from "./Auto";

export default class AutoCarrera extends Auto { 
    private numeroCompetencia: number;
    private sponsors: string[];

    public constructor(marca: string, modelo: string, numeroCompetencia: number, sponsors?: string[]) { 
        super(marca, modelo);
        this.numeroCompetencia = numeroCompetencia;
        if (sponsors) {
            this.sponsors = sponsors;
        } else {            
            this.sponsors = [];
        }
    }
    public acelerar(): void { 
        this.velocidadActual += 50;
    } 
    public getNumeroCompetencia(): number {
        return this.numeroCompetencia;
    }
    public cambiarNumeroCompetencia(numeroNuevo: number): void {
        this.numeroCompetencia = numeroNuevo;
    }

    public agregarSponsor(sponsor: string): void {
        let indice = this.buscarSponsor(sponsor);
        if ( indice === -1) {
            this.sponsors.push(sponsor);
        } else {
            console.log("El sponsor ya existe");
        }
    }
    public eliminarSponsor(sponsor: string) : void {
        let indice = this.buscarSponsor(sponsor);
        if ( indice != -1) {
            this.sponsors.splice(indice);
        } else {
            console.log("El sponsor no existe");
        }
    }
    private buscarSponsor(sponsor: string): number {
        for (let i: number = 0; i<this.sponsors.length; i++) {
            if (this.sponsors[i] === sponsor) {
                return i;
            }
        }
        return -1;
    }
}