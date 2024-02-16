import { useState } from 'react';
import { Matrix } from './components/Matrix'

function App() {
    const [matrix, setMatrix] = useState([[]]);
    const [matrixInput, setMatrixInput] = useState('');
    const [wordList, setWordList] = useState(null);
    const [wordListInput, setWordListInput] = useState('');
    const [result, setResult] = useState([]);
    const [messageError, setMessajeError] = useState('');

    const validateMatriXInput = (value) => {
        const trimmedValue = value.trim();
        const isValidFormat =
            /^[a-zA-Z ,\n]+$/.test(trimmedValue) &&
            trimmedValue.match(/.{14}\n/g) &&
            trimmedValue.split(",").every((part) => part.length <= 14);

        return isValidFormat && trimmedValue.split(",").every((part) => part.trim());
    };

    const validateWordListInput = (value) => {
        const trimmedValue = value.trim();
        const isValidFormat = /^[\w\s]+$/.test(trimmedValue);
        const isValidList = trimmedValue.split(",").every((word) => word.length > 0);

        return isValidFormat && isValidList;
    };


    const handleMatrizChange = (event) => {
        setMatrixInput(event.target.value);
        setMessajeError(validateMatriXInput(event.target.value) ? null : 'Formato de la matriz es incorrecto');
    };

    const handlePalabrasChange = (event) => {
        setWordListInput(event.target.value);
        setMessajeError(validateWordListInput(event.target.value) ? null : 'Formato de la lista de palabras es incorrecto');
    };

    const createGrid = (matrixInString) => {
        const rows = matrixInString.split('\n');
        const grid = rows.map((row) => row.split(','));

        return grid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateMatriXInput(matrixInput) && validateWordListInput(wordListInput)) {
            setMessajeError(null);
            setMatrix(createGrid(matrixInput));
            setWordList(wordListInput);
        } else setMessajeError('Formato de matriz o lista de palabras incorrecto')

        // Implementar la lógica para buscar las palabras en la sopa de letras
        // y actualizar el estado de "resultados".

        //setResultados([]);
    };

    return (
        <div className="App">
            <header>
                <h1>Sopa de letras</h1>
            </header>
            <form onSubmit={handleSubmit}>
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
            <Matrix matrix={matrix} />
            <br />
            <div className='resultados'>
                <ul>
                    {result.map((resultado) => (
                        <li key={resultado.word} className={resultado.found ? 'encontrada' : 'no-encontrada'}> {resultado.word}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;