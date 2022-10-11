function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const out = [];

    for (let index = 0; index < nums.length - 2; ++index) {
        const baseNum = nums[index];

        // skip duplicates
        if (index > 0 && baseNum === nums[index - 1]) { continue; }

        let left = index + 1;
        let right = nums.length - 1;

        while (left < right) {
            const threeSum = nums[left] + nums[right] + baseNum;
            if (threeSum === 0) {
                // push the found result
                out.push([ baseNum, nums[left], nums[right] ]);

                // advance past any duplicate entries
                while (nums[left] === nums[left + 1]) { left++; }
                while (nums[right] === nums[right - 1]) { right--; }

                // advance the pointers to the next unique numbers
                left++;
                right--;
            } else if (threeSum < 0) {
                left++;
            } else if (threeSum > 0) {
                right--;
            }
        }
    }
    
    return out;
};
