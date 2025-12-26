<meta charset="utf-8">
<?php

include_once('mailer.lib.php');

$company = $_POST['company'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$massage = $_POST['massage'];
 $agree = $_POST['agree'];
 $mark_agree = $_POST['mark_agree'];
mailer("$company", "beatace@naver.com", "beatace@naver.com", "[보도기사] $company", "회사명 : $company<br>연락처 : $tel<br>이메일 : $email<br>상담내용 : $massage<br>[필수]개인정보이용동의 : $agree<br>[선택]마케팅이용동의 : $mark_agree", 1);

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
