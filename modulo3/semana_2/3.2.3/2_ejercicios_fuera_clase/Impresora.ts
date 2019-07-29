// Documentacion de la Libreria usada https://www.npmjs.com/package/print-message

import Impresion from "./Impresion";
import * as printMessage from './node_modules/print-message';

export default class Impresora {
    private colaDeImpresion: Impresion[];

    public constructor() {
        this.colaDeImpresion = new Array();
    }

    public agregarACola(impresion: Impresion): void {
        this.colaDeImpresion.push(impresion);
    }

    public imprimir(): void {
        this.colaDeImpresion.forEach(impresion => {
            printMessage(impresion.getTexto(), impresion.getOpcion());
        });
        this.colaDeImpresion = [];
    }

}