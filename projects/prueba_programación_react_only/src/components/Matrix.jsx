import PropTypes from 'prop-types';


export const Matrix = ({ matrix }) => {
    const rows = matrix.split('\n');
    const cells = rows.map((row) => row.split(','));

    return (
        <div className="matrix">
            {cells.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className="cell">
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