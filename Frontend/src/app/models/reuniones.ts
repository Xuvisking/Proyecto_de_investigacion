export interface reunion {
  Reunion_ID?:number;
  Titulo?:string;
  Fecha?:string;
  Lugar?:string;
  Descripcion?:string;
  Proyecto_Proy_ID?:number;
};
export interface Doc_reunion {
  URL?:string,
  Reunion_Reunion_ID?:number,
  Presentacion_Proyecto_Proy_ID?:number,
  Nombre?:string
};
export interface participante {
    Reunion_Reunion_ID?:number,
    Reunion_Proyecto_Proy_ID?:number,
    users_User_ID?:number
};

