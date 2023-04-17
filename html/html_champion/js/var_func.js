const champ_line = ["All", "Top", "Jungle", "Mid", "Bottom", "Suppot"];
//그냥 실행
function showContent(num){
    let number = parseInt(num);
    init();
    all_display_none();
    display_flex(number);
}
function init(){ //전부 버튼이 클릭 안된 상태로 보이게
    for(let i=0; i<document.getElementsByTagName("header")[0].getElementsByTagName('input').length; i++){
        document.getElementsByClassName("header_bt")[i].setAttribute('class',"header_bt");
    }
}
function all_display_none(){ //모든 캐릭터를 안보이게
    for(let i=0; i<document.getElementsByClassName(champ_line[0]).length; i++){
        document.getElementsByClassName(champ_line[0])[i].style.display = "none";
    }
}
function display_flex(number){ //특정 조건 클래스만 보이게
    document.getElementsByClassName("header_bt")[number].setAttribute('class',"header_bt check");
    for(let i=0; i<document.getElementsByClassName(champ_line[+number]).length; i++){
        document.getElementsByClassName(champ_line[+number])[i].style.display = "";
    }
}
function open_champ(choise){
    let champ_name = choise[0].getAttribute('alt');
    let last = (champ_name.substr(-1).charCodeAt(0) - parseInt('ac00',16)) % 28 > 0;
    if(last) { last="을"; }else{ last="를"; }
    document.getElementsByClassName('contents')[0].innerHTML = champ_name+last+" 선택하였습니다.";
}
