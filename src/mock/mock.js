// import resAPI  from './res'
const Mock = require('mockjs');

const GoodsListData = function() {
    const List = [];
    const count = 100;

    for (let i=0;i<count; i++){
        List.push(Mock.mock({
            'coding': '@natural(1000, 9999)',
            'c_price': '@float( 20, 200 )',
            'b_price': '@float( 10, 100 )',
            'date': '@date("yyyy-MM-dd")',
            'details|1-10': ['@image(\'200x100\', \'#4A7BF7\', \'Hello\')'],
            'description': '@paragraph(1, 3)',
            'tags|1-4': ['@cword( 2, 4 )'],
            'category': '@cword(4)'
        }))
    }
    return {
        List: List
    }
};
Mock.mock('/api/goodsList', 'get', GoodsListData);
// 第一个参数代表路径，第二个参数代表请求方式 第三个参数可以是对象也可以是返回对象的函数

// const Mock = require('mockjs');
// const Random = Mock.Random;
//
// const goodsListData = function () {
//     let goodsList = [];
//     console.log(goodsList);
//     for (let i = 0; i < 10; i++) {
//         let newGoodsList = {
//             'coding': Random.natural(1000, 9999),
//             'c_price': Random.float( 20, 200 ),
//             'b_price': Random.float( 10, 100 ),
//             'date': Random.date() + ' ' + Random.time(),
//             'details': Random.image('200x100', '#4A7BF7', 'Hello'),
//             'description': Random.paragraph(1, 3),
//             'tags': Random.cword( 2, 4 ),
//             'category': Random.cword(4)
//         };
//         goodsList.push(newGoodsList)
//     }
//     return {
//         goodsList: goodsList
//     }
// };


