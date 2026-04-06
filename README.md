# Umamusume-Wiki

**Umamusume-Wiki** es una plataforma web dinámica e interactiva diseñada para la consulta de datos del juego *Umamusume: Pretty Derby*. El proyecto funciona como una aplicación donde el contenido de las tablas se genera dinámicamente a partir de fuentes de datos externas en formato JSON, ofreciendo una experiencia de usuario fluida sin recargas innecesarias de página.

---

## Funcionalidades Principales

* **Visualización Dinámica de Datos:** Carga automática de información para las secciones de Trainees, Support Cards, Skills y Banners utilizando archivos JSON locales.
* **Sistema de Búsqueda en Tiempo Real:** Filtro de texto integrado que permite localizar elementos por nombre instantáneamente en las tablas de habilidades, soportes y personajes.
* **Ordenamiento Avanzado:** Capacidad de organizar los datos por criterios específicos como Rareza (estrellas o grados SSR/SR) y Tier (SS, S, A, B) mediante lógica de programación personalizada.
* **Tierlist Interactiva:** Sistema de pestañas (Tabs) que permite alternar entre el ranking de personajes y cartas de apoyo dinámicamente.
* **Diseño Responsivo:** Interfaz adaptada para diferentes dispositivos con una estética coherente al juego original, utilizando ribbons y badges de colores.

---

## Desafíos Resueltos

Durante el desarrollo se enfrentaron y solucionaron los siguientes retos técnicos:

1. **Manejo Avanzado del DOM:** Uno de los mayores desafíos fue la generación y manipulación de nodos en tiempo real. Se implementó una lógica para limpiar los contenedores (`innerHTML = ''`) antes de cada renderizado para evitar la duplicación de datos al filtrar o reordenar.
2. **Implementación de Fetch API:** La integración de la Fetch API para consumir archivos JSON locales fue fundamental. Se resolvió la gestión de promesas para asegurar que los datos se cargaran correctamente antes de intentar manipular los elementos de la interfaz.
3. **Lógica de Ordenamiento no Alfabética:** Dado que los Tiers y Rarezas no siguen un orden alfabético estándar, se crearon mapas de objetos para asignar valores numéricos y permitir un ordenamiento lógico (`sort()`).

---

## Estructura del Proyecto

```text
/
├── index.html          # Página de inicio con diseño Hero
├── LICENSE             # Licencia MIT del proyecto
├── .gitignore          # Archivos excluidos del repositorio
├── css/                # Estilos modulares para cada sección
├── js/                 # Lógica en Vanilla JavaScript para manejo de datos
├── pages/              # Documentos HTML secundarios (Trainees, Skills, etc.)
├── data/               # Bases de datos en formato JSON
└── assets/             # Recursos visuales e imágenes del proyecto
```

## Requisitos Técnicos Cumplidos (EA2)

* **Interactividad:** Implementación de eventos de escucha (`click`, `change`, `keypress`) para actualizar la interfaz dinámicamente sin recargar la página.
* **Lógica Modular:** Organización del código mediante funciones y scripts independientes que separan la interfaz de la lógica de negocio.
* **Manejo del DOM:** Generación dinámica de contenido mediante la creación de elementos y actualización de contenedores en tiempo real.
* **Fetch API:** Carga asíncrona de datos externos desde archivos JSON para alimentar las tablas y secciones del sitio.
* **Diseño y UX:** Uso de CSS avanzado para lograr una interfaz profesional, responsiva y temática.

## Autores

* **José Carlos Ruiz Díaz**
* **Alejandro Guzmán Cabrales**
