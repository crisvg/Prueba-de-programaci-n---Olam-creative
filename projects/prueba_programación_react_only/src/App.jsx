// Importaciones
import { useState } from 'react';
import { Matrix } from './components/Matrix';
import { wordListSolver } from './logic/WordSearchSolver.js';

// Función principal del componente App
function App() {
    // Estados para la matriz, entrada de la matriz, lista de palabras y entrada de la lista de palabras
    const [matrix, setMatrix] = useState([[]]);
    const [matrixInput, setMatrixInput] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [wordList, setWordList] = useState([]);
    const [wordListInput, setWordListInput] = useState('');
    // Estado para el resultado de la búsqueda
    const [result, setResult] = useState([]);
    // Estado para el mensaje de error
    const [messageError, setMessajeError] = useState('');

    // Función para validar la entrada de la matriz
    const validateMatriXInput = (value) => {
        // Eliminar espacios en blanco
        const trimmedValue = value.trim();
        // Validar formato: letras, comas, saltos de línea y longitud de filas
        const isValidFormat =
            /^[a-zA-Z ,\n]+$/.test(trimmedValue) &&
            trimmedValue.match(/.{14}\n/g) &&
            trimmedValue.split(",").every((part) => part.length <= 14);
        // Validar que cada elemento de la matriz no tenga más de 14 caracteres
        return isValidFormat && trimmedValue.split(",").every((part) => part.trim());

    };
    // Función para validar la entrada de la lista de palabras
    const validateWordListInput = (value) => {
        // Eliminar espacios en blanco
        const trimmedValue = value.trim();
        const isValidFormat = /^[\w\s]+$/.test(trimmedValue);
        const isValidList = trimmedValue.split(",").every((word) => word.length > 0);
        return isValidFormat && isValidList;
    };

    // Función para manejar cambios en la entrada de la matriz
    const handleMatrizChange = (event) => {
        // Actualizar el estado de la entrada de la matriz
        setMatrixInput(event.target.value);
        // Validar la entrada y mostrar un mensaje de error si es necesario
        setMessajeError(validateMatriXInput(event.target.value) ? null : 'Formato de la matriz es incorrecto');
    };

    // Función para manejar cambios en la entrada de la lista de palabras
    const handlePalabrasChange = (event) => {
        // Actualizar el estado de la entrada de la lista de palabras
        setWordListInput(event.target.value);
        // Validar la entrada y mostrar un mensaje de error si es necesario
        setMessajeError(validateWordListInput(event.target.value) ? null : 'Formato de la lista de palabras es incorrecto');
    };

    // Función para crear una matriz a partir de la cadena de entrada
    const createGrid = (matrixInString) => {
        // Dividir la cadena en filas
        const rows = matrixInString.split('\n');
        // Convertir cada fila en un array de caracteres
        const grid = rows.map((row) => row.split(','));
        return grid;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Validar la entrada de la matriz y la lista de palabras
        if (!(validateMatriXInput(matrixInput) && validateWordListInput(wordListInput))) {
            setMessajeError('Formato de matriz o lista de palabras incorrecto');
            return;
        }

        // Limpiar el mensaje de error
        setMessajeError('');

        // Crear una nueva matriz a partir de la entrada
        let newMatrix = createGrid(matrixInput);
        // Crear una nueva lista de palabras a partir de la entrada
        let newWordList = wordListInput.split('\n');

        // Actualizar los estados con la matriz, la lista de palabras y el resultado de la búsqueda
        setMatrix(newMatrix);
        setWordList(newWordList);
        setResult(wordListSolver(newWordList, newMatrix));
    };

    // Renderizado del componente
    return (
        <div className="App">
            <header>
                <h1>Sopa de letras</h1>
            </header>
            <section id='content'>
                <form id='word-input' onSubmit={handleSubmit}>
                    <label htmlFor="matriz">Matriz:
                        <textarea
                            id="matrix"
                            name="matrix"
                            value={matrixInput}
                            onChange={handleMatrizChange}
                        />
                    </label>
                    <label htmlFor="palabras">Palabras:
                        <textarea
                            id="wordList"
                            name="wordList"
                            value={wordListInput}
                            onChange={handlePalabrasChange}
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                {messageError && <span className="error-message">{messageError}</span>}
                <br />
                <div id='contentSetter'>
                    <Matrix matrix={matrix} />
                </div>
                <br />
                <div id='result'>
                    <ul id="words">
                        {result.map((resultado) => (
                            <li key={resultado.word} className={`word ${resultado.found}`}> {resultado.word}</li>
                        ))}
                    </ul>
                </div>
            </section >
        </div >
    );
}

export default App;