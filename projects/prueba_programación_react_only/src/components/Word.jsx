import PropTypes from 'prop-types';


export const Word = ({ word }) => {
    return (
        <span>
            {word}
        </span>
    );
};

Word.propTypes = {
    word: PropTypes.string.isRequired
};