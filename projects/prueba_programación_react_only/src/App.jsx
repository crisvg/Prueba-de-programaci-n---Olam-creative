import { useState } from 'react';
import { Matrix } from './components/Matrix'

function App() {
    const [matrix, setMatrix] = useState([[]]);
    const [wordList, setPalabras] = useState('');
    const [result, setResult] = useState([]);//Array de objetos que indica si la pabra fue encontrada o no

    const [messageError, setMessajeError] = useState('');

    const validateMatriXInput = (value) => {
        const trimmedValue = value.trim();
        const isValidFormat =
            /^[a-zA-Z ,\n]+$/.test(trimmedValue) &&
            trimmedValue.match(/.{14}\n/g) &&
            trimmedValue.split(",").every((part) => part.length <= 14);

        return isValidFormat && trimmedValue.split(",").every((part) => part.trim()); // Añade validación de espacios en blanco
    };

    const validateWordListInput = (value) => {
        const trimmedValue = value.trim();
        const isValidFormat = /^[a-zA-Z]+$/.test(trimmedValue.replace(/,/g, "")); // Elimina comas para validar solo letras
        const isValidList = trimmedValue.split(",").every((word) => word.length > 0); // Valida que cada palabra tenga al menos 1 letra

        return isValidFormat && isValidList;
    };


    const handleMatrizChange = (event) => {
        setMatrix(event.target.value);
        setMessajeError(validateMatriXInput(event.target.value) ? null : 'Formato de la matriz es incorrecto');
    };

    const handlePalabrasChange = (event) => {
        setPalabras(event.target.value);
        setMessajeError(validateWordListInput(event.target.value) ? null : 'Formato de la lista de palabras es incorrecto');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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
                        value={matrix}
                        onChange={handleMatrizChange}
                    />
                    {messageError && <span className="error-message">{messageError}</span>}
                </label>
                <label htmlFor="palabras">Palabras:
                    <textarea
                        id="wordList"
                        name="wordList"
                        value={wordList}
                        onChange={handlePalabrasChange}
                    />
                    {messageError && <span className="error-message">{messageError}</span>}
                </label>
                <button type="submit">Enviar</button>
            </form>
            <br />
            <Matrix matrix={matrix} />
            <br />
            <div className='resultados'>
                <ul>
                    {result.map((resultado) => (
                        <li key={resultado.word}>{resultado.found ? 'Encontrada' : 'No encontrada'}: {resultado.word}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;