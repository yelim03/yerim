//Intro
const introText = document.querySelector(".introText h1");
const workWrap = document.querySelector(".workWrap");

const texts = ["I WANT TO BE", "A CREATIVE", "DEVELOPER", "PUBLISHER"];
let currentIndex = 0;

const changeText = () => {
  introText.style.opacity = "0";

  setTimeout(() => {
    introText.innerText = texts[currentIndex];
    introText.style.opacity = "1";
    introText.style.transition = "0.3s";

    const previousIndex =
      currentIndex === 0 ? texts.length - 1 : currentIndex - 1;

    if (texts[previousIndex] === "PUBLISHER") {
      setTimeout(() => {
        introText.style.letterSpacing = "4rem";
        introText.style.textShadow = "0 0 10px #fff";

        setTimeout(() => {
          workWrap.style.display = "block";
          window.scrollTo({
            top: workWrap.offsetTop,
            behavior: "smooth",
          });
        }, 700);
      }, 2700);
    }

    currentIndex = (currentIndex + 1) % texts.length;
  }, 200);
};

changeText();

const intervalId = setInterval(() => {
  if (currentIndex === texts.length - 1) {
    clearInterval(intervalId);
  }
  changeText();
}, 800);

//Content JSON
const url = "contents.json";
fetch(url)
  .then((response) => response.json())
  .then((contentData) => {
    const contentList = document.querySelector(".contentList");

    contentData.forEach((element) => {
      const contentLi = document.createElement("li");
      const contentImg = document.createElement("img");
      const contentTextWrap = document.createElement("div");
      const contentTextH1 = document.createElement("h1");
      const contentTextTag = document.createElement("p");
      const contentTextPer = document.createElement("p");
      const contentTextA = document.createElement("a");

      contentLi.classList.add("content");
      contentLi.appendChild(contentImg);
      contentLi.appendChild(contentTextWrap);

      contentImg.classList.add("image");
      contentImg.src = element.src;

      contentTextWrap.classList.add("text");
      contentTextWrap.appendChild(contentTextH1);
      contentTextWrap.appendChild(contentTextTag);
      contentTextWrap.appendChild(contentTextPer);
      contentTextWrap.appendChild(contentTextA);

      contentTextH1.innerText = element.name;
      contentTextTag.innerText = element.tag;
      contentTextPer.innerText = `기여도 : ${element.per}`;
      contentTextA.href = element.href;
      contentTextA.target = "_blank";
      contentTextA.innerText = "보러가기";

      contentLi.appendChild(contentTextWrap);
      contentList.appendChild(contentLi);

      const allBtn = document.querySelector(".allBtn");
      const webBtn = document.querySelector(".webBtn");
      const cloneBtn = document.querySelector(".cloneBtn");
      const exampleBtn = document.querySelector(".exampleBtn");

      const filterWeb = "반응형";
      const filterClone = "클론코딩";
      const filterExample = "실전예제";

      allBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          item.style.display = "block";
        });
      });

      webBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          const tag = item.querySelector(".text p");
          if (tag.innerText.includes(filterWeb)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });

      cloneBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          const tag = item.querySelector(".text p");
          if (tag.innerText.includes(filterClone)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });

      exampleBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          const tag = item.querySelector(".text p");
          if (tag.innerText.includes(filterExample)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
