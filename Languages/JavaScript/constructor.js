// Classes

class User{
    constructor(name, email){
        this.name = name
        this.email = email
        this.online = false
    }
    login(){
        return this.online = true;
    }
    logout(){
        return this.online = false;
    }
}

class Admin extends User{
    deleteUser(username){
        // delete user
    }
}

// Constructor Function under the hood

function User(name, email){
    this.name = name;
    this.email = email;
    this.online = false;
    // this.login = function(){
    //     return this.online = true;
    // };
    // this.logout = function(){
    //     return this.online = false;
    // }
}

// Define function in property
User.prototype.login = function (){
    return this.online = true;
}

User.prototype.logout = function (){
    return this.online = true;
}

function Admin(...args){
    User.apply(this, args)
    // User.apply(this, [username, email])
}

let user1 = new User('user_1', 'user1@email.com')
let admin = new Admin('username', 'email')

Admin.prototype = Object.create(User.prototype)