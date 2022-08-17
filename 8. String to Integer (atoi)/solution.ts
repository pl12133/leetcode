function myAtoi(s: string): number {
    // 1. Read in and ignore any leading whitespace.
    s = s.trim();

    /**
     * 2. Check if the next character (if not already at the end of
     * the string) is '-' or '+'. Read this character in if it is
     * either. This determines if the final result is negative or
     * positive respectively. Assume the result is positive if neither
     * is present.
     */
    const tokens = s.match(/^([+-])?(\d+)/);
    if (!tokens) {
        // See Step 4: If no digits are found, return 0.
        return 0;
    }

    // Assume the result is positive if neither is present.
    const signString: string = tokens[1] || '+';
    const sign = Math.sign(Number(`${signString}1`));


    /**
     * 3.Read in next the characters until the next non-digit
     * character or the end of the input is reached. The rest of the
     * string is ignored.
     */
    const digitsString = tokens[2];

    /**
     * 4. Convert these digits into an integer (i.e. "123" -> 123,
     * "0032" -> 32). If no digits were read, then the integer is 0.
     * Change the sign as necessary (from step 2).
     */
    let result = parseInt(digitsString, 10) * sign;

    /**
     * 5. If the integer is out of the 32-bit signed integer range
     * [-2**31, 2**31 - 1], then clamp the integer so that it
     * remains in the range. Specifically, integers less than
     * -2**31 should be clamped to * -2**31, and integers greater
     * than 2**31 - 1 should be clamped to 2**31 - 1.
     */
    result = Math.max(Math.min(result, 2**31 - 1), (-2)**31);

    // 6. Return the integer as the final result.
    return result;
};
