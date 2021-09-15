var a=10
var b=7
var c=6
var delta = b*b-4*a*c
console.log(delta)
if (delta<0){
    console.log('não é possivel obter X1 e X2!')
} else {
    var X1= (-b+Math.sqrt(delta))/(2*a)
    var X2= (-b-Math.sqrt(delta))/(2*a)
    console.log('valor de X1', X1)
    console.log('valor de X2',X2)
}

