{
  /* 
    <li class="show-item ">
  <div class="card half half-bottom">
    <h3 class="title">
      上海迪士尼
      <span>Disney</span>
    </h3>
    <h4 class="mes">点亮心中奇梦</h4>
  </div>
  <div class="card half">
    <h3 class="title">
      上海迪士尼
      <span>Disney</span>
    </h3>
    <h4 class="mes">点亮心中奇梦</h4>
  </div>
</li>; 
*/
}

/* 
    data = [
        {
            title:'',
            ctitle:'',
            imgSrc:'',
            mes:''
        }
    ]
*/



function hot(data) {
  let className = "card";
  if (data.length === 2) {
    className = "card half";
  }
  let str = '<li class="show-item ">';
  data.forEach((ele) => {
    str += `
        <div class="${className}" style="background-image:url(${ele.imgSrc}">
        <h3 class="title">
          ${ele.ctitle}
          <span>${ele.title}</span>
        </h3>
        <h4 class="mes">${ele.mes}</h4>
      </div>
        `;
  });
  str += "</li>";
  return str;
}

function hots(arr,dom){
    dom.innerHTML = 0;
    let str = '';
    arr.forEach(ele=>{
        str += hot(ele)
    })
    dom.innerHTML = str;
}

export default hots;