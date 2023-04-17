/*
$(document).ready(function(){
    $(img).dblclick(function(){
        $("p").hide(); //감추기
    });
});
$("*"")
$(this)
$("태그명.클래스명#아이디명")
$("태그명:선택자명")

------선택자-------
:eq 인덱스 n번째
:gt 인덱스 n번 초과
:lt 인덱스 n번 미만
:even 짝수
:old 홀수

[href]
[target='_blank']
[target!='_blank']

:first 처음
:last 마지막
:animated 애니메이션
:header h1~h6
:lang(언어) 언어요소

:not(선택자)
:root 최상위
:target fragment식별자와 일치하는 요소
:contains(텍스트)

:has(선택자) 선택자 자손을 가지는 요소
:empty 자식 없음
:parent 자식있음

----input 선택자
:button
:checkbox
:file
:image
:passward
:radio
:reset
:submit
:text
:input
:checked --checkbox or radio
:selected --option
:focus --현재 포커스
:disabled --비활성화
:enabled --활성화

---------------------------------
.parent() 부모선택
.parents() 조상 모두 선택
.parentsUntil() 조상요소 중 선택자에 해당하는 바로 이전까지의 요소 모두
.closest() 선택요소포함, 조상요소중 지정한 선택자에 해당하는 요소중 가장 첫번째 요소
.siblings() 형제요소 중 지정한 선택자 모두

.next() 선택요소 바로 다음에 위치한 형제요소
.nextAll() 선택요소 다음에 위치한 형제요소 모두
.nextUntil() 형제요소 중 지정한 선택자에 해당하는 요소 바로 이전까지의 요소 모두 선택
.prev() .prevAll() .prevUntil()

.children() 자식요소 모두
.find() 자식요소중 전달받은 선택자 모두

.add() 선택요소에 요소 추가
.addBack() 선택요소 집합의 바로 전에 요소 추가
.each() 요소마다 전달받은 콜백함수 실행
.end() 마지막실행 메소드를 실행전 상태로선택한 요소의 집합을 복원함
.offsetParent()
.contents() 자식요소 모두 선택
.css() [첫번째 요소] 스타일의 속성값 반환 or 설정
.attr() [첫번째 요소] 속성값 반환 or 설정
.prop() [첫번째 요소] 프로퍼티 반환 or 설정
.removeAttr() 속성 제거
.removeProp() 프로퍼티 제거
.addClass() 클래스 추가
.removeClass() 클래스 제거
.ToggleClass() if(클래스X) 인수 추가, else 인수 제거
.hasClass() 클래스일치 확인


--------------Event----------------
.on({
    click:function(){},
    mouseenter:function(){},
    mouseleave:function(){}
    
})

---------마우스--------
.click() .dblclick()
.mouseup() .mouvedown() .mouseenter()
.hover() .mouseover() .mouseleave()
.mousemove() .mouseout()
---------키보드--------
.keyup() .keydown()
.keypress()

.blur()
.change()
.select()
.submit()
.foucus()
.focusin() .focusout()

---------인터랙션---------
draggable
droppable
resizeable
selectable
sortable
---------위젯---------
accordion
autocomplete
button
datapicker
dialog
progressbar
slider
tabs ui

플러그인 주소 https://plugin.jquery.com

*/

