console.log(process.argv);


function getParam(param){
    const index = process.argv.indexOf(param);
    return  index === -1 ? null : process.argv[index+1];
}

const nombre = getParam('--nombre');
const edad = getParam('--edad');


if(nombre && edad){
    console.log('el nombres es ' + nombre + ' y la edad es: ' + edad);
    
}else{
    console.log('alguno de los dos tiene un error');
    
}
