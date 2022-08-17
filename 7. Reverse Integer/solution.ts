function reverse(x: number): number {
    const reversed = Number(String(Math.abs(x)).split('').reverse().join('')) * Math.sign(x);

    if ((-2)**31 <= reversed && reversed <= 2**31 - 1) {
        return reversed;
    }

    return 0;
};
