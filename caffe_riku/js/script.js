function slider() {
    const SliderList = document.querySelector('.main_content_slider_list');
    let SliderItem = document.querySelectorAll('.main_content_slider_list_item');
    function moveSlider() {
        SliderItem.forEach(function (item) {
            item.style.transition = 'transform 0.5s';
            item.style.transform = 'translateX(-250px)';
        });

        setTimeout(function () {
            SliderItem.forEach(function (item) {
                item.style.transition = 'none';
                item.style.transform = 'translateX(0)';
            });
            SliderList.appendChild(SliderItem[0]);
            SliderItem = document.querySelectorAll('.main_content_slider_list_item');
        }, 500);
        setTimeout(moveSlider, 3000);
    }
    setTimeout(moveSlider, 3000);
}
window.addEventListener('load', function () {
    slider();
});

function sp_menu() {
    const Menu_List = document.querySelector('[data-sp_menu]');
    const Menu_opener = document.getElementById('sp_menu_opener');
    Menu_opener.addEventListener('click', function () {
        if (Menu_List.classList.contains('active')) {
            Menu_List.classList.remove('active')
        }
        else {
            Menu_List.classList.add('active')
        }
    })
}
sp_menu()

function header_dropdown() {
    const Header_Elm = document.querySelector('.header_dropdown');
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            Header_Elm.classList.add('inactive');
            Header_Elm.classList.remove('active');
        } else if (currentScrollY < lastScrollY) {
            Header_Elm.classList.add('active');
            Header_Elm.classList.remove('inactive');
        }
        lastScrollY = currentScrollY;
    });
}
header_dropdown();

function shopname_animation() {
    document.getElementById('shopname')
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.getElementById('shopname').classList.add('show');
        }, 1000)
    })
}
shopname_animation();

function toppage_background_animation() {
    const Toppage_Background = document.querySelector('.main_bg');
    const images = [
        'images/main_shop1.png',
        'images/main_shop2.png',
        'images/main_shop3.png',
        'images/main_shop4.png',
        'images/main_shop5.png'
    ];

    let currentIndex = 0;

    // 初期画像
    Toppage_Background.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${images[currentIndex]})
    `;
    Toppage_Background.style.backgroundSize = 'cover';
    Toppage_Background.style.backgroundPosition = 'center';
    Toppage_Background.style.transition = 'opacity 1s ease';

    function changeBackground() {
        // フェードアウト
        Toppage_Background.style.opacity = '0';

        setTimeout(() => {
            // インデックスを次へ（ループする）
            currentIndex = (currentIndex + 1) % images.length;

            // 背景画像とグラデーションを一緒にセット
            Toppage_Background.style.background = `
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${images[currentIndex]})
            `;
            Toppage_Background.style.backgroundSize = 'cover';
            Toppage_Background.style.backgroundPosition = 'center';

            // フェードイン
            Toppage_Background.style.opacity = '1';
        }, 500); // フェードアウトに合わせる（0.5秒後に切り替え）
    }

    // 5秒ごとに切り替え
    setInterval(changeBackground, 4000);
}

toppage_background_animation();
