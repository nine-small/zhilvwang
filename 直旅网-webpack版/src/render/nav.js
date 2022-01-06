const data = [
    {
        name:"酒店",
        children:["国内.港澳台酒店","境外酒店"]
    },
    {
        name:"旅游",
        children:["境内","境外"]
    },
    {
        name:"跟团游",
    },
    {
        name:"自由行",
        children:["国内.港澳台酒店","境外酒店"]
    },
    {
        name:"机票",
    },
    {
        name:"火车",
    },
    {
        name:"门票",
        children:["境内门票","品质一日游","玩转海外","港澳台门票","地图找景点"]
    },
    {
        name:"攻略",
        children:["攻略首页","攻略库","目的地","创建行程","发表游记","骆驼书"]
    },
    {
        name:"全球购",
    },
    {
        name:"目的地",
        children:["旅游包车","导游讲解"]
    },
    {
        name:"更多",
        children:["更多精彩","敬请期待"]
    },
]

function renderNav(){
    const dom = document.getElementById('top-nav')
    dom.innerHTML = '';
    let str = '';
    data.forEach(ele=>{
        let child = '';
        let btn = '';
        if(ele.children){
            let childStr = '<ul class="child">'
            ele.children.forEach(item=>{
                childStr += `<li><a href="#">${item}</a></li>`
            })
            childStr += '</ul>'
            child = childStr;
            btn = '<i class="icon"></i>'
        }
        str += `<li>
            <a href="#">
            <span>${ele.name}</span>
            ${btn}
            </a>
            ${child}
        </li>`
    })
    dom.innerHTML = str;
}

renderNav()