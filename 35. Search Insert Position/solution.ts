
function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        const middleNum = nums[middle];
        
        if (middleNum > target) {
            // Keep the left half
            end = middle - 1;
        } else if (middleNum < target) {
           // Keep the right half
           start = middle + 1;
        } else {
            // The values are equal, we found the index
            return middle;
        }
    }
  
    // If nothing is found by now, the left bound is where 
    // insertion should happen
    return start;
};
