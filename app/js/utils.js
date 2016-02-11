function _random(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _buildData(count = 1000) {
    const adjectives = ['pretty', 'large', 'big', 'small', 'tall', 'short', 'long', 'handsome', 'plain', 'quaint', 'clean', 'elegant', 'easy', 'angry', 'crazy', 'helpful', 'mushy', 'odd', 'unsightly', 'adorable', 'important', 'inexpensive', 'cheap', 'expensive', 'fancy'];
    const colours = ['red', 'scarlet', 'maroon', 'orange', 'yellow', 'green', 'cyan', 'mint', 'aquamarine', 'turquoise', 'blue', 'navy', 'puce', 'indigo', 'violet', 'black', 'white', 'grey', 'brown', 'tan', 'olive'];
    const nouns = ['table', 'chair', 'house', 'bbq', 'desk', 'car', 'pony', 'cookie', 'sandwich', 'burger', 'pizza', 'mouse', 'keyboard', 'cat', 'cow', 'scarf', 'mittens', 'underpants', 'bee', 'television', 'snowboard'];
    const adjectivesLen = adjectives.length;
    const coloursLen = colours.length;
    const nounsLen = nouns.length;
    const data = [];

    Array.from(Array(count).keys()).forEach(i => {
        data.push({
            id: i + 1,
            label: `${adjectives[_random(0, adjectivesLen - 1)]} ${colours[_random(0, coloursLen - 1)]} ${nouns[_random(0, nounsLen - 1)]}`,
        });
    });

    return data;
}

export { _buildData as buildData };
