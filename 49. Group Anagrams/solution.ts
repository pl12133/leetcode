function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    return strs.reduce((buckets: string[][], str: string): string[][] => {
        const key = str.split('').sort().join('');
        let index = map.get(key);
//        console.log({ str, key, index });
        if (typeof index === 'undefined') {
            index = buckets.length;
            map.set(key, index);
            buckets.push([ str ]);
        } else {
            buckets[index].push(str);
        }
        
        return buckets;
    }, []);
};
