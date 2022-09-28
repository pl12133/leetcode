function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const freq: { [key: string]: number } = {};
    
    let index = 0;

    while (index < t.length) {
        freq[s[index]] = (freq[s[index]] || 0) + 1;
        freq[t[index]] = (freq[t[index]] || 0) - 1;
        index++;
    }
    
    return Object.values(freq).every((value: number) => value === 0);
};
