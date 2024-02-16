# Sopa de Letras
Este proyecto implementa una aplicación que resuelve sopas de letras con las siguientes funcionalidades:
- **Entrada de datos**: Permite al usuario ingresar la matriz (14 x 14) de letras y la lista de palabras a través de dos áreas de texto.

    - **Procesamiento**: Convierte la entrada de la matriz en una matriz bidimensional. Convierte la entrada de la lista de palabras en una lista de palabras. Utiliza la función `wordListSolver` para encontrar las palabras en la matriz.

    - **Salida**: Muestra la matriz de letras en la pantalla. Muestra la lista de palabras con una indicación de si cada palabra fue encontrada, verde, o no, rojo.
## Tecnologías utilizadas:
   - React
   - JavaScript
   - HTML
   - CSS
## Recursos especiales utilizados:
- CSS de razzlepuzzles.com
## Guía de despliegue:
1. Instalar las dependencias: `npm install`
2. Iniciar el servidor de desarrollo: `npm run dev`
    La aplicación se abrirá en el navegador. En la URL indicada en la terminal.
    

> [!NOTE]Nota
> Para modificar el contenido de la sopa de letras, ingresa la las letras separadas por comas y con saltos de línea al finalizar la fila y la lista de palabras en el elemento `input` correpondiente.  

## Limitaciones
 La aplicación solo acepta matrices de 14\*14 letras
## Próximos pasos
- Agregar colores a las palabras encontradas en la sopa de letras
- Agregar la posibilidad de que los usuarios puedan crear y compartir sus propias sopas de letras.