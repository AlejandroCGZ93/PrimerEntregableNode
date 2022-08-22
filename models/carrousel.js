const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


async function getCarts(){
    const res = await fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

async function getCartsById(id){
    const res = await fetch('https://fakestoreapi.com/carts'+id)
    .then(res=>res.json())
    .then(json=>console.log(json))

}


let carrousel = {
    getCarts,
    getCartsById
    
}

module.exports = carrousel