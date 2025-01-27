const fs = require('fs');
const fsPromise = require('fs/promises')

//Sincrona
const files = fs.readdirSync('./Wiki-Node');
console.log(`SYNC`, files);


//asincrona con callback
fs.readdir('../Wiki-node', (err, files) => {
    console.log(err);

    console.log(`ASYNC`, files);
});

//asincrona con promesas

fsPromise.readdir('../wiki-node')
    .then(files => console.log('PROMISE', files))
    .catch(err => console.log(err));

//asyn-await 
(async () => {
    const filesP = await fsPromise.readdir('../wiki-node');
    console.log(filesP);

})();