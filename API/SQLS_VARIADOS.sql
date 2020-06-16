use proyecto_de_investigacion;

#mostrar atributos de las tablas
describe users;
describe proyecto;
describe grupo;
describe viaje;
describe viajes_multimedia;
#Eliminar tablas
drop table users;


#select (gets)
select * from users; 
select * from users where users.email='jose.arteaga@mail.udp.cl' and users.password='123456';
select * from viaje where Proyecto_Proy_ID=1;
select * from viajes_multimedia where ID_viaje=1;



#insert (post)
INSERT INTO users(email,password,usuario,descripcion) VALUES ('jose.arteaga@mail.udp.cl','123456','jtezz','ing civil informatica');
INSERT INTO proyecto(Nombre,Descripcion,Estado,Grupo_Grup_ID) values('DEMO','Proyecto de fase de desarrollo para proyecto de software','acticvo',1);
INSERT INTO grupo(Grup_nombre,Grup_desc,Grup_esp,Grup_pag) values('6DES','grupo de ing','informatica','www.6DES.cl');
INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values('2020-06-15 00:00:00','2020-07-25 00:00:00','Salir para tomar el sol que no veo en 3 meces','patio de mi casa',1);
INSERT INTO viajes_multimedia(ID_viaje,URL) values(1,'imagenTomandoSolcito.jpeg');
#update (put)

#Delete (delete)
