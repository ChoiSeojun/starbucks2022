// 돋보기 아이콘 눌렀을 때 검색 input 요소에 포커싱 
const searchEl = document.querySelector('.search'); //document 객체를 html 자체라고 생각해도 무방하다고 한다. 
const searchInputEl = searchEl.querySelector('input') // 앞서 찾은 searchEl 안에서 input요소 찾기

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 포커스 후 focused 클래스 추가 및 placeholder 입력
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //.setAttribute('속성', '속성값')
});

// 포커스 해제(블러) 후 focust 클래스 제거
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); //.setAttribute('속성', '속성값')
});



// 연도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022