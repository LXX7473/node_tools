const fs=require('fs');
const path=require('path')
const {complieTemplate,writeToFile}=require('../utils/index')

const addCompoentAction=async (project,dest)=>{
  //1.解析ejs模板，获取模板信息
   let data=await complieTemplate('react_pageTem.ejs',{name:project});
  //2.将模板信息写入文件
   const currentDir=path.resolve(dest,`${project}.js`);
   
   writeToFile(currentDir,data)
  
}

module.exports={
    addCompoentAction
}