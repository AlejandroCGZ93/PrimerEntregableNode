const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
           
}


async function getOneProduct(id){
    return fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
}
async function getCategory() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    return await res.json();
}

async function getCategoriesId(category) {
    const res = await fetch("https://fakestoreapi.com/products/category/"+ category);
    return await res.json();
}

async function getPricesRanking(price) {
    let products = await getProducts();
    return products.filter(product => product.price > price);
    
}

async function getExpensivePrice (){

    let categories = await getCategory();

    const products = await Promise.all(
      categories.map(async (category) => {
        return {
          category,
          products: await getCategoriesId(category),
        };
      })) 
      return products

}




let productos = {
    getProducts,
    getOneProduct,
    getPricesRanking,
    getCategory,
    getCategoriesId,
    getExpensivePrice
}

module.exports = productos