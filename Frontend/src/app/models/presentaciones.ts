export interface presentacion {
  Presentacion_ID?:number;
  Titulo?:string;
  Fecha?:string;
  Lugar?:string;
  Presentador?:string;
  Descripcion?:string;
  Proyecto_Proy_ID?:number;
};
export interface Doc_presentacion {
  URL?:string,
  Presentacion_Presentacion_ID?:number,
  Presentacion_Proyecto_Proy_ID?:number,
  Nombre?:string
};
