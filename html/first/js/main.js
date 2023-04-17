/* 접속 핸드폰 정보 */
// var userAgent = navigator.userAgent.toLowerCase(); 
/* 모바일 홈페이지 바로가기 링크 생성 */
// if(userAgent.match('iphone')){
//     alert('iphone');
// } else if(userAgent.match('ipad')) { 
//     alert('ipad');
// } else if(userAgent.match('android')) {
//     alert('android');
// } else if(userAgent.match('win64')) {
//     alert('64비트 윈도우');
// } else if(userAgent.match('win84')) {
//     alert('32비트 윈도우');
// }

    // var size = {width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    // if(size.width<900){
    //     display_smaller();
    // }else{
    //     display_over();
    // }

//load(로드가 완료), unload(로드가 안될때), error(에러 or 요청자원없음), resize(창 크기 조정), scroll(스크롤 할 때)
// $(document).ready(function(){
//     $(img).dblclick(function(){
//         console.log($(this));
//     });
// });
window.addEventListener('load',function(event){ }, true);
window.addEventListener('resize', function(event){ }, true);


function showContent(num){
    let number = parseInt(num);
    if(number==0){
        if(document.getElementsByClassName("container")[0].style.display == "none"){
            document.getElementsByClassName("header_bt00")[0].value = "내용 안보이기";
            document.getElementsByClassName("container")[0].style.display = "flex";
        }else{
            document.getElementsByClassName("header_bt00")[0].value = "내용 보이기";
            document.getElementsByClassName("container")[0].style.display = "none";
        }
    }
}

function showContent1(){
    clearContent1();
    var clone = document.getElementsByClassName("temp1")[0].content.cloneNode(true);
    document.getElementsByClassName('template1')[0].append(clone);
}
function clearContent1(){ document.getElementsByClassName('template1')[0].innerText = ""; }

//(function func(){})();
//var func = function(){}; func();

var didScroll = false;
// // 스크롤시에 사용자가 스크롤했다는 것을 알림 
window.addEventListener('scroll', function(event){
    var scroll_y = window.scrollY;
    if(scroll_y > 300 && scroll_y < 900){
        didScroll = true;
        document.getElementsByClassName('video2')[0].style.display = "block";
        document.getElementsByClassName('video2')[0].setAttribute("autoplay","autoplay");
    }else{
        didScroll = false;
        document.getElementsByClassName('video2')[0].style.display = "none";
    }
}, true);

window.addEventListener('mousemove', function() {
    var mouse_X = this.event.pageX;
    var mouse_Y = this.event.pageY-window.scrollY;
    this.document.getElementsByClassName('mouse_move')[0].style.left = mouse_X-50;
    this.document.getElementsByClassName('mouse_move')[0].style.top = mouse_Y-50;
});

var before={"x":0,"y":0};
window.addEventListener('mousedown', function() {
    var mouse_X = this.event.pageX;
    var mouse_Y = this.event.pageY-window.scrollY;
    before.x = mouse_X;
    before.y = mouse_Y;
});
window.addEventListener('mouseup', function() {
    var mouse_X = this.event.pageX;
    var mouse_Y = this.event.pageY-window.scrollY;
    this.document.getElementsByClassName('pictures')[0].innerHTML += 
    "<line x1=\""+before.x+"\" y1=\""+before.y+"\" x2=\""+mouse_X+"\" y2=\""+mouse_Y+"\" stroke=\"pink\" stroke-width=\"2\"/>";
    before.x = mouse_X;
    before.y = mouse_Y;
});
// window.addEventListener('click', function() {
//     var mouse_X = this.event.pageX;
//     var mouse_Y = this.event.pageY-window.scrollY;
//     if(before.x == 0 && before.y == 0){
//         before.x = mouse_X;
//         before.y = mouse_Y;
//         return;
//     }else{
//         this.document.getElementsByClassName('pictures')[0].innerHTML += 
//         "<line x1=\""+before.x+"\" y1=\""+before.y+"\" x2=\""+mouse_X+"\" y2=\""+mouse_Y+"\" stroke=\"pink\" stroke-width=\"2\"/>";
//         before.x = mouse_X;
//         before.y = mouse_Y;
//     }
    
// });

// // hasScrolled()를 실행하고 didScroll 상태를 재설정
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 1000);

// function hasScrolled() {
//     if(window.scrollY > 100){
//         alert("스크롤 내림");
//     }
// }


