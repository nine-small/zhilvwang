import {
  renderBestSellerDomOne,
  renderBestSellerDomTwo,
  renderSectionFourLines,
  renderSectionFiveLines,
} from "../render/index";
// 第三本分点击thumb改变大图背景
const banner = document.getElementById("main-banner")
const btnArr = [...document.getElementsByClassName("thumb big-banner-thumb")]
btnArr.forEach((ele,index)=>{
  ele.addEventListener('click',()=>{
    banner.src = ele.children[0].src
  })
})

// 第四部分  境内跟团游点击事件
const ulAddressNavFour = document.getElementById("section-four-nav-address");
ulAddressNavFour.addEventListener("click", function (e) {
  addressClick.call(this, e);
  renderBestSellerDomOne();
  renderSectionFourLines()
});

// 第五部分  境外跟团游点击事件
const ulAddressNavFive = document.getElementById("section-five-nav-address");
ulAddressNavFive.addEventListener("click", function (e) {
  addressClick.call(this, e);
  renderBestSellerDomTwo();
  renderSectionFiveLines();
});

// 事件辅助函数 4-5部分

function addressClick(e) {
  if (e.target.tagName !== "LI") return;
  let arr = [...this.children];
  arr.forEach((ele) => {
    ele.className = "";
  });
  e.target.className = "active";
}


