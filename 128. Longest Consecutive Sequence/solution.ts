function longestConsecutive(nums: number[]): number {
    const set: Set<number> = new Set(nums);
    let maximum = 0;

    for (let index = 0; index < nums.length; ++index) {
        const num = nums[index];

        // if this is not the beginning of a sequence, don't count it
        if (set.has(num - 1)) { continue; }
        
        let count = 1;

        while (set.has(num + count)) { count++; }

        if (maximum < count) {
            maximum = count;
        }
    }

    return maximum;
};
