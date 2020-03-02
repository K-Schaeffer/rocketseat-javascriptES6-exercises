// Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const resultado = { nome, endereco: { cidade }, endereco: { estado } } = empresa; // Aqui

// Desestruturação em parâmetros

function mostraInfo({ nome, idade }) { // Aqui
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });
