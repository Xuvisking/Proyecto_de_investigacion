# README

## Introducción

Este software es una aplicación web creada para la Universidad Diego Portales mediante las herramientas de Angular, Node js y mysql.

Este software tiene como fin cumplir con los requisitos dados por el stakeholder que consta de realizar la gestión de documental, eventos y de miembros en cuantos proyectos y grupos de investigación.

para un mayor detalle sobre el diseño del software, revisar informe de desarrollo ubicado en Documentos.


 ## Guía de instalación

En primer lugar realizamos el git clone, luego se debe de instalar:

```
Nodejs 12.18.0
Angular CLI 9.1.8
MySQL
```
Para instalar Angular 
```
sudo apt install ng-common

```

También se requiere el módulo de angular devkit, se puede instalar en consola con el siguiente comando:

```
npm install --save-dev @angular-devkit/build-angular
```


## Explicación de componentes del Frontend y Backend:


Los componentes del Fronted están están ubicados en la ruta:
```
 "Proyecto_de_investigacion/Frontend/src/app/Componentes"
```

Los componentes del Backend están están ubicados en la ruta:
```
 "Proyecto_de_investigacion/Backend/servidor/rutas"
```
### Login y Inicio
Los componentes trabajados en al momento de iniciar sesion es únicamente login y el de I

### Gestión de proyecto
La funcionalidad básica de gestión de un proyecto está implementada tanto en Backend y Frontend, en donde en esta última los documentos asociados son los siguientes:

gestionproyecto, este componente es encargado de realizar la gestión del proyecto, es decir, modifica el nombre, descripción, estado y además eliminar el propio proyecto.

proyecto, este muestra la vista del proyecto, mostrando así, además del nombre, descripción y estado también los eventos y su respectiva documentación.

documentos, componente encargado de mostrar los documentos asociados al proyecto (su html es importado en el componente anterior)

documentos-form, este componente se encarga de realizar la gestión documental, de esta manera es posible añadir, modificar o eliminar documentos al proyecto.

generarproyecto, este componente trata de la generación de de un nuevo proyecto ingresando un leve formulario en que se llena Nombre, estado y Descripción del proyecto

gestionmiembros, en este componente trata de invitar un usuario al proyecto, eliminar un miembro de proyecto, cambiar jefe de proyecto con un miembro de proyecto

Estos componentes hacen uso de los archivos documentos.js y proyectos .js por parte del Backend, ubicados en la ruta descrita inicialmente.

### Grupos

gestion-grupos muestra la información a editar dentro de un grupo, tales como agregar y eliminar miembros y eliminar el grupo

grupolistmiembros retorna una lista de los miembros que están incluidos en un grupo

grupomiembroseliminar elimina un miembro de un grupo, necesita el ID del grupo e ID del miembro

grupos-list muestra una lista de los grupos a los que uno pertenece

grupos es una herramienta para crear un grupo

gruposeliminar es una herramienta para eliminar 

gruposmiembros muestra una lista de los miembros de un grupo

grupover muestra la página principal de un grupo en específico

### Eventos
Para solucionar esta problemática se dividieron los eventos en tres tipos que son: viajes, presentaciones y reuniones; esto debido a que cada evento tiene diferentes atributos.
 
el evento viaje puede ser utilizado para salir a terreno, viajes a conferencias, entre otros,Este se caracteriza por tener una fecha de inicio y una de fin, el lugar de destino, el motivo del viaje, una descripción detallada de lo que se hizo durante el viaje, imágenes que ayudan a complementarlo y documentos asociados que pueden ser los tickets de vuelo, boletas de hospedajes, entre otros.
 
Dada esta breve descripción del evento tipo viaje, se pueden encontrar los archivos correspondientes a este componente en la ruta:Frontend/src/app/componentes/viajes, en Frontend/src/app/componentes/viajes-from y las rutas de la api están en Backend/servidor/rutas/eventos.js.
 
La primera ruta corresponde a la visualización de los viajes lo que permite ver los viaje como también acceder al panel de gestión de estos, y la segunda corresponde al formulario de viaje, el cual se usa para la creación y la actualización de un formulario y finalmente la ruta de la api es donde se consumen los datos desde la base de datos. El funcionamiento de cada código se encuentra comentado en los archivos del código.
 
El evento presentación debe ser utilizado para guardar las presentaciones que se hicieron sobre el proyecto, como presentación de avances, presentaciones en conferencias, entre otros. Este tipo de evento se componen de un título, una fecha, un motivo, una descripción de la presentación, un presentador y finalmente una sección para adjuntar el archivo de la presentación.
 
Los archivos correspondientes a este evento se encuentran en las rutas Frontend/src/app/componentes/presentaciones , Frontend/src/app/componentes/presentaciones-form y las rutas de la api están en Backend/servidor/rutas/presentacion.js.
 
En la primera ruta podemos encontrar la visualizaciones de las presentación y el panel para el crud de las presentaciones, en la segunda ruta se encuentra el formulario para la creación y la modificación de los de las presentaciones y finalmente la ruta de la api es la que se utiliza para guardar y consumir la información de las presentaciones en la base de datos.
 
Finalmente el último evento es el de reuniones, que fue creado para guardar todos los avances que se hagan en una reunión, los acuerdos que se llegaron en una reunión, anotar la repartición del trabajo que se llevaran los distintos colaboradores o grupos, entre otros. Las reuniones se componen de un título, la fecha, un motivo, una descripción, los participantes y algún documento asociado a esta reunión.
 
Las rutas en donde se encuentran los archivos fundamentales del evento reunión son:
Frontend/src/app/componentes/reuniones, Frontend/src/app/componentes/reuniones-form y 
Backend/servidor/rutas/reuniones.js.

Al igual que en los eventos anteriores la primera ruta corresponde al componente que permite la visualización y acceder a la la gestión del evento reunión, mientras que la segunda ruta accede a un componente compuesto por un formulario, el cual permite la creación y la modificaciones de una reunión, y finalmente la última ruta accede a las funciones que se encuentran en la api, la cual nos permite consumir y agregar información a la base de datos relacionada con las reuniones.

Como último punto cabe destacar que para guardar documentos o imágenes, estas se suben a la api, donde se pensó que posteriormente podrían ser enviadas a los servicios de aws. Las rutas de estas imágenes y documentos son guardadas en una tabla de la base de datos para luego poder consumir estos archivos desde el cliente.

