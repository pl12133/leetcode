function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    let lastSum = -1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [ left + 1, right + 1 ];
        }

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }

    }
    return [];
};
