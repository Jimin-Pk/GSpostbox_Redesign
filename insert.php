<?php
session_start();
?>
<meta charset="utf-8">
<?php
    $hp = $_POST['tel'];
    $email = $_POST['email'];
    $id = $_POST['id'];
    $pass = $_POST['pw'];
    $name = $_POST['name'];

    $ip = $_SERVER['REMOTE_ADDR']; // 방문자의 IP 주소 저장

    include "dbconn.php";       
    mysqli_set_charset($connect, "utf8");

    $sql = "select * from gsjoin where id='$id'";
    $result = mysqli_query($connect, $sql);
    $exist_id = mysqli_num_rows($result);

    if ($exist_id) {
        echo("
           <script>
             window.alert('해당 아이디가 존재합니다. 다른 아이디를 사용해주세요.')
             history.go(-1)
           </script>
         ");
        exit;
    } else {
        // 레코드 삽입 명령을 $sql에 입력
        $sql = "insert into gsjoin(id, password, name, hp, email) ";
        $sql .= "values('$id', '$pass', '$name', '$hp', '$email')";

        mysqli_query($connect, $sql);  // $sql에 저장된 명령 실행
    }

    mysqli_close($connect);
    echo "
       <script>
        location.href = './login_form.php';
       </script>
    ";


?>