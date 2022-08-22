const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const express = require("express")


async function getUsers(){
   
    const res = await fetch("https://fakestoreapi.com/users");
    return await res.json();
 
}




let usuarios = {
    getUsers
}

module.exports = usuarios