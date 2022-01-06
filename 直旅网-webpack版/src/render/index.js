import { getCards, getLines, getHots } from "../api/request.js";
import cards from "./card";
import lines from "./line";
import hots from "./hot";
import "./nav";
// 畅销
function renderBestSellerDomOne() {
  const bestSellerDomOne = document.getElementById("section-four-best-seller");
  getCards().then((resp) => {
    cards(resp[0].data, bestSellerDomOne);
  });
}

function renderBestSellerDomTwo() {
  const bestSellerDomTwo = document.getElementById("section-five-best-seller");
  getCards().then((resp) => {
    cards(resp[1].data, bestSellerDomTwo);
  });
}
renderBestSellerDomOne();
renderBestSellerDomTwo();

// 线路
function renderSectionFourLines() {
  const sectionFourLines = document.getElementById("section-four-lines");
  getLines().then((resp) => {
    console.log(resp);
    lines(resp[0].data, sectionFourLines);
  });
}

function renderSectionFiveLines() {
  const sectionFiveLines = document.getElementById("section-five-lines");
  getLines().then((resp) => {
    console.log(resp);
    lines(resp[1].data, sectionFiveLines);
  });
}

renderSectionFourLines();
renderSectionFiveLines();

export {
  renderBestSellerDomOne,
  renderBestSellerDomTwo,
  renderSectionFourLines,
  renderSectionFiveLines,
};

// hot

async function renderSectionSixHots() {
  const dom = document.getElementById("show-card");
  const { data } = await getHots();
  console.log(data[0][0].imgSrc)
  hots(data,dom)
}

renderSectionSixHots();
