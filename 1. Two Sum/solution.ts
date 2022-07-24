function twoSum(nums: number[], target: number): number[] {
    for (let index = 0; index < nums.length; ++index) {
        for (let jindex = index + 1; jindex < nums.length; ++jindex) {
            if (nums[index] + nums[jindex] === target) {
                return [index, jindex];
            }            
        }
    }
    return [];
};
