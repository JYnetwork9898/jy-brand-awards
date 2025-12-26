<meta charset="utf-8">
<?php

include_once('mailer.lib.php');


$q_name = $_POST['q_name'];
 $q_tel = $_POST['q_tel'];
 $q_email = $_POST['q_email'];
 $q_agree = $_POST['q_agree'];
 $q_Marketing_Agree = $_POST['q_Marketing_Agree'];
mailer("$q_name", "beatace@naver.com", "beatace@naver.com", "[보도기사-빠른상담] $q_name", "이름 : $q_name<br>연락처 : $q_tel<br>이메일 : $q_email<br>[필수]개인정보이용동의 : $q_agree<br>[선택]마케팅이용동의 : $q_Marketing_Agree", 1);

?>
<!-- NAVER SCRIPT -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script> 
<script type="text/javascript"> 
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_3ee484cf695e";
var _nasa={};
if (window.wcs) {
_nasa["cnv"] = wcs.cnv("5", "0");
wcs_do(_nasa);
}
</script>
<!-- NAVER SCRIPT END -->

<script>
    alert ("메일이 발송되었습니다.\n빠른 시일안에 답변드리겠습니다.");

    setTimeout(() => {
    location.href="/pr";
    }, 500);
</script>
