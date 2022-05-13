/* const a = 4
const b = 6
const c = 10

let adiçao = a + b
let subtraçao = a - b
let multiplicaçao = a * b
let divisao = a / b
let modulo = a % b


if (a > b) {
    console.log (a)
}
    else {
        console.log(b)
    }

    if (a > b && a > c) {
        console.log(a)
    }
        else if (b > a && b > c) {
            console.log(b)

        }
        else {
            console.log (c)

        }

    const valor = 5

    if(valor > 0){
        console.log(true)
    }
    else if (valor < 0){
        console.log(false)

    }
    else {
        console.log(0)
    }

    const tri = 50
    const ang = 50
    const ulo = 80

    if (tri + ang + ulo === 180) {
        console.log(true)
    }
        else if (tri + ang + ulo < 180){
        console.log(false)
        
    }
        else {

            console.log("valores estao incorretos")

        }


        const rainha = "RAINHA"

        if (rainha.toLowerCase() === "rainha") {
             console.log("pode mover-se pelas colunas, fileiras e diagonal de outra cor")

        }
        else {
            console.log("falta de estoque, temos apenas a rainha =(")

        }
 */

   /*      let nota = -5;


        if (nota >= 90 && nota <= 100) {
            console.log("A")
        }
        else if (nota >= 80) {
            console.log("B")          
        }
        else if(nota < 50 && nota >= 0) { 
            console.log("F")

        }
        else {
            console.log("valor ultrapassado da referencia")

        } */

      /*   const numero1 = 22
        const numero2 = 15
        const numero3 = 13

        if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0 ) {
            console.log(true)
        }
            else {
                console.log(false)
            }
       */


    /*  const produto = 300
     const valordavenda = 400
     let imposto = 60
     let total = produto + imposto
     let totalimposto =  valordavenda - total
     let lucro = totalimposto * 1000

     if(produto <= 0 || valordavenda < 0 ) {
                console.log(lucro)
     } else {
        console.log("nao vai da lucro")
     }
 */

     let salariobruto = 3000
     let inss = 0.11
     let ir = 0.15
     let liquido;
     let resultado = salariobruto * inss
     let porcentagem = salariobruto * 0.11
     let outroresultado = salariobruto - porcentagem
     

     console.log(outroresultado)

     if((salariobruto - inss - ir) <= liquido) {
        console.log("esta recebendo errado, estão roubando");
     } else {
        console.log("R$= " + liquido + " a ser recebido");
     }
    
    