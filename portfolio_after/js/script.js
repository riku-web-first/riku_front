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