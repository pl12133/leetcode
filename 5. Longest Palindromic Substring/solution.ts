// Naive solution checking every possible substr

function isPalindrome(s: string): boolean {
    for (let left = 0, right = s.length - 1; left < right; ++left,--right) {
        if (s[left] !== s[right]) {
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

function longestPalindrome(s: string): string {
    // special case where entire string is a palindrome
    if (!s.length) {
        return '';
    }
    
    if (isPalindrome(s)) {
        return s;
    }

    const allSubstrs: string[] = explodeSubstrings(s);
    let longest: string = '';
    
    for (let index = 0; ++index < allSubstrs.length;) {
        const substr = allSubstrs[index];
        
        if (isPalindrome(substr)) {
            longest = longest.length > substr.length
                ? longest
                : substr;
        }
    }
    
    return longest;
};
