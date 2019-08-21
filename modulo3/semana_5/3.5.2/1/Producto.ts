export default class Producto {
    private id: number;
    private nombre: string;
    private costo: number;
    private cantidad: number;

    public constructor(id: number, nombre: string, costo: number, cantidad: number) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.cantidad = cantidad;
    }

    public setCosto(costo: number): void {
        this.costo = costo;
    }
    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }
    public getId(): number {
        return this.id;
    }
    public getCosto(): number {
        return this.costo;
    }
    public getCantidad(): number {
        return this.cantidad;
    }

    public toString(): string {
        return "" + this.id + "," + this.nombre + "," + this.costo + "," + this.cantidad;
    }
} 