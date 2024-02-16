function workListSorter(wordList) {
    let wordListSorted = [...wordList];

    wordListSorted.sort(function (a, b) {
        return b.length - a.length;
    });

    return wordListSorted;
}

function usableLetters(wordList) {
    let letters = [];
    let usableWordList = workListSorter(wordList);

    for (let i = 0; i < usableWordList.length; i++)
        letters.push(usableWordList[i][0]);

    return new Set(letters);
}

export function wordListSolver(wordList, wordSearchMatrix) {
    let wordResults = [];

    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i];
        let found = false;
        let letterPositions = [];

        for (let r = 0; r < wordSearchMatrix.length; r++) {
            for (let c = 0; c < wordSearchMatrix[r].length; c++) {
                let letter = wordSearchMatrix[r][c];
                if (!usableLetters(wordList).has(letter))
                    continue;

                let current = "";

                // (1): test right direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r][c + word.length - 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r][c + l];
                            pos.push([r, c + l]);
                        }
                        if (current == word) {
                            console.log("right match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (2): test left direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r][c - word.length + 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r][c - l];
                            pos.push([r, c - l]);
                        }
                        if (current == word) {
                            console.log("left match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (3): test up direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r - word.length + 1][c] == word[word.length - 1]) {

                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r - l][c];
                            pos.push([r - l, c]);
                        }

                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (4): test down direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r + word.length - 1][c] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r + l][c];
                            pos.push([r + l, c]);
                        }

                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (5): test down-right direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r + word.length - 1][c + word.length - 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r + l][c + l];
                            pos.push([r + l, c + l]);
                        }
                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (6): test up-right direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r - word.length + 1][c + word.length - 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r - l][c + l];
                            pos.push([r - l, c + l]);
                        }
                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (7): test up-left direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r - word.length + 1][c - word.length + 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r - l][c - l];
                            pos.push([r - l, c - l]);
                        }
                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }

                // (8): test down-left direction
                try {
                    let pos = [];
                    if (wordSearchMatrix[r + word.length - 1][c - word.length + 1] == word[word.length - 1]) {
                        for (let l = 0; l < word.length; l++) {
                            current += wordSearchMatrix[r + l][c - l];
                            pos.push([r + l, c - l]);
                        }
                        if (current == word) {
                            console.log("up match: ", word);
                            found = true;
                            letterPositions.push(pos);
                            break;
                        }
                        current = "";
                    }
                }
                catch (error) { continue }
            }
            if (found) {
                break; // Salir del bucle externo si la palabra ya se encontró
            }
        }
        wordResults.push({
            word: word,
            found: found ? 'wordFound' : 'wordNotFound',
            positions: letterPositions
        });
    }
    return wordResults;
}