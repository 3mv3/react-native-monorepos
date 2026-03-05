let fs = require('fs'); 

console.log(process.env.INIT_CWD)



if (!fs.existsSync('node_modules')) {
    fs.mkdirSync('node_modules')
    fs.cpSync('../../node_modules/.bin', './node_modules/.bin', {recursive: true});
}