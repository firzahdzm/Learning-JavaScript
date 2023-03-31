function minimal(a,b){
    if(a>b){
        return b;
    } else {
        return a;
    }
}
function power(c,d){
    let result = 0;
    result = c**d;
    return (result);
}

console.log(minimal(4,7));
console.log(power(5,6));