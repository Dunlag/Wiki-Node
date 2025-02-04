const router = require('express').Router();

router.get('/', (req,res) =>{
    res.send('Recuperamos todos los productos');
})

router.get('/new', (req,res) =>{
    res.send('Formulario para crear productos');
})

router.get('/:productId', (req,res) =>{
    console.log(req.params);
    const { productId} = req.params;
    res.send('Recupero el producto con ID: ' + productId);
})

router.post('/create', (req,res) =>{
    res.send('Gestion de los datos del formulario')
})

module.exports = router;