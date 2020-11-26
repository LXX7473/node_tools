const program=require('commander');
const {createAction}=require('../action/createAction')
const {addCompoentAction}=require('../action/addComponentAction')
const createComands=()=>{
    //创建项目、安装依赖、运行项目
    program.command('create <project> [others...]')
           .description('get project from my github 例如：lx create demo')
           .action(createAction)
    //添加组件
    program.command('addCpn <cname>')
           .description('add a reactcomponent 例如：lx addCpn home -d src/components')
           .action((cname)=>{
            addCompoentAction(cname,program.dest||'src/components')
           })
   

}

module.exports={
    createComands
}



