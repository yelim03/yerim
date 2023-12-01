// toggle btn 누르면 작동
const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

const sec0 = () => {
  console.log("sec0");
};
const sec1 = () => {
  console.log("sec1");
};
const sec2 = () => {
  console.log("sec2");
};
const sec3 = () => {
  console.log("sec3");
};
const sec4 = () => {
  console.log("sec4");
};
const sec5 = () => {
  console.log("sec5");
};

const sec2_reset = () => {};

// fullpage
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4", "Num5"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
    if (new_elem.index === 5) {
      sec5();
    }
  },
});
