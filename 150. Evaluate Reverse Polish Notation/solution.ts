const operatorsList = ['+','-','*','/'];

function doOp(operand1: number, operand2: number, operator: string): number {
    switch (operator) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '/': return Math.trunc(operand1 / operand2);
        case '*': return operand1 * operand2;
    }
}

function evalRPN(tokens: string[]): number {
    const stack: (string | number)[] = [];
    let token;

    while (token = tokens.shift()) {
        if (!operatorsList.includes(token)) {
            stack.push(Number(token));
        } else { 
            const operand2 = stack.pop() as number;
            const operand1 = stack.pop() as number;
            stack.push(
                doOp(
                    operand1,
                    operand2,
                    token,
                )
            );
        }
    }

    return stack.pop() as number;
};
