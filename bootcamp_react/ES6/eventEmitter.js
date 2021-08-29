//importa a classe EventEmitter
const EventEmitter = require('events')

//instancia o emmiter
const emitter =  new EventEmitter()


//consome o evento 'User Logged', para consumir uma única vez, usar once
emitter.on('User Logged', data => {
    console.log(data)
})

// emite o evento
emitter.emit('User Logged', {user: 'Edivaldo'})



//usando classes

class User extends EventEmitter {
    userLogged(data) {
        this.emit('User Logged 2',data)
    }
}

const user = new User()

user.on('User Logged 2', data => {
    console.log(data)
})


user.userLogged({user: 'Edivaldo classe'})





