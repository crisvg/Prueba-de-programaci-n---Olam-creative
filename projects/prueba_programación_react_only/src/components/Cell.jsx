import PropTypes from 'prop-types';


export const Cell = ({ children, isSelected, updateBoard, index }) => {
    const className = `cell${isSelected ? ' is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    Cell.propTypes = {
        children: PropTypes.node.isRequired,
        isSelected: PropTypes.bool,
        updateBoard: PropTypes.func,
        index: PropTypes.number,
    };

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}