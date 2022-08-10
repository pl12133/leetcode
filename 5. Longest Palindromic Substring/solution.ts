function isPalindrome(s: string, left: number = 0, right: number = s.length - 1): boolean {
    // console.log('isPalindrome', { s, left, right, substr: s.substring(left, right) });
    while (left < right) {
        if (s[left++] !== s[right--]) {
            return false;
        }
    }
    
    return true;
}

/**
 * Exploding a string into all possible substrings:
 * 'abcdefg'
 * 'a      ' 0,1 // distance = 1
 * ' b     ' 1,2
 * '  c    ' 2,3
 * '   d   ' 3,4
 * '    e  ' 4,5
 * '     f ' 5,6
 * '      g' 6,-
 * 'ab     ' 0,2 // distance = 2
 * ' bc    ' 1,3
 * '  cd   ' 2,4
 * '   de  ' 3,5
 * '    ef ' 4,6
 * '     fg' 5,-
 * 'abc    ' 0,3 // distance = 3
 * ' bce   ' 1,4 // distance = 3
 * ...
 * 'abcdefg' 0,6
*/
function explodeSubstrings(str: string): string[] {
    let index = 0;
    let distance = 1;

    const substrs = [];
    while (distance <= str.length) {
        while ((index + distance) <= str.length) {
            substrs.push(str.substring(index, index + distance));
            ++index;
        }
        index = 0;
        ++distance;
    }
    return substrs;
}

function findAllPalindromes(str: string): string[] {
    let index = 0;
    let distance = 1;

    const results = [];
    while (distance <= str.length) {
        while ((index + distance) <= str.length) {
            const substr = str.substring(index, index + distance);
            if (isPalindrome(substr)) {
                results.push(substr);
            }
            ++index;
        }
        index = 0;
        ++distance;
    }
    return results;
}

function longestPalindrome(s: string): string {
    if (!s.length) {
        return '';
    }
    
    // special case where entire string is a palindrome
    if (isPalindrome(s)) {
        return s;
    }

    const allPalindromes: string[] = findAllPalindromes(s);
//    console.log({ allPalindromes })
    let longest: string = '';
    
    for (let index = 0; ++index < allPalindromes.length;) {
        const palindrome = allPalindromes[index];
        
        longest = longest.length > palindrome.length
            ? longest
            : palindrome;
    }
    
    return longest;
};
