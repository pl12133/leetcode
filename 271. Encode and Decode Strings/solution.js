function encode(strs) {
    let output = '';
    for (let index = 0; index < strs.length; ++index) {
        const str = strs[index];
        output += `${str.length}|${str}`;
    }
    return output;
}

function decode(str) {
    const output = [];
    let index = 0;
    while (index < str.length) {
        let chunkLength = '';
        let token = str[index];
        while (token !== '|') {
            chunkLength += token;
            token = str[++index];
        }

        index += 1; // skip over the field delimeter "|"
        const chunk = str.substr(index, Number(chunkLength));
        index += Number(chunkLength);
        output.push(chunk);
    }
    return output;
}
