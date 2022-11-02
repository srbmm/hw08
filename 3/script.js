function counterMaker(){
    let counter = 0;
    return function(num){
        if(num) counter += num
        return counter
    }
}
const counter = counterMaker()
const counter2 = counterMaker()
console.log(counter(10))
console.log(counter(5))
console.log(counter2(14))