const stringInput = "Significados insiginficantes que resultam tudo com base em nada";

function wordreverse(stringInput){
    let wordreversed = stringInput.split('');
    return wordreversed.reverse().join('');
}

function StringlogicalWordReverse(stringInput){

  // pega a string e transforma em um array de caracteres
  let chars = stringInput.split('');

  // variável auxiliar para armazenar o output da função;
  let reversed_chars = "";

  // Pega a ultima posição do arrray de caracteres
  let last_chars = chars.length - 1;

  
  for (let index = 0;  index < chars.length; index++) {  
    (last_chars >= 0) ? reversed_chars += chars[ last_chars ]: undefined;
    last_chars--;
  }

  return reversed_chars;
}

function ArrayLogicalWordReverse(stringInput){
   // pega a string e transforma em um array de caracteres
  let chars = stringInput.split('');

  // variável auxiliar para armazenar o output da função;
  let reversed_chars = []; // primeiro >>> for
  let result = []; // segundo >>> for
  
  // Pega a ultima posição do arrray de caracteres
  let last_chars = chars.length - 1;
  
  for (let index = 0;  index < chars.length; index++) {  
    (last_chars >= 0) ? reversed_chars[ index ] = chars[ last_chars ]: undefined;
    last_chars--;
  }

  reversed_chars.forEach(element => {
     result += element;
  });

  return result;
}


console.log("\n T1 - resultado:\n\n " + wordreverse(stringInput));
console.log("\n T2 - resultado:\n\n " + StringlogicalWordReverse(stringInput));
console.log("\n T3 - resultado:\n\n " + ArrayLogicalWordReverse(stringInput));
