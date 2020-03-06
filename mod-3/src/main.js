// 1
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay()
    console.log('1s');
    await delay()
    console.log('2s');
    await delay()
    console.log('3s');
}

umPorSegundo();

// 2

import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (e) {
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// 3

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('K-Schaeffer/chess-system-java');  // Repositório da rocketseat off mesmo
Github.getRepositories('rocketseat/dslkvmskv');

// 4

const buscaUsuario = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');

    }
}
buscaUsuario('K-Schaeffer');
buscaUsuario('K-ssadSchaeffer');