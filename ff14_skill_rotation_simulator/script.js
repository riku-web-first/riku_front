let Skill_Icon = document.querySelectorAll('.skill_icon_list_item')
function drag() {
	Skill_Icon[0].addEventListener('dragstart',function(){
		alert('あああ')
	})
}
drag()
