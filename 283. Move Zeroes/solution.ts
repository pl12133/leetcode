// My implementation of lodash.partition
function partition<T>(
    array: T[],
    callback: (item: T, index?: number, arr?: T[]) => boolean): [ T[], T[] ] {
    return array.reduce(([ left, right ]: [ T[], T[] ], item, index, arr) => {
        if (callback(item, index, arr)) {
            left.push(item);
        } else {
            right.push(item);
        }
        return [ left, right ];
    }, [ [], [] ]);
}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const [ zeros, nonzeros ] = partition(nums, num => num === 0);

    [...nonzeros, ...zeros].forEach((num, index) => {
        nums[index] = num;
    });
};
