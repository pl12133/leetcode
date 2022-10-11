function area(heights: number[], i1: number, i2: number): number {
    return Math.min(heights[i1], heights[i2]) * (i2 - i1);
}

function maxArea(heights: number[]): number {
    let maximum = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        const nextArea = area(heights, left, right);
        if (nextArea > maximum) {
            maximum = nextArea;
        }

        if (heights[left] <= heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maximum;
};
