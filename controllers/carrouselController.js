const carrousel = require('../models/carrousel')
const usuarios = require('../models/users')

const getAllCarts = async(req, res) => {
    let cartsAll = await carrousel.getCarts();
    res.status(200).send(cartsAll);
}

const getCartsById = async(req,res) => {
    let id = req.params
    let cart = await carrousel.getCartsById(id);

    res.status(200).send(cart);
}

const getBigCarts = async (req,res) => {
    let carts = await carrousel.getCarts();
    const users = await usuarios.getUsers();

    const bigCarts = carts.filter((cart) => {
        if (cart.products.length > 2) {
            const user = users.find((user) => user.id === cart.userId)
            cart.user = user.name
            return cart
        }
    })
    res.status(200).send(bigCarts)
}

const carrouselController = {
    getAllCarts,
    getCartsById,
    getBigCarts
}

module.exports = carrouselController