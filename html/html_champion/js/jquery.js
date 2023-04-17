//load(로드가 완료), unload(로드가 안될때), error(에러 or 요청자원없음), resize(창 크기 조정), scroll(스크롤 할 때)

$(document).ready(function(){
    $("img").dblclick(function(){
        open_champ($(this));
    });
});