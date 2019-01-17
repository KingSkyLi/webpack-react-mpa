const HtmlWebpackPlugin = require('html-webpack-plugin');
// 此处pages可以提取出一个文件，并且通过npm run new-page --name进行修改此文件
const pages = [
    {
        title:'index',
        entry:{
            index:'./src/pages/index/index.js',
        },
        name:'index',
        descraption:'这是首页',
        chunks:['react','index']
    },{
        title:'detail',
        entry:{
            detail:'./src/pages/detail/detail.js',
        },
        name:'detail',
        descraption:'这是详情页',
        chunks:['react','detail']
    }
]
const generatePage = ({
    title='',
    entry='',
    template="./index.html",
    name='',
    descraption='',
    chunks=[]
    }={}
    ) => {
        return {
            entry,
            plugins:[
                new HtmlWebpackPlugin({
                    title,
                    template,
                    descraption,
                    filename: name + '.html',
                    chunks,
                })
            ]
        }
}
const Pages = [];
pages.map(item=>{
    Pages.push(generatePage(item));
});
console.log(Pages);
module.exports = Pages;