const { log } = require('console');
const fs = require('fs');

const stream = fs.createReadStream('blog.md', 'utf-8');
let body = '';

stream.once('data', ()=>{
    console.log('empieza la lectura');
    
})

stream.on('data', chunk =>{
    console.log('Recibo datos...');
    body += chunk;
});

stream.on('end', ()=>{
    console.log(`Body: ${body.length}`);
    
})