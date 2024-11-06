# Proyecto de Malla Curricular FCFM

Este proyecto es una herramienta interactiva que permite visualizar la malla curricular de la Facultad de Ciencias Físicas y Matemáticas (FCFM). Su objetivo principal es contribuir al open source, que sea una herramienta para estudiantes de la facultad.

## 🎯 Objetivo del Proyecto

El objetivo de este proyecto es ofrecer una plataforma intuitiva y de fácil navegación para consultar la malla curricular. Permitiendo ver los prerrequisitos de manera visual.

## Hardcode

Para tener los datos de las mallas curriculares primero se usó un script en python para formatear el html de ucampus del semestre otoño y el semestre primavera del departamento en un archivo .ts. Ese script no se encuentra actualmente en ese repositorio.

Debido a que hay inconsistencias entre los prerrequisitos del JPG oficial de la malla y ucampus sólo se encuentran 5 mallas actualmente, y aún están sujetas a cambios.
Por ejemplo en el JPG de Industrias aparece que la primera práctica profesional tiene de prerrequisitos ramos del mismo semestre, lo cual es una clara inconsitencia. Luego en Ucampus 2024 Primavera aparece que sólo tiene de prerrequisito el taller de práctica, mientras que en Otoño aparecen ramos más coherentes, pero aún así por las dudas se hará una revisión más tarde.

De momento se ha asegurado de que todo sea coherente en las mallas de Computación, Eléctrica, Física, Astronomía y Matemática, por lo que son las mallas que están actualmente. El código para mostrar las otras rutas se encuentra comentado, se puede descomentar fácilmente con shortcuts, por ejemplo, en vscode es seleccionando y presionando ctrl + k, + u

## 🚀 Funcionalidades Principales

- **Visualización interactiva**: Explora la malla curricular de manera gráfica.
- **Consulta de prerrequisitos**: Cada asignatura muestra claramente sus prerrequisitos y dependencias.
- **Marcado temporal**: Con ambos clicks uno puede marcar temporalmente los ramos de la malla

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React, Tailwind CSS, TypeScript, React-Icons
- **Herramientas**: Git, Vite

## 🖥️ Instalación y Uso

Para ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/fgonzalezurriola/Mallas-Fcfm-fgonzalezurriola/
   ```

2. Ve a la carpeta del proyecto:

   ```bash
   cd Mallas-Fcfm-fgonzalezurriola
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

El proyecto estará disponible en tu navegador en `http://localhost:5173`.

## 🌐 Despliegue

Actualmente el proyecto está desplegado en Vercel, puedes acceder a él: [malla curricular de FCFM](https://mallas-fcfm-fgonzalezurriola.vercel.app/).

---

