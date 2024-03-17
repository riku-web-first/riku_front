console.log(MenuIconClick)
function MenuIconClick(){
    document.getElementById('site_navi_smapho').classList.toggle('in');
    document.getElementById('linetarget1').classList.toggle('linehover1');
    document.getElementById('linetarget2').classList.toggle('linehover2');
    document.getElementById('linetarget3').classList.toggle('linehover3');
}
document.getElementById('menu_icon').addEventListener('click',function(){
    MenuIconClick();
});