function isValid(s: string): boolean {
    const stack: string[] = s.split('');

    let char;
    let lastSeen = [];
    while (char = stack.pop()) {
        switch (char) {
            case ')':
                lastSeen.push(')');
                break;
            case '}':
                lastSeen.push('}');
                break;
            case ']':
                lastSeen.push(']');
                break;
            case '(':
                if (lastSeen.pop() !== ')') {
                    return false;
                }
                break;
            case '{':
                if (lastSeen.pop() !== '}') {
                    return false;
                }
                break;
            case '[':
                if (lastSeen.pop() !== ']') {
                    return false;
                }
                break;
        }
    }
    return !lastSeen.length;
};
