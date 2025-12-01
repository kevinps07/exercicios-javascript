const userRecords = [
  { id: 1, nome: "Calango", active: true, score: 85, idade: 30 },  // Ativo
  { id: 2, nome: "zero", active: false, score: 92, idade: 22 },  // Ignorado
  { id: 3, nome: "Mount", active: true, score: 78, idade: 28 },   // Ativo
  { id: 4, nome: "Zig", active: true, score: 95, idade: 20 },   // Ativo
  { id: 5, nome: "nextage", active: true, score: 88, idade: 35 } // Ativo
];


function calculateAverageScore(records) {
  const recordsAccepted = validate(records);
  const activeRecordsCount = recordsAccepted.length
  let total = recordsAccepted.reduce((total, current) => {
   return total += current.score;
 },  0);
  return total/activeRecordsCount;
}

function validate(records) {
  return records.filter(item => item.active === true);
}

console.log(calculateAverageScore(userRecords));

