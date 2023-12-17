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
    currentIndex = (currentIndex + 1) % texts.length;

    if (currentIndex === 0) {
      workWrap.style.display = "block";
      window.scrollTo({
        top: workWrap.offsetTop,
        behavior: "smooth", // smooth scrolling effect
      });
    }
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
      contentTextA.innerText = "보러가기";

      contentLi.appendChild(contentTextWrap);
      contentList.appendChild(contentLi);

      const allBtn = document.querySelector(".allBtn");
      const webBtn = document.querySelector(".webBtn");
      const appBtn = document.querySelector(".appBtn");
      const publishBtn = document.querySelector(".publishBtn");

      const filterWeb = "Web";
      const filterApp = "App";
      const filterPublish = "Publish";

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

      appBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          const tag = item.querySelector(".text p");
          if (tag.innerText.includes(filterApp)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });

      publishBtn.addEventListener("click", () => {
        const contentItems = document.querySelectorAll(".content");

        contentItems.forEach((item) => {
          const tag = item.querySelector(".text p");
          if (tag.innerText.includes(filterPublish)) {
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
