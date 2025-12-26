<meta charset="utf-8">
<?php

include_once('mailer.lib.php');


$company_name = $_POST['company_name'];
 $company_emp = $_POST['company_emp'];
 $company_phone = $_POST['company_phone'];
 $company_mail = $_POST['company_mail'];
 $field = $_POST['field'];
 $field_2 = $_POST['field_2'];
 $marketing_agree = $_POST['marketing_agree'];
 $privacy_agree = $_POST['privacy_agree'];
mailer("$company_name", "beatace@naver.com", "dellycoo@jynetwork.co.kr", "[빠른상담] $company_name", "기업명 : $company_name<br>담당자명 : $company_emp<br>연락처 : $company_phone<br>이메일 : $company_mail<br>매체 : $field<br>예산 : $field_2<br>[필수]개인정보이용동의 : $privacy_agree<br>[선택]마케팅이용동의 : $marketing_agree", 1);

?>
<script>
    alert ("메일이 발송되었습니다.\n빠른 시일안에 답변드리겠습니다.");

    setTimeout(() => {
    location.href="/marketing";
    }, 500);
</script>
