/**
 Do not return anything, modify nums in-place instead.
 */

function circularIndex(arr: { length: number }, index: number): number {
    return (Math.abs(index + arr.length) + arr.length) % arr.length
}

function rotate(nums: number[], k: number): void {
    // 0, 1, 2, ...
    // circularIndex(0 + k), circularIndex(1 + k), circularIndex(2 + k), ...
    const copy = nums.slice();
    for (let index = 0; index < nums.length; ++index) {
        nums[circularIndex(nums, index + k)] = copy[index];
    }
};

