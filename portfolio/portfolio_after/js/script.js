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

function ShowAnimation() {
    const $targetElement = document.querySelectorAll('.animationtarget');
    const $FirstTargetElement = document.querySelectorAll('.first_animationtarget');
    let $WorkTargetElement = document.querySelectorAll('.workanimationtarget');
    const $WorksOverlay = document.getElementById('portfolio_overlay');
    let $ModalItem = document.getElementById('modal_item');
    const $MainElement = document.getElementById('portfolio_container');
    document.addEventListener('scroll', function () {
        for (i = 0; i < $targetElement.length; i++) {
            const $getElementDistance = $targetElement[i].getBoundingClientRect().top + $targetElement[i].clientHeight * 0.6
            if (window.innerHeight > $getElementDistance) {
                $targetElement[i].classList.add('show')
            }
        }
    })
    window.addEventListener('load', function () {
        setTimeout(function () {
            $FirstTargetElement.forEach(function (item, index) {
                if (index === 0) {
                    item.classList.add('show')
                } else if (index === 2) {
                    setTimeout(function () {
                        item.classList.add('show')
                    }, 1500)
                }
                else {
                    setTimeout(function () {
                        item.classList.add('show')
                    }, 600)
                }
            })
        }, 1000)
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
            $ModalItem.classList.add('active');
            $WorksOverlay.classList.add('active');
            // $MainElement.style.overflow = 'hidden';
        })
    }
    console.log('Click event triggered');
}
ShowAnimation();