/**
 * Naive solution:
 *   function sortedSquares(nums: number[]): number[] {
 *     return nums.map(num => num ** 2).sort((a, b) => a - b);
 *.  };
 */

/**
 * Follow up: Squaring each element and sorting the new array is
 * very trivial, could you find an O(n) solution using a
 * different approach?
 */

function sortedSquares(nums: number[]): number[] {
    const negativeSquares = [];

    const sorted = nums.reduce((output, num) => {
        const squared = num ** 2;
        if (num < 0) {
            negativeSquares.push(squared);
            return output;
        }
        
        while (negativeSquares.length && negativeSquares[negativeSquares.length - 1] <= squared) {
            output = [ ...output, negativeSquares.pop() ];
        }

        return [ ...output, squared ];
    }, [])
    
    return [ ...sorted, ...negativeSquares.reverse() ];
};
