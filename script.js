const myProblem = () => {
    return "Not Similar";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};

const myProblem2 = () => {
    return "Similar";
};
const myCalc2 = () => {
    document.getElementById("demo1").innerHTML = myProblem2();
};