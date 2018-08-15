const soma = (x1, x2) => {
    return x1 + x2;
}

console.log(soma(1, 2));

//Ou abaixo (não precisa de return):

const soma2 = (y1, y2) => y1 + y2;

console.log(soma2(4, 5));

//E, também

const soma3 = num1 => num1 + 3;

console.log(soma3(4));