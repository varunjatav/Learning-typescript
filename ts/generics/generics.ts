function add<T,U>(a:T,b:U):void {
    console.log( a);
    console.log( b);
}

const result1 = add<number,string>(5," Jatav")
console.log(result1);

const result2 = add("Varun ",5)
console.log(result2);
