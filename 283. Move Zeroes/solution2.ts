/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let swap = 0;
    for (let index = 0; index < nums.length; ++index) {
        /*
        Input: nums = [0,1,0,3,12]
        index === 0; swap === 0; nums = [0,1,0,3,12]; swap === 1;
        index === 1; swap === 1; nums = [1,0,0,3,12]; swap === 1;
        index === 2; swap === 1; nums = [1,0,0,3,12]; swap === 1;
        index === 3; swap === 1; nums = [1,3,0,0,12]; swap === 2;
        index === 4; swap === 2; nums = [1,3,12,0,0]; swap === 3;
        */
        if (nums[index] !== 0) {
            const temp = nums[index];
            nums[index] = nums[swap];
            nums[swap] = temp;
            swap++;
        }
    }
};
