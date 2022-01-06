// 游玩线路
/* 
{
    imgSrc:'',
    price:341,
    satisfaction:'',
    mes:'',
    classify:{
        class:'',
        mes:''
    }
}

*/



function line(obj){
    const {imgSrc,satisfaction,mes,classify} = obj
    return `
    <li class="item">
        <img src="${imgSrc}">
        <div class="price flex">
            <h2>¥3568元</h2>
            <span>满意度：<span class="num">${satisfaction}%</span></span>  
        </div>
        <div class="message texts-hidden">${mes}</div>
        <div class="${classify.class} tag">${classify.mes}</div>
    </li>
    `
}

function lines(arr,dom){
    dom.innerHTML = '';
    let str = '';
    arr.forEach(ele=>{
        str += line(ele)
    })
    dom.innerHTML = str;
}

export default lines;