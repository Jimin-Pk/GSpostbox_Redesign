<?
  session_start();
  unset($_SESSION['userid']);
  unset($_SESSION['username']);
 
  echo("
       <script>
          location.href = 'login_form.php'; 
          window.alert('로그아웃 되었습니다.')
         </script>
       ");
?>
