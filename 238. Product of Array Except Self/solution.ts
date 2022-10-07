function productExceptSelf(nums: number[]): number[] {
    const results = [];
    let prefix = 1;
    let suffix = 1;

    for (let index = 0; index < nums.length; ++index) {
        results[index] = prefix;
        prefix *= nums[index];
    }

    for (let index = nums.length - 1; index >= 0; --index) {
        results[index] = results[index] * suffix;
        suffix *= nums[index];
    }

    return results;
};
