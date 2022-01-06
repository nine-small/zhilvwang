const Mock = require('mockjs')

Mock.mock('/api/line','get',()=>{
    return Mock.mock({
        code:0,
        'data|2':[{
            "id|1":1,
            "data|8":[{
                "imgSrc":'@image(213x120,@color())',
                "price|1000-3000":2,
                "mes":"@ctitle(10,30)",
                "satisfaction|70-99":1,
                "classify|1":[{
                    "class":"c1",
                    "mes":"牛人专线"
                },{
                    "class":"c2",
                    "mes":"牛人严选"
                }
            ]
            }]
        }]
    })
})