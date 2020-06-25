export interface viaje {
    Fecha_inicial?: Date;
    Fecha_final?:Date;
    motivo?: string;
    lugar?: string;
    Proyecto_Proy_ID?: string;
    Descripcion?:string;
};
export interface viaje_id {
    viaje_ID?:number
};
export interface fotos_viaje {
    URL?:string,
    Viaje_Viaje_ID?:number,
    Viaje_Proyecto_Proy_ID?:number,
    Nombre?:string
};