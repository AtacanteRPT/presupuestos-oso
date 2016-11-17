# Presupuesto Empresun 

hacer correr de manera Local tener 
#Instalado
Nodejs ( https://nodejs.org/es/ )
# Tener Instalado
 Git (https://git-scm.com/download/win)

Pasos 
--------
# tener creado una base de Datos 
```
create database empresu;
use empresu;
create table users(
    id int not null auto_increment,
    nombre varchar(250) not null,
    email varchar(250) not null,
    password varchar(250) not null,
    primary key(id)
);
```
copiamos el repositorio
```
git clone https://github.com/AtacanteRPT/presupuestos-oso.git
```
entramos en la carpeta creada 
```
cd presupuestos-oso
```
una vez adentro instalamos las dependencias de Package.json
```
npm install
```
listo ahora solo hay que hacerlo correr
```
npm start
```
Abrir Un navegador

```
http://localhost:4000/
```