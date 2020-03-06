module.exports = {

    entry: './src/main.js', //Qual é o arquivo principal?
    output: { //Para onde vai o código transpilado?
        path: __dirname + '/public', // Variável global que se refere ao próprio diretório onde ele está
        filename: 'bundle.js', // O arquivo
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [ // Como o webpack deve se comportar quando o usuário estiver tentando exportar novos arquivos .JS
            {
                test: /\.js$/, // Expressão regular para buscar se o arquivo é da extensão .js ($ se refere ao final do arquivo, as duas / 
                // são a expressão regular em si e o \. se refere a "qualquer caracter" )
                exclude: /node_modules/, // Não incluindo o node_modules na clausula dos arquivos .js
                use: { // Faça isso usando o loader...
                    loader: 'babel-loader',
                },
            },
        ],
    },
};

// Loader: Forma de manipular o conteúdo do arquivo fazendo alguma alteração, exemplo: Babel