



var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(combined)
var combined = array1.concat(array2);
console.log(combined);

var combined = [].concat(array1, array2);
console.log(combined);

var first = array1[0];
console.log('first : ', first);
var second = array1[1];
console.log('second : ', second);
var three = array1[2] || 'empty';
console.log('three : ', three);

function func(){
    var args =Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1, args.length);
}

