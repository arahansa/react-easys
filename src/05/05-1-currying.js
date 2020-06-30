

function multiply(a,b){
    return a*b;
}

function multiplyTwo(a){
    return multiply(a,2);
}

function multiplyX(x){
    return function(a){
        return multiply(a,x);
    }
}

const multiplyXArrow = x => a => multiply(a,x);

