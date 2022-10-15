function lengthOfLongestSubstring(s: string): number {
    if (!s) { return 0; }
    let left = 0;
    let right = left + 1;
    let substr = s[0];
    while (right <= s.length) {
        if (left === right) {
            right++;
            continue;
        }
        if (s.indexOf(s[right - 1], left) !== right - 1) {
            left++;
            continue;
        }
        const nextSubstr = s.substring(left, right);

        if (nextSubstr.length > substr.length) {
            substr = nextSubstr;
        }
        right++;
    }
        
    return substr.length;
};
