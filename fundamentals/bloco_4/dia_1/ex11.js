let salarioBruto = 3000;

// calculaINSS
let aliquotaINSS = 0;
let aliquotaMaxINSS = 0;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
  aliquotaINSS = 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaINSS = 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaINSS = 0.11;
} else if (salarioBruto > 5189.82) {
  aliquotaMaxINSS = 570.88;
} else {
  console.log('Salário inválido!');
}
let salarioBase = salarioBruto - ((salarioBruto * aliquotaINSS) + aliquotaMaxINSS);

// calcula IR
let aliquotaIR = 0;
let parcelaIR = 0;

if (salarioBase <= 1903.98 && salarioBase > 0) {
  aliquotaIR = 0;
  parcelaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIR = 0.075;
  parcelaIR= 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIR = 0.15;
  parcelaIR= 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIR = 0.225;
  parcelaIR= 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = 0.275;
  parcelaIR= 869.36;
} else {
  console.log('Salário inválido!');
}
let salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR)

console.log('Salário líquido é igual a R$' + salarioLiquido + ',00');
