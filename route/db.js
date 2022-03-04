const express = require("express")
const Routes = express.Router();
const fs = require('fs');
const { filter } = require("rxjs");


const dataPathUser = './model/user.json' // path to our JSON file
const dataPathProduct = './model/product.json' // path to our JSON file





// util functions User
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPathUser, stringifyData)
}
const getUserData = () => {
    const jsonData = fs.readFileSync(dataPathUser)
    return JSON.parse(jsonData)   
}

// reading the data User
Routes.get('/user', (req, res) => {
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.parse(data));
  });

});

Routes.post('/user/adduser', (req, res) => {
 
  
  var existUsers = getUserData()
  const newUsertId = req.body.email
  existUsers[newUsertId] = req.body
  saveUserData(existUsers);
  res.send({success: true, msg: 'account data added successfully'})
   
})


// Read - get all accounts from the json file
Routes.get('/user/list', (req, res) => {
  const users = getUserData()
  res.send(users)
})


// Update - using Put method
Routes.put('/user/:id', (req, res) => {
  var existUsers = getUserData()
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
   const userId = req.params['id'];
   existUsers[userId] = req.body;

   saveUserData(existUsers);
   res.send(`accounts with id ${userId} has been updated`)
 }, true);
});

//delete - using delete method
Routes.delete('/user/delete/:id', (req, res) => {
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
   var existUsers = getUserData()

   const userId = req.params['id'];

   delete existUsers[userId];  
   saveUserData(existUsers);
   res.send(`accounts with id ${userId} has been deleted`)
 }, true);
})


Routes.get('/user/:id',(req,res)=>{
  const user = getUserData();
  res.send(user[req.params["id"]]);
  
})


Routes.post('/login',(req,res)=>{
    const user = getUserData();
    if(user[req.body.email]){
      const users = user[req.body.email];
      if(users.email==req.body.email &&users.pwd==req.body.pwd){
        res.send(users);
      }
    }
   
   
    
})


// util functions Product
const saveProductData = (data) => {
  const stringifyData = JSON.stringify(data)
  
  fs.writeFileSync(dataPathProduct, stringifyData)
}
const getProductData = () => {
  const jsonData = fs.readFileSync(dataPathProduct)
  return JSON.parse(jsonData)   
}

// reading the data Product
Routes.get('/product', (req, res) => {
  fs.readFile(dataPathProduct, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

function readProducts() {
  const dbRaw = fs.readFileSync(dataPathProduct);  
  const products = JSON.parse(dbRaw)
  return products;
}

Routes.get('/product/:id',(req,res)=>{
    const product = readProducts();

  const Products = product.filter(x=>x.id==req.params['id']);


res.send(Products)
})

Routes.post('/product/addproduct', (req, res) => {
 
  var existProduct = getProductData()

  existProduct.push(req.body)
   
  saveProductData(existProduct);
  res.send({success: true, msg: 'account data added successfully'})
})


// Read - get all Product from the json file
Routes.get('/product/list', (req, res) => {
  const Products = getProductData()
  res.send(Products)
})


// Update - using Put method
Routes.post('/product/editroduct', (req, res) => {
  var existProduct = getProductData().filter(x=>x.id!=req.body.id);
  existProduct.push(req.body);
  saveProductData(existProduct);
  res.send({success: true, msg: 'account data added successfully'})

  
});

//delete - using delete method
Routes.get('/product/delete/:id', (req, res) => {
   var existProduct = getProductData().filter(x=>x.id!=req.params['id'])
   saveProductData(existProduct);
  res.send(`accounts with id  has been deleted`);
})


module.exports =Routes;