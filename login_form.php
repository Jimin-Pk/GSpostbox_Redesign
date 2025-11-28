<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/login.css">
    <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css" rel="stylesheet">
    <style>
        *{font-family: "NanumSquareNeo";}
        input {font-family: "NanumSquareNeo";}
        button {font-family: "NanumSquareNeo";}
    </style>
</head>
<body>
    <section id="logo">
       <img src="./mobileimg/GS25 logo2.png" alt="logo">
    </section>

    <section id="start">

        <form name="logform" method="post" action="login.php" onsubmit>
            <fieldset>
                <div id="login">
                    <input type="text" id="id" name="id" class="formcontrol" placeholder="아이디"> <!--jimin25-->
                </div>
                <div id="login">
                    <input type="password" id="pw" name="pw" class="formcontrol" placeholder="비밀번호"> <!--postbox2255!-->
                </div>
                <div id="check">
                    <div class="checkbox">
                        <label class="chkbox1" for="chk1">
                        <input type="checkbox" id="chk1">
                        <span class="chkicon"></span>
                        자동 로그인</label>
                    </div>
                    <div class="checkbox">
                        <label class="chkbox2" for="chk2">
                        <input type="checkbox" id="chk2" checked="checked">
                        <span class="chkicon"></span>
                        아이디 저장</label>
                    </div>
                </div>
                
                <div id="log">
                    <a href="./main.html" id="link">
                        <input type="submit" id="logbtn" value="로그인">
                    </a>
                </div>    

            </fieldset>
        </form>

        <div id="find">
            <ul>
                <li><a href="./preparingsystem.php">아이디 찾기</a></li>
                <li>|</li>
                <li><a href="./preparingsystem.php">비밀번호 찾기</a></li>
                <li>|</li>
                <li><a href="./joininfo.html">회원가입</a></li>
            </ul>
        </div>

        <div id="nomem">
            <a href="./preparingsystem.php"><button type="submit" class="nomembtn">비회원 택배 예약</button></a>
            <a href="./preparingsystem.php"><button type="submit" class="nomembtn">비회원 예약 조회</button></a>
        </div>
    </section>
    

    <!--<script src="js/login.js"></script>-->
</body>
</html>

