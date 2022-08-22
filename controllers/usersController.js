const { getUsers } = require('../models/users')
const usuarios = require('../models/users')

let getAllUsers = async (req, res) => {

    const users =  await getUsers()
    res.status(200).send(users)

}

let getUser = async (req, res) =>{
    const id  = req.params.id
    let user = await usuarios.getUsers(id)
    res.status(200).send(user)
}

let getThreeUsers = async (req, res) =>{
    let threeUsers = await usuarios.getUsers();
    let three = 3
    const users = threeUsers.slice(0,three)
    res.status(200).send(users);
}


let userController = {
    getAllUsers,
    getUser,
    getThreeUsers

}

module.exports = userController