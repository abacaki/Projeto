// let = valor pode ser alterado
// utilizado para atualizações
// Ideal para contadores loop

// const = valor e fixo - não pode ser alterado
// mais seguro e previsível
// preferido pelas empresas

// var = escopo confuso
// pode ser redeclarado
// gera bugs silenciosos

// Nunca utilizaremos var

// Cameicase

const a = "Robson"; // Nomes Ruim
const nomeAluno = "Robson"; //Nomes descritivos

let x = 15; // Nomes Ruim
let quantidadeAlunos = 15; //Nomes descritivos

// String
// "João"

// Number
// 20 1.80

// Boolenean
// true false

// undefined -> variável sem valor
// let x;

// null
// const telefone = null;

let nome = "yuri";
console.log(nome);

console;("Olá" + nome);

let cidade = "Osasco";
let estado = "SP";
console.log(cidade, "-", estado);
console.log(`${cidade} - ${estado}`);

let numero = 10;
console.log("Número:", numero);
console.log(`Número: ${numero}`);

const idade = 16; // Number
const matruclaAtiva = true; // Boolean
const tel = null; // Null