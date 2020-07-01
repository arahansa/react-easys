

let add = (a,b) => a+b;
let addX = x => a=> add(x,a);
let multiply = (a,b) => a*b;
let multiplyX = x => a => multiply(a,x);

let addFour = addX(4);
let multiplyTwo = multiplyX(2);
let multiplyThree = multiplyX(3);


let ab = [multiplyTwo, multiplyThree, addFour].reduce(function(prevFunc, nextFunc){
    console.log('리듀스 안은 들어오나..?');
     return function(value){
         console.log('prevFunc..?', prevFunc)
         console.log('nextFunc..?', nextFunc)
         return nextFunc(prevFunc(value));
     }},
     function(k){
         console.log('시작 원문 k', k);
         return k;
     }
);

function compose(funcArr){
    return funcArr.reduce(function(prevFunc, nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        }
    }, function(k){return k;});
}

let fc = compose([multiplyTwo, multiplyThree, addFour]);