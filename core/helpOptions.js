const program=require('commander');
let helpOptions=()=>{
    program.version(require('../package.json').version);
    program.option('-d --dest <dest>')
}

module.exports={
    helpOptions
}