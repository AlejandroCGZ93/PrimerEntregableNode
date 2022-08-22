const express = require('express')
const router = express.Router();
const productController = require('./controllers/productController');
const usersController = require('./controllers/usersController')
const carrouselController = require('./controllers/carrouselController')
const dates = require('./middlewares/dates')
const errorHandler = require('./middlewares/errorHandler')

function Welcome(req,res) {
    res.send('Bienvenido/a hoy es ' + req.today + ' del ' + req.month)
    
}

//Productos, precios, categoria

router.get('/', [dates.myDate, dates.today, dates.month], Welcome)
router.get('/products/prices', productController.getRanking)
router.get('/products/categories', [dates.myDate, dates.today, dates.month], productController.getCategories )
router.get('/products/categories/expensive',[dates.myDate, dates.today, dates.month], productController.getMostExpensive)
router.get('/products/:id', [dates.myDate, dates.today, dates.month],productController.getProductById)

//Users

router.get('/', [dates.myDate, dates.today, dates.month], usersController.getAllUsers)
router.get('/:id',[dates.myDate, dates.today, dates.month], usersController.getUser)
router.get('/users/first', [dates.myDate, dates.today, dates.month], usersController.getThreeUsers)


//Carrousel
router.get("/carts",[dates.myDate, dates.today, dates.month], carrouselController.getAllCarts)
router.get('/:id',[dates.myDate, dates.today, dates.month], carrouselController.getCartsById)
router.get("/carts/bigcarts",[dates.myDate, dates.today, dates.month], carrouselController.getBigCarts)


//Error

router.use(errorHandler.notFound)

module.exports = router