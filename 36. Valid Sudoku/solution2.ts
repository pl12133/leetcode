function isValidSudoku(board: string[][]): boolean {
    const length = board.length;

    let rows = Array(...Array(length)).map(() => new Set());
    let cols = Array(...Array(length)).map(() => new Set());
    let subgrids = Array(...Array(length)).map(() => new Set());

    for (let index = 0; index < length * length; index++) {
        const rowIndex = Math.floor(index / length);
        const colIndex = index % length;
        const subgridIndex = Math.floor(rowIndex / 3) + (Math.floor((colIndex / 3)) * 3);

        const char = board[rowIndex][colIndex];

        // ignore empty spaces
        if (char === '.') { continue; }

        const rowSet = rows[rowIndex];
        const colSet = cols[colIndex];
        const subgridSet = subgrids[subgridIndex];

        if (rowSet.has(char) || colSet.has(char) || subgridSet.has(char)) {
            return false;
        }

        rowSet.add(char);
        colSet.add(char);
        subgridSet.add(char);
    }
    return true;
};
