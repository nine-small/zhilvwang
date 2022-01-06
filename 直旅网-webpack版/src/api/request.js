const axios = require('axios')
const ins = axios.create();
// 响应拦截
ins.interceptors.response.use(resp=>{
    return resp.data.data
})


// 畅销排行榜数据获取
export async function getCards(){
    return await ins({
        url:'/api/card',
        method:'get'
    })
}

// 线路数据
export async function getLines(){
    return await ins({
        url:'/api/line',
        method:'get'
    })
}

// hot
export async function getHots(){
    return await ins({
        url:'/api/hot',
        method:'get'
    })
}
