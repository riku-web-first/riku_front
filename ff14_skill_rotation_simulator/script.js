let Skill_Icon = document.querySelectorAll('.skill_icon_list_item')
let Frame = document.querySelectorAll('.skill')
function drag() {
	Skill_Icon.forEach(function (item, index) {
		item.addEventListener('dragstart', function () {
			Frame[0].appendChild(Skill_Icon[0])
		})
	})
}
drag()



