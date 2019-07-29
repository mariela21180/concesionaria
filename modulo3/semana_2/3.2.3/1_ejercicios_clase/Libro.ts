export default class Libro {
    private id: number;
    private autor: string
    private titulo: string
    private editorial: string
    private edicion: number


    public constructor(id: number, autor: string, titulo: string, editorial: string, edicion: number) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.editorial = editorial;
        this.edicion = edicion;
    }

    public getId(): number {
        return this.id;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public getAutor(): string {
        return this.autor;
    }
    public getEditorial(): string {
        return this.editorial;
    }
    public getEdicion(): number {
        return this.edicion;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public setAutor(autor: string): void {
        this.autor = autor;
    }
    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }
    public setEdicion(edicion: number): void {
        this.edicion = edicion;
    }
}