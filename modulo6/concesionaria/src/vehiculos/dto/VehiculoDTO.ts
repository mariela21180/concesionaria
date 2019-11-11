export class VehiculoDTO {
  readonly tipo: string;
  readonly marca: string;
  readonly modelo: string;
  readonly anio: number;
  readonly precio: number;
  readonly kilometraje: number;
  readonly capacidad: number;
  readonly patente: string;
  readonly puertas: number;
  readonly airbags?: number;
  readonly funcionaOk: boolean;
}