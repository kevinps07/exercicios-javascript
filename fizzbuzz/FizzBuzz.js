let index = 1;

function divideBy3(index){
  return index % 3 === 0;
}

function divideBy5(index){
    return index % 5 === 0;
}

function divideBy3and5(index){
   return divideBy3(index) && divideBy5(index);
}

function check(number){

    if (divideBy3and5(number)) {
        console.log("Number: [ "+ number + " ] FizzBuzz");
    }
    else if(divideBy3(number)) {
        console.log("Number: [ "+ number + " ] Fizz");
    } 
    else if(divideBy5(number)){
        console.log("Number: [ "+ number + " ] Buzz");
    }
    else{
        console.log("Number: [ " + number + " ] " + number);
    }
}

for (index; index <= 100; index++) {
    check(index);
}