// toggle btn 누르면 작동
const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

const sec0 = () => {
  const $text = document.querySelector(".typing .text");

  // 글자 모음
  const letters = ["Developer", "Designer", "Publisher"];

  // 글자 입력 속도
  const speed = 100;
  let i = 0;

  // 타이핑 효과
  const typing = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
  };

  // 글자 지우는 효과
  const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
      await wait(speed);

      letter.pop();
      $text.innerHTML = letter.join("");
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i + 1] ? 0 : i + 1;
    typing();
  };

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // 초기 실행
  setTimeout(typing, 1500);
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
