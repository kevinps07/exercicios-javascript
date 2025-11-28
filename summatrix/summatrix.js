const matrix = [[1,2,3], [2,4], [5,6], [3,6,9,12]];
const accepted = (number) => (number % 2 === 0 && number > 0)? number: false;

function sumMatrix(matrix) {
  let partial = [];
  let sum = () => partial.reduce((total, atual) => total += atual);
  
    for (let index = 0; index < matrix.length; index++) {
        matrix[index].forEach(element => {
          if(accepted(element)){
            partial.push(element);
          }
    });   
  } 
  return sum();
}

console.log(sumMatrix(matrix));
