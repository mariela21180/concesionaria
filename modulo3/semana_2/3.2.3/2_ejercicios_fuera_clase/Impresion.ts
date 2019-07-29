import Opcion from "./Opcion";

export default class Impresion {
    private texto: string[];
    private opcion: Opcion;

    constructor(texto: string[], opcion: Opcion) {
        this.texto = texto;
        this.opcion = opcion;
    }

    public getTexto(): string[] {
        return this.texto;
    }

    public getOpcion(): Opcion {
        return this.opcion;
    }
}