export interface viaje {
    Viaje_ID?:number;
    Fecha_inicial?: Date;
    Fecha_final?: Date;
    Motivo?: string;
    Lugar?: string;
    Proyecto_Proy_ID?:number;
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
export interface doc_viaje {
    URL?:string,
    Viaje_Viaje_ID?:number,
    Viaje_Proyecto_Proy_ID?:number,
    Nombre?:string
};
/*
export interface viaje{
    Descripcion?:string,
    Fecha_final?: Date,
    Fecha_inicial?: Date,
    Lugar?:string,
    Motivo?:string,
    Proyecto_Proy_ID?:number,
    Viaje_ID?:number
}*/