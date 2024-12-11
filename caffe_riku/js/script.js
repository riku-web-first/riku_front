function slider() {
    const SliderList = document.querySelector('.main_content_slider_list');
    let SliderItem = document.querySelectorAll('.main_content_slider_list_item');

    function moveSlider() {
        // 各アイテムを左に移動
        SliderItem.forEach(function(item) {
            item.style.transition = 'transform 0.5s';
            item.style.transform = 'translateX(-250px)';
        });

        // トランジション後に位置をリセットし、最初のアイテムをリストの最後に移動
        setTimeout(function() {
            // トランジションを削除して変換をリセット
            SliderItem.forEach(function(item) {
                item.style.transition = 'none';
                item.style.transform = 'translateX(0)';
            });

            // 最初のアイテムをリストの最後に移動
            SliderList.appendChild(SliderItem[0]);

            // 再度スライダーアイテムを取得
            SliderItem = document.querySelectorAll('.main_content_slider_list_item');

        }, 500); // トランジションと一致する時間を設定

        // 再度スライド移動を設定
        setTimeout(moveSlider, 3000);
    }

    // 初回のスライド移動を開始
    setTimeout(moveSlider, 3000);
}

window.addEventListener('load', function() {
    // slider();
});


// function slider() {
//     const SliderList = document.querySelector('.main_content_slider_list');
//     let SliderItem = document.querySelectorAll('.main_content_slider_list_item');
//     SliderItem.forEach(function(item){
//         item.style.transform = 'translateX(-342px)'
//     })
// }
// // ページをロードしたら関数を実行
// window.addEventListener('load', function() {
//         slider();
// });