// 일정 부분 스크롤되면 요소 숨기기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); //#to-top 은 css 선택자

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); //화면이 몇픽셀 지점에 스크롤 되고 있는지 확인
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    //gsap 라이브러리 // gsap.to(애니메이션 처리할 요소, 지속시간(s), 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display: 'none'
    }); 
    // to-top 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 //오른쪽으로 100px 이동
    }); //#to-top 은 css 선택자

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display: 'block'
    }); 
    // to-top 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 //오른쪽으로 100px 이동
    }); 
  }
}, 300)); //_.throttle(사용하려는 함수, 함수가 실행되는 시간(주기ms))


// 화면 최상단 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 //스크롤의위치(화면의 위치)를 0픽셀 지점으로 0.7초 동안 옮겨주겠다. scrollTo를 사용하기위헤 scrollToPlugin을 gsap에서 불러옴
  });
});



// 시간차를 두고 요소 나타내기
const fadeEls = document.querySelectorAll('.visual .fade-in'); //.visual 클래스를 가진요소의 후손인.fade-in 를 모두 찾아서 fadeEls에 할당하겠다.
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(반복되는 요소, 지속시간s, 옵션{객체데이터형태});
  gsap.to(fadeEl, 1, {
    delay:(index+1)*.7, //0.7, 1.4, 2.1, 2.7초에 동작    
    opacity: 1
  })
}); //.fade-in 요소의 개수만큼 forEach메소드에 인수로적은 함수가 실행


// 공지사항 수직 슬라이드(swiper, swiperjs 사용)
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //수직 스와이핑
  autoplay: true, //자동 재생
  loop: true //반복 재생
});


// // 프로모션 가로 슬라이드(swiper, swiperjs 사용)
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드로 기본값임
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})

// 푸터위 awards 슬라이드요소
new Swiper ('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween : 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }  
});



// 프로모션 더보기 숨기기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !를 통하여 반대되는 값을 반환
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 유튜브 영상에 둥둥떠다니는 그림 (gsap 자바스크립트 애니메이션 라이브러리 사용)
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { // 요소, 딜레이, 위아래로 움직이는 크기
  // gsap.to(요소, 시간(s), 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, //y축으로 얼마만큼 움직일 것인가
      repeat:-1, // gsap 라이브러리에서만 기능 -1을 써서 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay) // 입력한 시간 뒤에 시작
    }
  );
}
floatingObject('.floating1', 1, 15); //css 선택자를 인수로 넣어줌
floatingObject('.floating2', .5, 15); //css 선택자를 인수로 넣어줌
floatingObject('.floating3', 1.5, 20); //css 선택자를 인수로 넣어줌


// ScrollMagic cdn 연결,
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ //Scene은 ScrollMagic 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정하는 메소드임
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});