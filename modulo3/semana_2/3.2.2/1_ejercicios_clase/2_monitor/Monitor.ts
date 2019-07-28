class Monitor{
    private estaPrendido: boolean
    private fuenteActual: string
    private fuentes: string[]

    public constructor(fuentes: string[]) {
        this.estaPrendido = false;
        this.fuentes = fuentes;
        this.fuenteActual = this.fuentes[0];
    }

    public getEstaPrendido(): boolean {
        return this.estaPrendido;
    }
    public getFuenteActual(): string {
        return this.fuenteActual;
    }
    public getFuentes(): string[] {
        return this.fuentes;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    }

    public cambiarFuente(fuente: string): void {
        if (fuente != undefined) {
            let indice = this.fuentes.indexOf(fuente);
            
            if ( indice > -1 ) {
                this.fuenteActual = this.fuentes[indice]; 
                console.log('Nueva fuente seleccionada:', this.fuenteActual,'\n');
            } else {
                console.log('El monitor no posee la fuente especificada\n');
            }
        }
    }
}

export default Monitor;