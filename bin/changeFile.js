#! /usr/bin/env node
// const oldName = process.argv[2] && process.argv[2].slice(1);
// const newName = process.argv[3] && process.argv[3].slice(1);
// const fs = require('fs');
// fs.renameSync(oldName,newName);

let fs = require('fs');

let path = require('path');

let list = fs.readdirSync('./src')

let ind = 1;

list.forEach(item=>{
  if(/.js$/.test(item)){
    fs.renameSync(path.join('./src',item),path.join('./src',`index(${ind}).js`))
    ind++;
  }
})