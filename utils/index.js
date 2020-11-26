const { spawn } = require('child_process');
const path = require('path')
const { promisify } = require('util')
const { renderFile } = require('ejs');
const fs = require('fs')
const renderFilePromise = promisify(renderFile)
// 子进程执行命令
const complieComand = (...arg) => {
    return new Promise((resolve) => {
        let childProcess = spawn(...arg);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close', () => {
            resolve()
        })
    })

}
//解析ejs模板
const complieTemplate = (templateName, data) => {
    let lastDirname = `../template/${templateName}`
    let currentDir = path.resolve(__dirname, lastDirname)
    return renderFilePromise(currentDir, { data }, {},)
}
//写入文件
const writeToFile = (path, data) => {
    return fs.promises.writeFile(path, data)
}
module.exports = {
    complieComand,
    complieTemplate,
    writeToFile
}