// sliding window approach, found in solutions section.
// visualized with the `visualizer` function below.
function lengthOfLongestSubstring(s: string): number {
    const hashmap = new Map();
    let longest: number = 0;
    let left: number = 0;
    let right = 0;

    for (; right < s.length; ++right) {
        visualizer(s, left, right);
        while (hashmap.has(s[right])) {
            hashmap.delete(s[left]);
            left++;
            visualizer(s, left, right);
        }

        hashmap.set(s[right], right);
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

function visualizer(s: string, left: number, right: number): void {
    console.log('L'.padStart(left * 2 + 1));
    console.log('R'.padStart(right * 2 + 1));
    console.log(s.split('').join(' '));
}

