class Telefono {
    estaPrendido: boolean
    nivelBateriaActual: number

    public constructor(nivelBateriaInicial: number) {
        this.nivelBateriaActual = nivelBateriaInicial;
        this.estaPrendido = false;
    }

    sacarFotos(): void {
        console.log("Click");
    };

    llamar(): void {
        console.log("Ring");
    };

    mensajear(): void {
        console.log("Plin");
    };

}