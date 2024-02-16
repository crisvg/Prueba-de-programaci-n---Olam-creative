import PropTypes from 'prop-types';

export const Matrix = ({ matrix }) => {
    return (
        <div id="wordsearch">
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className="cell cellVal">
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

Matrix.propTypes = {
    matrix: PropTypes.array.isRequired
};