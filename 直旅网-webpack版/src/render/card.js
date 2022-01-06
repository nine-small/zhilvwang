/**
 *
 * @param {Object} obj
 * @returns String
 * {
 * thumb:'',
 * tag:[],
 * price:'',
 * mes:'',
 * sort:1,
 * title:''
 * }
 *
 *
 *
 *
 */

function card(obj) {
  const { thumb, title, tag, price, mes, sort } = obj;
  let tagStr = "";
  for (let i = 0; i < tag.length; i++) {
    tagStr += `<span>${tag[i]}&nbsp;</span>`;
  }
  return `
        <li class="item flex ${sort%5 < 4 && sort%5 > 0? "f" : ""}">
            <img src="${thumb}">
            <div class="message">
                <h5 class="title text-hidden">${title}</h5>
                <div class="tag text-hidden">${tagStr}</div>
                <div class="flex">
                    <div class="mes">${mes}</div>
                    <div class="price">
                        <span>¥${price}</span>起
                    </div>
                </div>
            </div>
            <div class="tags f${sort%5}">${sort%5}</div>
        </li>
        `;
}

function cards(arr, dom) {
  dom.innerHTML = "";
  let str = "";
  arr.forEach((ele) => {
    str += card(ele);
  });
  dom.innerHTML = str;
}

export default cards;
