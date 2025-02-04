const router = require('express').Router();

router.get('/', (req,res) =>{
    console.log(req.query);
    const {page, limit} = req.query;
    console.log(page,limit);
    console.log('CurrDate', req.currentDay);
    res.status(503).send('Recuperamos todos los productos');
    // res.end('Otra respuesta');
})

router.get('/new', (req,res) =>{
    // res.send('Formulario para crear productos');
    res.json({uno: 'uno', dos: 'dos'});
    //res.download('./files/imagenes/1.zip')
})

router.get('/:productId', (req,res) =>{
    console.log(req.params);
    const { productId} = req.params;
    res.send('Recupero el producto con ID: ' + productId);
})

router.post('/create', (req,res) =>{
    console.log(req.body);
    const { name, price} = req.body;
    console.log(name, price);
    
    res.send('Gestion de los datos del formulario')
})

module.exports = router;