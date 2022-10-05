function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: { [key: string]: number } = {};
    const buckets = [];
    const result = [];

    for (let index = 0; index < nums.length; ++index) {
        const num = nums[index];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for (let [ num, frequency ] of Object.entries(frequencyMap)) {
        buckets[frequency] = (buckets[frequency] || []).concat(num);
    }

    for (let index = buckets.length - 1; index >= 0; --index) {
        if (buckets[index]) {
            result.push(...buckets[index]);
        }
        if (result.length >= k) {
            return result.slice(0, k);
        }
    }

    return [];
};
