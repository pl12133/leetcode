function lengthOfLongestSubstring(s: string): number {
    const hashmap = new Map();
    let pointer: number = 0;
        
    const chars = s.split('');
    for (let index = 0; index < chars.length; ++index) {
        const char = chars[index];
        
        const currentSubstr: string = hashmap.get(pointer) || '';
        if (index > 0 && !currentSubstr.includes(char)) {
            hashmap.set(pointer, `${currentSubstr}${char}`);
        } else {
            // Move the index back to the character following the duplicate
            index = index - currentSubstr.length + currentSubstr.indexOf(char) + 1;
            pointer = index;
            hashmap.set(pointer, chars[pointer]);
        }
    }
    
    let longest: number = 0;
    for (let substr of hashmap.values()) {
        longest = Math.max(longest, substr.length);
    }

    return longest;
};
