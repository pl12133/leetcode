function twoSum(numbers: number[], target: number): number[] {
    const map = new Map();  
    for (let index = 0; index++ < numbers.length;) {
        map.set(target - numbers[index], index);
    }
    
    for (let index = numbers.length - 1; 0 < index--;) {
        const otherIndex = map.get(numbers[index]);
        if (otherIndex && otherIndex !== index) {
            return index < otherIndex
                ? [index + 1, otherIndex + 1]
                : [otherIndex + 1, index + 1];
        }
    }    
}
