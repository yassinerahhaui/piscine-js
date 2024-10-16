const pronoun = (strings) => {
    const words = strings.split(/[\s,]+/);
    const result = {};

    words.forEach((word, index) => {
        word = word.toLowerCase();
        if (checkIsPronoun(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            if (index !== words.length - 1 && !checkIsPronoun(words[index + 1])) {
                result[word].word.push(words[index + 1]);
            }
            result[word].count++;
        }
    });

    return result;
};

const checkIsPronoun = (word) => {
    const pronoun = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    return pronoun.includes(word.toLowerCase())
}