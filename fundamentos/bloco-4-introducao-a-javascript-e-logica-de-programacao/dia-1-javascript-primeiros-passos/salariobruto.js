let salariobruto = 10000;

let inss8 = 0.08;
let inss9 = 0.09;
let inss11 = 0.11;
let inss5mil = 570.88;

let ir1 = 0;
let ir2 = 0.075;
let ir3 = 0.15;
let ir4 = 0.225
let ir5 = 0.275

let totalinss8 = salariobruto * inss8;
let totalinss9 = salariobruto * inss9;
let totalinss11 = salariobruto * inss11;
let totalinss5mil = inss5mil;

let inss = 0;
let ir = 0;
let liquido = 0;


if (salariobruto <= 1556.94) {
    inss += totalinss8;
} else if(salariobruto >= 1556.95  && salariobruto <= 2594.92) {
    inss += totalinss9
} else if(salariobruto >= 2594.93 && salariobruto <= 5189.82){
    inss += totalinss11
} else if (salariobruto >= 5189.82) {
    inss += totalinss5mil
}

salariobruto = salariobruto - inss

let totalir1 = 0;
let totalir2 = salariobruto * ir2;
let totalir3 = salariobruto * ir3;
let totalir4 = salariobruto * ir4;
let totalir5 = salariobruto * ir5;


if (salariobruto <= 1903.98) {
    console.log (liquido = salariobruto)
} else if(salariobruto >= 1903.99  && salariobruto <= 2826.65) {
    console.log(liquido = salariobruto - (totalir2 - 142.80))
} else if(salariobruto >= 2826.66 && salariobruto <= 3751.05) {
    console.log(liquido = salariobruto - (totalir3 - 354.80))
} else if (salariobruto >= 3751.06 && salariobruto <= 4664.68) {
    console.log(liquido = salariobruto - (totalir4 - 636.13))
} else if (salariobruto > 4664.68) {
    console.log(liquido = salariobruto - (totalir5 - 869.36))
}