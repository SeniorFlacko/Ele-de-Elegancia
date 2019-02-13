const express = require('express');
const hbs = require('hbs');


const app = express();

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');



app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;
 
// app.get('/', (req, res) => {
//     const array = [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         }];

//     res.send(array);
// });
app.get('/', (req, res) => {

    res.render('home',{
        nombre: 'Cristian Aleman',
        // currentYear: new Date().getFullYear() we centralize this behaviour in helpers  
    });

});

app.get('/about', (req, res) => {

    res.render('about',{
        mensaje: 'Esta imagen representa una compra',
        // currentYear: new Date().getFullYear() we centralize this behaviour in helpers 
    });

});
 
app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`);
});