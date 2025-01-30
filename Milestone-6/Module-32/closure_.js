function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
const firstServer1 = kitchen();
// console.log(firstServer());
// console.log(firstServer());


