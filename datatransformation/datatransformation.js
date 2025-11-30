const userRecords = [
  { id: 1, nome: "Calango", active: true, score: 85, idade: 30 },
  { id: 2, nome: "zero", active: false, score: 92, idade: 22 },
  { id: 3, nome: "Mount", active: true, score: 78, idade: 28 },
  { id: 4, nome: "Zig", active: true, score: 95, idade: 20 },
  { id: 5, nome: "nextage", active: true, score: 88, idade: 35 }
];


function transformRecords(records){
  
   let data = records.map( record => {
      return { 
        name: record.nome.toUpperCase(),
        statusAge: `${record.idade} anos`,
        isElite: (record.score >= 88)? true : false
      }    
    })
  
    return data;

}

let data = transformRecords(userRecords);

data.forEach(element => {
  console.log(element);
});