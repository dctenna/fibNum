let fibNumbPosition = parseInt(prompt('Enter a Fibonacci number position'));

// way1
let f1 = 1;
let f2 = 1;
let fcur = 1;
for (let n = 3; n <= fibNumbPosition; n++) {
    fcur = f1 + f2;
    f1 = f2;
    f2 = fcur;
}
alert(fcur + " calculated with for loop");

//way2
let fArr = [1, 1];
for (let i = 1; i < fibNumbPosition - 1; i++) {
    fArr.push(fArr[i - 1] + fArr[i]);
}
alert(fArr.pop() + " calculated with array");

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
