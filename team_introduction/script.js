const characterElements = document.querySelectorAll('.character');
const InfoElements = document.querySelectorAll('.info')
document.addEventListener('scroll', function () {
    for (i = 0; i < characterElements.length; i++) {
        const getElementDistance = characterElements[i].getBoundingClientRect().top + characterElements[i].clientHeight * 0.6
        if (window.innerHeight > getElementDistance) {
            characterElements[i].classList.add('show');
            InfoElements[i].classList.add('show');
        }

    }
})