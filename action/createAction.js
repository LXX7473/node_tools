const {promisify}=require('util')
const download=promisify(require('download-git-repo')) ;
const {reactUrl}=require('../config/urlConfig')
const {complieComand}=require('../utils/index')
const createAction=async (project)=>{
    //判断当前操作系统
    //window系统下执行的实际是npm.cmd
    const commamd=process.platform==='win32'?'npm.cmd':'npm'

    const currentDir=`./${project}`
    try{
        // 1.下载模板
        await download(reactUrl,currentDir,{clone:true});
        //2.安装依赖
        await complieComand(commamd,['install'],{cwd:`./${project}`})
        //3.执行项目
        await complieComand(commamd,['start'],{cwd:`./${project}`})
    }
   catch(e){
    console.log('error',e)
   }
    

}

module.exports={
    createAction
}