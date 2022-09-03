/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let index = 0; index < Math.floor(s.length / 2); index++) {
        const rightIndex = s.length - index - 1;
        [ s[index], s[rightIndex ] ] = [ s[rightIndex], s[index] ];
    }
};
