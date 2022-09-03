function reverseWords(s: string): string {
    return s
        .split(' ')
        .map(word => Array.from(word).reverse().join(''))
        .join(' ');
};
