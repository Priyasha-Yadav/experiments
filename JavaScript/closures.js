function outer(){
    var b = 10;
    function inner(){
        var a = 20;
        console.log(a+b);

    }
    return inner;
}

var getsum = outer();
var num = getsum;
console.log(num());
// num();

