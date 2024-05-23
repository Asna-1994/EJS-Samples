
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

let ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.render('home',{title : "Home Page"});
})


app.get('/table', (req, res) => {

    const tableItems = [
        {slNo:1, name : 'item 1', price : 240},
        { slNo:2,name : 'item 2', price : 540},
        { slNo:3,name : 'item 3 ', price : 1240},

    ]

    res.render('table',{title : "Tables" , tableItems});
  })

  app.get('/cards', (req, res) => {
   const cards = [
    { title : 'Card 1', description :'This is card 1' },
    { title : 'Card 2', description :'This is card 2' },
    { title : 'Card 3', description :'This is card 3' },

   ]

   res.render('cards',  {title : "Cards" , cards});
  }) 

  
  app.get('/items', (req, res) => {
    const items = [ 'listItem1', 'listItem1','listItem1','listItem1','listItem1']
 
    res.render('items',  {title : "Items" , items});
   }) 




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})