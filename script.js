document.addEventListener("DOMContentLoaded", function() {

    const resultBtn = document.getElementById("resultBtn");

    resultBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const answers = ["q1", "q2", "q3", "q4"];
        let countA = 0;
        let countB = 0;
        let countC = 0;

        answers.forEach(name => {
            const checked = document.querySelector(`input[name="${name}"]:checked`);
            if (checked) {
                if (checked.value === "a") countA++;
                if (checked.value === "b") countB++;
                if (checked.value === "c") countC++;
            }
        });

        let resultImage = "";

        // 判定ロジック
        if (countA > countB && countA > countC) {
            resultImage = "test_result1.png";
        } else if (countB > countA && countB > countC) {
            resultImage = "test_result2.png";
        } else if (countC > countA && countC > countB) {
            resultImage = "test_result3.png";
        } else if (countA === 2 && countB === 2) {
            resultImage = "test_result4.png";
        } else if (countA === 2 && countC === 2) {
            resultImage = "test_result5.png";
        } else if (countB === 2 && countC === 2) {
            resultImage = "test_result6.png";
        } else {
            alert("すべての質問に答えてください！");
            return;
        }

        const resultArea = document.getElementById("result-area");

        resultArea.innerHTML = `
            <div class="result-box">
                <img src="img/${resultImage}" alt="診断結果">
            </div>
        `;

    });

});



const track = document.querySelector(".voice-track");
const slides = document.querySelectorAll(".voice-slide");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

const slideWidth = 215 + 30; // 画像幅 + gap
const windowWidth = 390;
const centerOffset = (windowWidth - 215) / 2;

let currentIndex = 1;

// クローン作成
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll(".voice-slide");

// 初期位置（中央に表示）
track.style.transform =
  `translateX(-${currentIndex * slideWidth - centerOffset}px)`;

function moveSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform =
    `translateX(-${currentIndex * slideWidth - centerOffset}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex >= allSlides.length - 1) return;
  currentIndex++;
  moveSlide();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  moveSlide();
});

track.addEventListener("transitionend", () => {

  // 最後のクローンに行ったら最初へ
  if (currentIndex === allSlides.length - 1) {
    track.style.transition = "none";
    currentIndex = 1;
    track.style.transform =
      `translateX(-${currentIndex * slideWidth - centerOffset}px)`;
  }

  // 最初のクローンに行ったら最後へ
  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = allSlides.length - 2;
    track.style.transform =
      `translateX(-${currentIndex * slideWidth - centerOffset}px)`;
  }
});





document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    menuBtn.addEventListener("click", function () {

        hamburgerMenu.classList.toggle("active");

        if (hamburgerMenu.classList.contains("active")) {
            menuBtn.src = "./img/main_menu2.png";
        } else {
            menuBtn.src = "./img/main_menu.png";
        }

    });

});