export default class Decodificador {
    private nroRegistro: number;
    private marca: string;
    private modelo: string;

    public constructor(nroRegistro: number, marca: string, modelo: string) {
        this.nroRegistro = nroRegistro;
        this.marca = marca;
        this.modelo = modelo;
    }
}