const inputString = "Significados > insiginficantes # que $ resultam {}'()%&*! tudo com base em nada @ R10";
let charsList = [];
let countCharsMap = new Map();

function run(input){ // lógica para resolver o problema
  let chars = mkListOfChar(input);
  chars.forEach(element => {
     check(element); 
  });
}

function showMap(){ // printa o map
  countCharsMap.forEach((values, key) => {
    console.log(`${key}: ${values}`);
  });
}

function prepare(input){
  return input.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function mkListOfChar(input){ // transforma em arrays
  return prepare(input).split('');
}

function insert(key, values){ //mapeia os caracteres junto com sua quantidade
  countCharsMap.set(key, values);
}

function check(input){ // o input recebe um char e esta função verifica se ela já esta presente no map
   if(countCharsMap.has(input)){
     let counter = countCharsMap.get(input);
     countCharsMap.set(input, counter+=1);

  } else {
    countCharsMap.set(input, 1)
  }
}

run(inputString);
showMap();
