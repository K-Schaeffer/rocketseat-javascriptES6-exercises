class Usuario {

    constructor(email, senha, admin = false) {
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {

    constructor(email, senha, admin = true){
        super(email, senha, admin);
    }
}


const user1 = new Usuario('teste@teste.com', 'senha123');
const adm1 = new Admin('teste@123.com', 'senha123');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());
