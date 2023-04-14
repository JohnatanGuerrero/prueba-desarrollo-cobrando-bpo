PRUEBA DE DESARROLLO COBRANDO BPO

Solución a la prueba de desarrollo para el cargo de Desarrador de www.lexerlatam.com

## Tabla de contenidos

- [Instalación](#instalación)
- [Características](#características)
- [Guía de uso](#ejemplo-de-uso)
- [Configuración](#ejemplo-de-uso)

## Instalación

Uso con docker:

1. Clonar el repositorio de github -> git clone https://github.com/JohnatanGuerrero/prueba-desarrollo-cobrando-bpo.git
2. Montar la imagen de docker -> docker-compose up --build
    - Nota: Si tiene problemas con alguna imagen del contenedor -> usar docker-compose up --build nuevamente
3. Probar en http://localhost:1234/api o http://localhost/api con nginx

## Características

Microservicio empleados:

- Creación de empleados
- Modificación de empleados
- Eliminación de empleados
- Consulta de empleados

Añadidos para ejecución de pruebas:

- Creación de departamentos : clave foránea necesaria para la creación de empleados
- Consulta de departamentos 

## Guía de uso 

Endpoints

GET `/api/empleados`
Recupera todos los empleados

GET `/api/empleados/:id`   
Recupera un empleado específico por ID

POST `/api/empleados`
Crea un nuevo empleado

PUT `/api/empleados/:id`
Actualiza un usuario específico por ID

DELETE `/api/empleados/:id`
Elimina un usuario específico por ID

Solo para pruebas: 

GET `/api/departamentos`
Recupera todos los departamentos

POST `/api/departamentos`
Crea un nuevo departamento

## Configuración

El archivo .env almacena las variables de entorno de la aplicación:

- `PORT`: El puerto para ejecutar el servidor. El valor predeterminado es 1234.












