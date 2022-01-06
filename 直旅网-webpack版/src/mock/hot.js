const Mock = require("mockjs");

let data1 = Mock.mock(() => {
  return {
    ctitle: "@ctitle()",
    title: "@title(1)",
    mes: "@ctitle()",
    imgSrc: "@image(220x183,@color())",
  };
});
let data2 = Mock.mock(()=>{
  return {
    ctitle: "@ctitle()",
    title: "@title(1)",
    mes: "@ctitle()",
    imgSrc: "@image(220x378,@color())",
  }

});

Mock.mock("/api/hot", "get", () => {
  return Mock.mock({
    code: 0,
    data: {
      id: 1,
      data: [
        [data1, data1],
        [data1, data1],
        [data2],
        [data1, data1],
        [data1, data1],
      ],
    },
  });
});
