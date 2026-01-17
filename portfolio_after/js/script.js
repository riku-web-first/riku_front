function OpeningAnimation() {
    const TopOpeningText = document.getElementById('title_text');
    // const BottomOpeningText = document.getElementById('title_text_bottom');
    let ArrayTitleText = TopOpeningText.textContent.split('');
    let TitleText = '';
    for (let i = 0; i < ArrayTitleText.length; i++) {
        //TitleText += '<span style="animation-delay:'が最初の文字列 + 変数i + s
        //加算演算子ではなく代入演算子を使用してる理由は加算だと最後の'e'しかTitleText変数に代入されない
        //代入演算子であれば配列の値全てがfor文で一つずつ代入される
        TitleText += '<span style="animation-delay:' + (i * 0.1) + 's;">' + ArrayTitleText[i] + '</span>';
        TopOpeningText.innerHTML = TitleText;
    }
    //考え方
    //innerHTMLで要素を挿入するタグを取得
    //取得した要素のテキストをtextContent.splitで配列化
    //既にHTMLに存在する文字列の「welcome」を消したいため、TitleText変数で空の変数を作っておき、
    //のちにfor文で作成したタグ(9行目)をinnerHTMLで置き換えして文字列を表示させる
}
OpeningAnimation()

function OpenList() {
    document.getElementById('sp_menu_opener').addEventListener('click', function () {
        document.getElementById('menu_list_sp').classList.add('active')
        document.querySelector('.portfolio_menu_list_sp_overlay').classList.add('active')
    })
    document.querySelector('.portfolio_menu_list_sp_overlay').addEventListener('click', function (e) {
        if (e.target.closest('.portfolio_menu_list_sp') === null) {
            document.querySelector('.portfolio_menu_list_sp_overlay').classList.remove('active');
            document.querySelector('.portfolio_menu_list_sp').classList.remove('active');
        }
    })
}
OpenList()

function ShowAnimation() {
    // const $targetElement = document.querySelectorAll('.animationtarget');
    const $FirstTargetElement = document.querySelectorAll('.first_animationtarget');
    let $SkillTargetElement = document.querySelectorAll('.skillanimationtarget');
    let $ProfileAnimation = document.querySelectorAll('.animation_target');
    document.addEventListener('scroll', function () {
        for (i = 0; i < $ProfileAnimation.length; i++) {
            const $getElementDistance = $ProfileAnimation[i].getBoundingClientRect().top + $ProfileAnimation[i].clientHeight * 0.6
            if (window.innerHeight > $getElementDistance) {
                $ProfileAnimation[i].classList.add('show');
            }
        }
    })

    window.addEventListener('load', function () {
        setTimeout(function () {
            $FirstTargetElement.forEach(function (item, index) {
                if (index === 0) {
                    item.classList.add('show')
                } else if (index === 1) {
                    setTimeout(function () {
                        item.classList.add('show')
                    }, 1000)
                } else if (index === 2) {
                    setTimeout(function () {
                        item.classList.add('show')
                    }, 1500)
                }
                else {
                    setTimeout(function () {
                        item.classList.add('show')
                    }, 2000)
                }
            })
            console.log($FirstTargetElement)
        }, 1000)
    })
    document.addEventListener('scroll', function () {
        for (let i = 0; i < $SkillTargetElement.length; i++) {
            const $getSkillElementDistance = $SkillTargetElement[i].getBoundingClientRect().top + $SkillTargetElement[i].clientHeight * 0.6
            if (window.innerWidth <= 959) {
                if (window.innerHeight > $getSkillElementDistance) {
                    $SkillTargetElement[i].classList.add('show')
                }
            } else if (window.innerHeight > $getSkillElementDistance) {
                setTimeout(function () {
                    $SkillTargetElement[i].classList.add('show')
                    // 要素一つ一つに遅延させて表示させてるから、
                    // if文でビューポート959px以下の条件を指定しないとレスポンシブだと要素が増えるにつれて
                    // 300ミリ*n秒掛かって表示されてしまう
                }, 1000 * i * 0.3)
            }
        }
    })

}
ShowAnimation();

function Modal() {
    const $WorksOverlay = document.getElementById('portfolio_overlay');
    const CloseButton = document.querySelectorAll('.portfolio_modal_close');
    let $ModalItem = document.querySelectorAll('.modal_item');
    let $WorkTargetElement = document.querySelectorAll('.workanimationtarget');
    CloseButton.forEach(function (item) {
        item.addEventListener('click', function () {
            $WorksOverlay.classList.remove('active');
            $ModalItem.forEach(function (item) {
                item.classList.remove('active');
            })
        })
    })
    $WorksOverlay.addEventListener('click', function (e) {
        // その要素、祖先に.modal_itemが存在しないか判定
        // 存在しない場合、nullとなり.modalitemのactive classが削除される
        // e.targetは<div id="portfolio_overlay" class="portfolio_overlay">だけを参照してるわけではなく子要素も参照している！
        if (e.target.closest('.modal_item') === null) {
            $ModalItem.forEach(function (item) {
                item.classList.remove('active');
            })
            $WorksOverlay.classList.remove('active');
        }
    })
    document.addEventListener('scroll', function () {
        for (let i = 0; i < $WorkTargetElement.length; i++) {
            // ビューポートの最上辺から要素の最上辺の距離の数値 + 要素の高さ * 0.6
            const $getWorkElementDistance = $WorkTargetElement[i].getBoundingClientRect().top + $WorkTargetElement[i].clientHeight * 0.6
            // もし$getWorkElementDistanceよりビューポートの高さのほうが大きければ
            if (window.innerHeight > $getWorkElementDistance) {
                setTimeout(function () {
                    $WorkTargetElement[i].classList.add('show')
                }, 1000 * i * 0.3)
            }
        }
    })
    for (let i = 0; i < $WorkTargetElement.length; i++) {
        $WorkTargetElement[i].addEventListener('click', function () {
            $ModalItem[i].classList.add('active');
            $WorksOverlay.classList.add('active');
        })
    }
}
Modal()

function ShowSampleImage() {
    let SampleImage = document.querySelectorAll('.portfolio_modal_sample_list_item_img');
    let SampleImageList = [
        'images/portfolio_modal_sample_list_item_img1.png',
        'images/portfolio_modal_sample_list_item_img2.png',
        'images/portfolio_works_list_item_sample_img_kn.png',
        'images/portfolio_modal_sample_list_item_img1_kn.png',
        'images/portfolio_works_list_item_sample_img_holy.png',
        'images/portfolio_works_list_item_sample_img_wataman.png',
        'images/portfolio_modal_sample_list_item_img1_wataman.png'
    ]
    const MainSampleImage = document.querySelectorAll('.portfolio_modal_sample');
    SampleImage.forEach(function (item, index) {
        item.onmouseover = function () {
            // なぜSampleImageのインデックス番号を取得しているのにSampleImage変数でindexが使用出来ているのか言語化不可
            MainSampleImage.forEach(function (item2) {
                item2.setAttribute('src', SampleImageList[index]);
            })
        }
    })
    console.log(SampleImage)
}
ShowSampleImage();

function FormInputChecking() {
    let NameElm = document.getElementById('name');
    let EmailElm = document.getElementById('email');
    let TextElm = document.getElementById('text');
    let Label_Name = document.getElementById('contact_label_name');
    let Label_Email = document.getElementById('contact_label_email');
    let Label_Text = document.getElementById('contact_label_text');
    NameElm.addEventListener('input', function () {
        if (NameElm.value.length >= 1) {
            Label_Name.classList.add('active');
        } else {
            Label_Name.classList.remove('active');
        }
    })
    EmailElm.addEventListener('input', function () {
        if (EmailElm.value.length > 0) {
            Label_Email.classList.add('active');
        } else {
            Label_Email.classList.remove('active');
        }
    })
    TextElm.addEventListener('input', function () {
        if (TextElm.value.length > 0) {
            Label_Text.classList.add('active');
        } else {
            Label_Text.classList.remove('active');
        }
    })
}
FormInputChecking();