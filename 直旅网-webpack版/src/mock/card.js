const Mock = require('mockjs');
// thumb: "",
// tag: ['BOSSa推荐',''],
// price: "",
// mes: "",
// sort: 1,
// title: "",

Mock.mock('/api/card','get',function(){
    return Mock.mock({
        "code":0,
        'data|2':[{
            "id|+1":1,
            'data|5':[
                {
                    "thumb":'@image(63x63,@color())',
                    "price|1000-3000":2,
                    "mes|1":["跟团游","自由行","混合游"],
                    "sort|+1":1,
                    "title":"@ctitle()",
                    "tag|2-5":["@ctitle()"]
                }
            ]
        }]
    })
})

