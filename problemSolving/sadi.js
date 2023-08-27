/* 
    condition:
    1) sorkari should have salary minimum 20000
    2) besorkari should have salary minimum 40000
*/
const polapain = [
  { name: "Abul", job: "sorkari", salary: 17000 },
  { name: "Babul", job: "besorkari", salary: 25000 },
  { name: "Kabul", job: "sorkari", salary: 21000 },
  { name: "Habul", job: "besorkari", salary: 47000 },
  { name: "Jabul", job: "sorkari", salary: 23000 },
  { name: "Mabul", job: "besorkari", salary: 55000 },
];
const vaggoban = polapain.filter(
  (pola) =>
    (pola.job === "sorkari" && pola.salary >= 20000) ||
    (pola.job === "besorkari" && pola.salary >= 40000)
);
const polaNumber = Math.ceil(Math.random() * vaggoban.length);
const jamai = vaggoban[polaNumber].name;
console.log(`${jamai}, tumi jitso`);
