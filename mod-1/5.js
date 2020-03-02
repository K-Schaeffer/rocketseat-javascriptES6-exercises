// 5.1 A

const arr = [1, 2, 3, 4, 5, 6];

[x, ...y] = arr;

//console.log(x);
//console.log(y);

// 5.1 B

function soma(...valores) {
    return valores.reduce((a, b) => a + b);
}


//console.log(soma(1, 2, 3, 4, 5, 6)); // 21
//console.log(soma(1, 2)); // 3


// 5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

let usuario2 = { ...usuario, nome: 'Gabriel' };
let usuario3 = { ...usuario, endereço: { ...usuario.endereco, cidade: 'Lontras' } };