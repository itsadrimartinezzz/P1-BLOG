# P1 - Blog Web

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web tipo blog que permite visualizar publicaciones, consultar detalles, realizar búsquedas y gestionar contenido mediante el consumo de una API.

El proyecto se encuentra en una fase funcional, en la cual se han implementado las principales características requeridas.

## Objetivo

Desarrollar una aplicación web dinámica aplicando los siguientes conceptos:

* Consumo de APIs (GET y POST)
* Manipulación del DOM
* Validación de formularios
* Búsqueda y filtrado de información
* Organización modular de JavaScript
* Uso de Git y GitHub

## Integrantes

* Mishell Ciprian 
* Adriana Martínez 

## Tecnologías utilizadas

* HTML
* CSS
* JavaScript

### Detalle técnico adicional

Además de las tecnologías base, el proyecto hace uso de:

- DummyJSON API para la obtención de publicaciones
- LocalStorage para almacenar publicaciones creadas por el usuario
- JavaScript modular (ES Modules) para organizar la lógica del sistema

### Organización del código

El proyecto se estructura de forma modular para separar responsabilidades:

- `js/api/` → manejo de consumo de API
- `js/modules/` → lógica principal (renderizado, filtros, formularios)
- `js/utils/` → utilidades como validaciones
- `pages/` → vistas adicionales del sitio

## Estructura del proyecto

```bash
css/
js/
pages/
index.html
README.md
.gitignore
```

## Funcionalidades esperadas

* Listado de publicaciones
* Vista de detalle de publicaciones
* Creación de publicaciones
* Búsqueda y filtrado
* Navegación entre secciones

## Funcionalidades implementadas

Actualmente, el sistema cuenta con las siguientes funcionalidades:

- Visualización de publicaciones desde una API externa
- Creación de nuevas publicaciones mediante formulario
- Almacenamiento local de publicaciones creadas
- Vista de detalle para cada publicación (Read More)
- Búsqueda por texto en publicaciones
- Filtrado por autor
- Filtrado por etiquetas
- Paginación de resultados
- Eliminación de publicaciones creadas localmente
- Validaciones en formularios utilizando JavaScript

## Estado del proyecto

Finalizado

## Experiencia de usuario

El diseño de la aplicación busca ofrecer una experiencia clara, sencilla y ordenada. Se priorizó la facilidad de navegación entre secciones, permitiendo al usuario consultar publicaciones, filtrarlas y crear contenido sin dificultad.

Asimismo, se incorporaron validaciones y mensajes que guían al usuario durante la interacción con el sistema.

## Decisiones técnicas

Se decidió trabajar con JavaScript puro, sin el uso de frameworks, para reforzar los conceptos fundamentales del curso. El uso de LocalStorage permite simular persistencia de datos sin necesidad de un backend.

Además, la estructura modular del código facilita la organización, mantenimiento y escalabilidad del proyecto.

## Estado actual del proyecto

El proyecto ha alcanzado un estado funcional que permite cumplir con los requerimientos principales, incluyendo consumo de API, creación de publicaciones, filtrado y navegación entre vistas.

## Conclusión

Este proyecto representa una aplicación práctica de los conocimientos adquiridos en el curso, integrando conceptos técnicos y buenas prácticas de desarrollo web. También permitió fortalecer el trabajo en equipo y la organización del código mediante el uso de Git.
