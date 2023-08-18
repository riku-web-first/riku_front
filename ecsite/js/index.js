//ハンバーガーメニュー
const test = () => {
  const $doc1 = document.getElementById('smapho-nav');
  document.getElementById('icon').addEventListener('click', function () {
    $doc1.classList.toggle('in');
    document.getElementById('line1').classList.toggle('linehover1');
    document.getElementById('line2').classList.toggle('linehover2');
    document.getElementById('line3').classList.toggle('linehover3');
  })
}
test();

//swiper
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//見えたらスライド
const $target1 = document.getElementById('animationtarget1');
const $target2 = document.getElementById('animationtarget2');
const $target3 = document.getElementById('animationtarget3');
const $target4 = document.getElementById('animationtarget4');
const $target5 = document.getElementById('animationtarget5');
const $target6 = document.getElementById('animationtarget6');

document.addEventListener('scroll', function () {
  const $getElementDistance1 = $target1.getBoundingClientRect().top + $target1.
    clientHeight * 0.6;
  const $getElementDistance2 = $target2.getBoundingClientRect().top + $target2.
    clientHeight * 0.6;
  const $getElementDistance3 = $target3.getBoundingClientRect().top + $target3.
    clientHeight * 0.6;
    const $getElementDistance4 = $target4.getBoundingClientRect().top + $target4.
    clientHeight * 0.6;
    const $getElementDistance5 = $target5.getBoundingClientRect().top + $target5.
    clientHeight * 0.6;
    const $getElementDistance6 = $target6.getBoundingClientRect().top + $target6.
    clientHeight * 0.6;
  if (window.innerHeight > $getElementDistance1) {
    $target1.classList.add('show');
  }
  if (window.innerHeight > $getElementDistance2) {
    $target2.classList.add('show');
  }
  if (window.innerHeight > $getElementDistance3) {
    $target3.classList.add('show');
  }
  if (window.innerHeight > $getElementDistance4) {
    $target4.classList.add('show');
  }
  if (window.innerHeight > $getElementDistance5) {
    $target5.classList.add('show');
  }
  if (window.innerHeight > $getElementDistance6) {
    $target6.classList.add('show');
  }
})

//UIタブ
const $infoTabsTarget = document.querySelectorAll('.info-tabs ul li a');
const $infoContentTarget = document.querySelectorAll('.info-content ul li');
for (let i = 0; i < $infoTabsTarget.length; i++) {
  $infoTabsTarget[i].addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < $infoTabsTarget.length; j++) {
      $infoTabsTarget[j].classList.remove('active');
    }
    for (let j = 0; j < $infoContentTarget.length; j++) {
      $infoContentTarget[j].classList.remove('active');
    }

    $infoTabsTarget[i].classList.add('active');
    $infoContentTarget[i].classList.add('active');
  })
}

//製品タイプフォーム
const $ModelButton = document.querySelectorAll('.model-button');
console.log($ModelButton)

for (let i = 0; i < $ModelButton.length; i++) {
  $ModelButton[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < $ModelButton.length; j++) {
      $ModelButton[j].classList.remove('active');
    }
    $ModelButton[i].classList.add('active');
  })
}
