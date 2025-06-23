function start(num,fn){
   const res =  fn(num); // return num*2 = 2*2=10;
   return res;
}

function multi(num,fn){
return subtract(num*2);
}

function subtract(num){
    return divid(num-5)

}

function divid(num){
return num/10
}


console.log(start(5,multi));// 10 


