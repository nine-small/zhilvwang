import AsideCard from "../../components/Home/AsideCard/AsideCard";
import MainCard from "../../components/Home/MainCard/MainCard";
import Mock from "mockjs";
import "./css/Home.css";

// 模拟数据
const asideData = Mock.mock({
  title: "@cTitle(11,23)",
  url: "@image(63X63,@color())",
  "tags|3-5": ["@cTitle(3,5)"],
  "tag|1": ["跟团游", "自由行", "混合游"],
  "price|1000-10000": 1,
});

const mainData = Mock.mock({
  "mes|3-5": ["@cTitle(5,10)"],
  url: "@image(213X120,@color())",
  "price|1000-10000": 1,
  "satisfaction|90-100":1,
  "niu|1":["牛人专线","牛人严选"]
});

function Home() {
  return (
    <div>
      <AsideCard {...asideData} index={1}></AsideCard>
      {/* <MainCard {...mainData}></MainCard> */}
    </div>
  );
}

export default Home;
