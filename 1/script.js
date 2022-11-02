function setterGen(...args){
    return function(...values){
        for(let index = 0; index < args.length; index++) {
            this[args[index]] = values[index];
        }

    }
}
const nameSetter = setterGen('name','family');
console.log(new nameSetter('ali'))