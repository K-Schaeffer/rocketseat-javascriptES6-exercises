const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
let idades = usuarios.map(usuario => usuario.idade);
// output: [23, 15, 30]

// 2.2
let filter = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
// output: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat'}]

// 2.3
let isGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
// output: undefined

// 2.4
const calculo = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2 })).filter(usuario => usuario.idade <= 50);
/*
Output:
{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
*/
