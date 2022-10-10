function without<T>(arr: T[], value: T): T[] {
    const index = arr.indexOf(value);
    if (index === -1) { return arr; }
    return arr.slice(0, index).concat(arr.slice(index + 1));
}

const ALL_NUMBERS = ['9','8','7','6','5','4','3','2','1'];

// Hold remaining numbers in closure, test if a value is still allowed
function createCoordinateTester() {
    let remaining = [...ALL_NUMBERS];
    return function coordinateTester(
        testValue
    ): boolean {
        if (testValue !== '.') {
            if (!remaining.includes(testValue)) {
                return false;
            }

            remaining = without(remaining, testValue);
        }
        return true;
    }
}

function isValidColumn(board: string[][], columnIndex: number): boolean {
    const coordinateTester = createCoordinateTester();
    for (let rowIndex = 0; rowIndex < board.length; ++rowIndex) {
        if (!coordinateTester(board[rowIndex][columnIndex])) {
            return false;
        }
    }

    return true;
}

function isValidRow(board: string[][], rowIndex: number): boolean {
    const coordinateTester = createCoordinateTester();
    for (let columnIndex = 0; columnIndex < board.length; ++columnIndex) {
        if (!coordinateTester(board[rowIndex][columnIndex])) {
            return false;
        }
    }

    return true;
}

// coordinate is expected to be the center of the sub-box
function isValidSubBox(board: string[][], coordinate: [ number, number ]): boolean {
    const coordinateTester = createCoordinateTester();
    let [ x, y ] = coordinate;

    for (let rowIndex = x - 1; rowIndex <= x + 1; ++rowIndex) {
        for (let columnIndex = y - 1; columnIndex <= y + 1; ++columnIndex) {
            if (!coordinateTester(board[rowIndex][columnIndex])) {
                return false;
            }
        }
    }
    return true;
}

function isValidSudoku(board: string[][]): boolean {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (!isValidRow(board, rowIndex)) {
            return false;
        }
    }
    
    // board is a square so we can assume length is fine
    for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        if (!isValidColumn(board, columnIndex)) {
            return false;
        }
    }

    for (let coordX = 1; coordX < board.length; coordX += 3) {
        for (let coordY = 1; coordY < board.length; coordY += 3) {
            if (!isValidSubBox(board, [ coordX, coordY ])) {
                return false;
            }
        }
    }

    return true;
};
