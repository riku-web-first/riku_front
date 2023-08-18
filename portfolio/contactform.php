<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/contact.css" rel="stylesheet" type="text/css" />
    <title>contact</title>
</head>

<body>
<?php if($_POST){ ?>
        <!--確認画面-->
            <form action="./contactform.php" method="POST"><!--確認から完了画面に行く為POSTにする-->
            <p>お名前</p><?php echo $_POST['name']?><br>
            <p>メールアドレス</p><?php echo $_POST['email']?><br>
            <p>お問い合せ内容</p><br>
            <?php echo nl2br($_POST['message'])?><br>
            <input type="submit" name="back" value="戻る"/>
            <input type="submit" name="send" value="送信"/>
        <?php }else{ ?>
        <?php } ?>
    </form>
    <header>
        <div class="header_inner">
            <h1><a href="index.html"><img src="images/logo.png" alt="タイトルロゴ"></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Top</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="work.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article id="contact_header">
            <p>私、リクへの問い合わせ、ご相談などございましたらお気軽にお問い合わせください。<br>
                下記フォームより必須項目を併せご記入いただくようお願い致します。</p>
        </article>
        <section>
            <!--入力画面-->
            <form action="./contactform.php" method="POST" id="contact_inner">
                <label for="name">
                    <p>お名前</p>
                </label>
                <input type="text" name="name" id="name" placeholder="田中 太郎" value="">

                <label for="email">
                    <p>メールアドレス</p>
                </label>
                <input type="email" name="email" id="email"  value="">

                <label for="tel">
                    <p>電話番号</p>
                </label>
                <input type="number" name="tel" id="tel" value="">

                <label for="message">
                    <p>お問い合わせ内容</p>
                </label>
                <textarea name="message" id="message"></textarea>
                <input type="submit" name="send" id="send" class="submit" value="確認"></input>
            </form>
            <?php
            print_r($_POST);
            ?>
        </section>
    </main>
    <footer>
        <small>
            Copyright © 2020 Riku All right Reserved
        </small>
    </footer>
    </body>
    </html>