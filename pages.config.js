const HtmlWebpackPlugin = require('html-webpack-plugin');
// 此处pages可以提取出一个文件，并且通过npm run new-page --name进行修改此文件
const pages = [
    {
        title:'index',
        entry:{
            index:'./src/pages/index/index.js',
        },
        name:'index',
        description:'这是首页',
        chunks:['react','index']
    },{
        title:'detail',
        entry:{
            detail:'./src/pages/detail/detail.js',
        },
        name:'detail',
        description:'这是详情页',
        chunks:['react','detail']
    }
]
const generatePage = ({
    title='',
    entry='',
    template="./index.html",
    name='',
    description='',
    chunks=[]
    }={}
    ) => {
        return {
            entry,
            plugins:[
                new HtmlWebpackPlugin({
                    title,
                    template,
                    description,
                    filename: name + '.html',
                    chunks,
                })
            ]
        }
}
const pageEntrys = [];
pages.map(item=>{
    pageEntrys.push(generatePage(item));
});
module.exports = {
    pageEntrys,
    pages,
}