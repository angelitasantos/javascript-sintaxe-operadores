/* utilizando operador <<< ! >>>
function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if (!saoIguais) {
        return "Não são Iguais";
    }

    return "São iguais.";
}
*/

/* utilizando if ternario
function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

   return saoIguais ? "São iguais" : "Não são iguais";
}
*/

function comparaNumeros(num1, num2) {
    // a validação comentada não aceita zero como número valido
    // if (!num1 || !num2) return "Defina dois números.";
    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) return "Defina dois números.";

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}


// primeira frase: ex.: Os números 1 e 2 não são iguais.
function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não ';
    }

    return `Os números ${num1} e ${num2} ${saoIguais}são iguais.`;
}

// segunda frase: ex.: Sua soma é 3, que é menor que 10 e menor que 20.
function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(0, 0));
