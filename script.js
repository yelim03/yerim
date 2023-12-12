// toggle btn 누르면 작동
const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

const sec0 = () => {};
const sec1 = () => {
  const skills = document.querySelectorAll(".skill li");
  const skillIcons = document.querySelectorAll(".skill li img");
  const skillTexsts = document.querySelectorAll(".skill li span");

  skillTexsts.forEach((skillText) => {
    skillText.style.opacity = "0";
  });

  skills.forEach((skill, index) => {
    skill.addEventListener("mouseover", () => {
      skillTexsts[index].style.opacity = "1";
      skillIcons[index].style.opacity = "0";
    });
    skill.addEventListener("mouseout", () => {
      skillTexsts[index].style.opacity = "0";
      skillIcons[index].style.opacity = "1";
    });
  });
};
const sec2 = () => {
  const slideWrap = document.querySelector(".workSlideWrap");
  let slideWidth = slideWrap.clientWidth;

  const prevBtn = document.querySelector(".slidePrevBtn");
  const nextBtn = document.querySelector(".slideNextBtn");

  let slideItems = document.querySelectorAll(".slideItem");
  const maxSlide = slideItems.length;

  let currSlide = 1;

  const pagination = document.querySelector(".slidePagination");

  for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">.</li>`;
    else pagination.innerHTML += `<li>.</li>`;
  }

  const paginationItems = document.querySelectorAll(".slidePagination > li");

  const startSlide = slideItems[0];
  const endSlide = slideItems[slideItems.length - 1];
  const startElem = document.createElement("div");
  const endElem = document.createElement("div");

  endSlide.classList.forEach((c) => endElem.classList.add(c));
  endElem.innerHTML = endSlide.innerHTML;

  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;

  slideItems[0].before(endElem);
  slideItems[slideItems.length - 1].after(startElem);

  slideItems = document.querySelectorAll(".slideItem");

  let offset = slideWidth + currSlide;
  slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
  });

  const nextMove = () => {
    currSlide++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide <= maxSlide) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = 0;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide++;
      offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  };
  const prevMove = () => {
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = maxSlide + 1;
      let offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide--;
      offset = slideWidth * currSlide;
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  };

  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    nextMove();
  });
  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    prevMove();
  });

  // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

  // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
  for (let i = 0; i < maxSlide; i++) {
    // 각 페이지네이션마다 클릭 이벤트 추가하기
    paginationItems[i].addEventListener("click", () => {
      // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
      currSlide = i + 1;
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    });
  }

  // 드래그(스와이프) 이벤트를 위한 변수 초기화
  let startPoint = 0;
  let endPoint = 0;

  // PC 클릭 이벤트 (드래그)
  slideWrap.addEventListener("mousedown", (e) => {
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
  });

  slideWrap.addEventListener("mouseup", (e) => {
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
      // 마우스가 오른쪽으로 드래그 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 마우스가 왼쪽으로 드래그 된 경우
      nextMove();
    }
  });

  // 모바일 터치 이벤트 (스와이프)
  slideWrap.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
  });
  slideWrap.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
    if (startPoint < endPoint) {
      // 오른쪽으로 스와이프 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 왼쪽으로 스와이프 된 경우
      nextMove();
    }
  });

  // 기본적으로 슬라이드 루프 시작하기
  let loopInterval = setInterval(() => {
    nextMove();
  }, 3000);

  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  slideWrap.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });

  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  slideWrap.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove();
    }, 3000);
  });
};
const sec3 = () => {
  console.log("sec3");
};
const sec4 = () => {
  console.log("sec4");
};

// fullpage
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
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
  },
});
