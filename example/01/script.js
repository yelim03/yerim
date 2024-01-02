const bazzi = document.querySelector(".bazzi");
const dao = document.querySelector(".dao");
const dizni = document.querySelector(".dizni");
const uni = document.querySelector(".uni");
const mos = document.querySelector(".mos");

//---------Bazzi
const bazziSkill = () => {
  let tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".bazzi-g01",
    width: "60%",
  });
  tl.add({
    targets: ".bazzi-g02",
    width: "70%",
  });
  tl.add({
    targets: ".bazzi-g03",
    width: "90%",
  });
  tl.add({
    targets: ".bazzi-g11",
    width: "10%",
  });
  tl.add({
    targets: ".bazzi-g12",
    width: "10%",
  });
  tl.add({
    targets: ".bazzi-g13",
    width: "50%",
  });
};
bazzi.addEventListener("mouseover", () => {
  bazziSkill();
});

//---------Dao
const daoSkill = () => {
  let tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".dao-g01",
    width: "100%",
  });
  tl.add({
    targets: ".dao-g02",
    width: "70%",
  });
  tl.add({
    targets: ".dao-g03",
    width: "70%",
  });
  tl.add({
    targets: ".dao-g11",
    width: "10%",
  });
  tl.add({
    targets: ".dao-g12",
    width: "10%",
  });
  tl.add({
    targets: ".dao-g13",
    width: "50%",
  });
};
dao.addEventListener("mouseover", () => {
  daoSkill();
});

//---------Dizni
const dizniSkill = () => {
  let tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".dizni-g01",
    width: "70%",
  });
  tl.add({
    targets: ".dizni-g02",
    width: "90%",
  });
  tl.add({
    targets: ".dizni-g03",
    width: "80%",
  });
  tl.add({
    targets: ".dizni-g11",
    width: "20%",
  });
  tl.add({
    targets: ".dizni-g12",
    width: "10%",
  });
  tl.add({
    targets: ".dizni-g13",
    width: "40%",
  });
};
dizni.addEventListener("mouseover", () => {
  dizniSkill();
});

//---------Uni
const uniSkill = () => {
  let tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".uni-g01",
    width: "60%",
  });
  tl.add({
    targets: ".uni-g02",
    width: "70%",
  });
  tl.add({
    targets: ".uni-g03",
    width: "80%",
  });
  tl.add({
    targets: ".uni-g11",
    width: "10%",
  });
  tl.add({
    targets: ".uni-g12",
    width: "20%",
  });
  tl.add({
    targets: ".uni-g13",
    width: "50%",
  });
};
uni.addEventListener("mouseover", () => {
  uniSkill();
});

//---------Mos
const mosSkill = () => {
  let tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".mos-g01",
    width: "80%",
  });
  tl.add({
    targets: ".mos-g02",
    width: "50%",
  });
  tl.add({
    targets: ".mos-g03",
    width: "80%",
  });
  tl.add({
    targets: ".mos-g11",
    width: "20%",
  });
  tl.add({
    targets: ".mos-g12",
    width: "10%",
  });
  tl.add({
    targets: ".mos-g13",
    width: "40%",
  });
};
mos.addEventListener("mouseover", () => {
  mosSkill();
});

//---------Reset
const contentList = document.querySelectorAll(".content");

const gageReset = () => {
  anime({
    targets: ".bubble-gage",
    width: "0%",
  }).add({
    targets: ".bubble-gage1",
    width: "0%",
  });
};

contentList.forEach((content) => {
  content.addEventListener("mouseout", (e) => {});
});
