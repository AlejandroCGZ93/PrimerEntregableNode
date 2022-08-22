const { getOneProduct } = require('../models/product')
const producto = require('../models/product')

// Ordena los precios

const getRanking = async (req, res) => {
    let products = await producto.getProducts();
    let order = req.query.order;

    prices = products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price
    }));

    if(order === 'asc'){
        prices.sort((a,b) => a.price - b.price);
    
    }else if (order === 'desc'){
        prices.sort((a,b) => b.price - a.price);
    }else{
        res.status(200).send(products)
    }


    

    res.status(200).send(prices)
}


//Llama 1 producto
const getProductById = async(req, res) => {
    let id = req.params.id
    let producto = await getOneProduct(id)

    res.status(200).send(producto)
}


//LLama las categorias con los productos
let getCategories = async (req, res) => {

    let categories = await producto.getCategory();
  
    const products = await Promise.all(
      categories.map(async (category) => {
        return {
          category,
          products: await producto.getCategoriesId(category),
        };})) 
        res.status(200).send(products)
};

// Los productos más caros
let getMostExpensive = async (req, res) => {
    let products = await producto.getExpensivePrice();
  
    const expensive = products.map((category)=>{
    const product = category.products.reduce((a,b)=>{
        return a.price > b.price ? a:b
    })
    return{
        category: category.category,
        product
    }
  })
  res.status(200).send(expensive);
  };



let productController = {
    getRanking,
    getProductById,
    getCategories,
    getMostExpensive

}

module.exports = productController;