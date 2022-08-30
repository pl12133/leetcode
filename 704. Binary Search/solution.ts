function middleIndex(arr: any[]): number {
    const { length }: { length: number } = arr;

    return Math.floor( length / 2 );
}

function search(nums: number[], target: number): number {
    if (nums.length === 0) { return -1; }

    let offset: number = 0;
    let subset = nums.slice();

    while (subset.length > 0) {
        const middlePointer = middleIndex(subset);
        const middleNum = subset[middlePointer];

        if (middleNum === target) {
            return offset + middlePointer;
        }

        const keepLeftSlice = middleNum > target;
        const previousSubsetLength = subset.length;
        subset = subset.slice(
            ...(keepLeftSlice
                ? [0, middlePointer]
                : [middlePointer + 1, undefined ]
            )
        );

        if (!keepLeftSlice) {
            offset += previousSubsetLength - subset.length;
        }
    }

    return -1;
};

