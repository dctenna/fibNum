let fibNumbPosition = parseInt(prompt('Enter a Fibonacci number position'));

// way1
function fib_for_loop(n) {
    let f1 = 1;
    let f2 = 1;
    let fcurrent = 1;
    for (let n = 3; n <= fibNumbPosition; n++) {
        fcurrent = f1 + f2;
        f1 = f2;
        f2 = fcurrent;
    }
    return fcurrent + " calculated with for loop";
}
alert(fib_for_loop(fibNumbPosition));

//way2
function fib_array(i) {
    let fArr = [1, 1];
    for (let i = 1; i < fibNumbPosition - 1; i++) {
        fArr.push(fArr[i - 1] + fArr[i]);
    }
    return fArr.pop() + " calculated with array";
}
alert(fib_array(fibNumbPosition));

//way3
function fibRec(p) {
    if (p < 3) {
        return 1;
    }
    return fibRec(p - 1) + fibRec(p - 2);
}
alert(fibRec(fibNumbPosition) + " calculated with recursion");

//way4
function fibBinet(n) {
    let fib = Math.round(((1 + Math.sqrt(5)) ** n - (1 - Math.sqrt(5)) ** n) / (2 ** n * Math.sqrt(5)));
    return fib;
}
alert(fibBinet(fibNumbPosition) + " calculated with Binet formula");
