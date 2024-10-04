  
class User {
    constructor(id, name, email, telefono, direccion, usuario, pass) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.usuario = usuario;
        this.pass = pass;
    }
}

module.exports = User;
