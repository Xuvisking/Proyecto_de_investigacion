export interface userandproyecto {
    Proyecto_Proy_ID?: number;
    Email?: string;
} 

export interface userandproyectoID {
    users_User_ID?: number;
    Proyecto_Proy_ID?: number;
} 

export interface useridandname {
    User_ID?: number;
    Usuario?: string;
} 

export interface userIDnoJP {
    Proyecto_Proy_ID?: number;
    JP?: number;
} 
export interface cambiarprivilegio {
    users_User_ID_JP?: number;
    users_User_ID?: number;
    Proyecto_Proy_ID?: number;
} 
export interface users{
    User_ID?:number;
    email?:string;
    password?:string;
    usuario ?:string;
    descripcion?:string;
}