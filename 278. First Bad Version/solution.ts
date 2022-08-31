/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    // 1 2 3 4 5 6 7 8 9 10
    // start = 1
    // end = 10
    // middle = 5
    
    // n = 10, bad = 2  
    return function(n: number): number {
        let start = 1;
        let end = n;
        
        while (start <= end) {
            const middle = Math.floor((start + end) / 2);

            if (isBadVersion(start)) {
                return start;
            } else if (isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }
    };
};
