function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    } 
    const matrix: string[][] = Array(...Array(numRows)).map(() => []);
    let charIndex = 0, y = 0;
    while (charIndex < s.length) {
       while (y < numRows && s[charIndex]) {
            matrix[y++].push(s[charIndex++]);
            // console.log('Moving down:', { char: s[charIndex - 1], y, matrix: JSON.stringify(matrix) });
        }
        y -= 1;

        while (0 < y && s[charIndex]) {
            matrix[--y].push(s[charIndex++]);
            // console.log('Moving OVER:', { char: s[charIndex], y, matrix: JSON.stringify(matrix) });
        }
        y += 1;
    }

    return matrix.map(line => line.join('')).join('');
};
