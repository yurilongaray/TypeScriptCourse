let pessoa = {
    'nome': 'Yuri',
    'idade': 15
}

let nome, idade;

({nome, idade} = pessoa);

console.log(nome, idade);