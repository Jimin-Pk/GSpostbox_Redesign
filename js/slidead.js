let currentAd1 = 0; // 현재 보여주는 이미지 번호 (처음에는 0)
let currentAd2 = 0; 
const slideWidth = 343; // 이미지 한 장의 가로 크기

// 슬라이드를 움직이는 함수
function slideImage1() {
    const ul1 = document.getElementById("ad1");
    const totalImages1 = ul1.children.length; // u 안의 이미지 개수
    currentAd1 = (currentAd1 + 1) % totalImages1; // 다음 이미지로 넘어가기
    if(currentAd1 == 0){
      ul1.style.transform = `translateX(100%)`;
    }
    ul1.style.transform = `translateX(-${currentAd1 * slideWidth}px)`; // 이동 효과
}

function slideImage2() {
  const ul2 = document.getElementById("ad2");
  const totalImages2 = ul2.children.length; // ul 안의 이미지 개수
  currentAd2 = (currentAd2 + 1) % totalImages2; // 다음 이미지로 넘어가기
  if(currentAd2 == 0){
    ul2.style.transform = `trasnlateX(100%)`;
  }
  ul2.style.transform = `translateX(-${currentAd2 * slideWidth}px)`; // 이동 효과
}

setInterval(slideImage1, 3000);
setInterval(slideImage2, 3000);
