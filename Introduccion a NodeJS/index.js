const colors = require('@colors/colors');
const axios = require('axios');

console.log('hello'.green); // outputs green text



axios.get('https://rickandmortyapi.com/api/character')
.then(response =>{
    console.log(response.data);
    
})
.catch(error=>{
    console.log(error);
    
})