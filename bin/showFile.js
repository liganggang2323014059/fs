#!/usr/bin/env node

const argv = process.argv[2] && process.argv[2].slice(1);
console.log(argv);

const path = require('path');

const fs = require('fs');

const url = path.join(process.cwd(), argv)
console.log(url);
//判断路径是否存在
if (fs.existsSync(url)) {
  //判断当前路径是否为文件夹
  if (fs.statSync(url).isDirectory()) {
    //为真时读取该路径
    let list = fs.readdirSync(url);
    console.log(list);
    //循环该路径
    list.forEach(item=>{
      //读取该路径信息
      let {size} = fs.statSync(path.join(url,item))
      //打印出 size大小 extname
      console.log(`${item}-${path.extname(item)}-${size}`);
    })
  }
} else {
  console.log("路径不存在");
}
