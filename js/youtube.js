// 유튜브 영상 자동재생

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', { //<div id="player"></div> player라는 아이디를 갖는 요소
    videoId: 'An6LvWQuj_8', // 최조 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) { // 이벤트는 동영상 플레이어가 준비가 되면 함수가 실행되는데 동영상이 플레이되는 상황 자체를 이벤트라는 이름으로 받아서 함수 내에서 사용한다.. 라고 하는데 복잡하네...
        event.target.mute() // 음소거
      }
    }    
  });
}