function scope() {
    var a = b = 5;
}
scope();
console.log(a);
//returns undefined