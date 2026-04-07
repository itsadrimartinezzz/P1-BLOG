# P1 - Blog Web

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web tipo blog que permite visualizar publicaciones, consultar detalles, realizar búsquedas y gestionar contenido mediante el consumo de una API.

El proyecto se encuentra actualmente en fase inicial de desarrollo.

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

En desarrollo.
