export default abstract class Autos {
    protected encendido: boolean;

    constructor(encendido: boolean) {
        this.encendido = false;
    }
    protected abstract encender(): void;
}