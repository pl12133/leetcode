function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let index = 0; index < prices.length; ++index) {
        minPrice = Math.min(minPrice, prices[index]);
        maxProfit = Math.max(maxProfit, prices[index] - minPrice);
    }
    
    return maxProfit;
};
