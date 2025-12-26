<meta charset="utf-8">
<?php

include_once('mailer.lib.php');



    // validation expected data exists
    if(!isset($_POST['first_name']) ||
    		!isset($_POST['qnaKnd']) ||
    		!isset($_POST['companyPosition']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }
    $qnaKnd = $_POST['qnaKnd']; // required
    $email_subject =  $_POST['subject']; //required
    $first_name = $_POST['first_name']; // required
    $companyPosition = $_POST['companyPosition']; // required
    $telephone = $_POST['telephone']; // not required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required
    $chk_m = $_POST['chk_m'];
    $fileFlag = $_FILES['upfile']['tmp_name'] ;
    $userfile = $_FILES['upfile']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }

    $email_message = "";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "문의종류 : ".clean_string($qnaKnd)."\n\n";

    $email_message .= "제목 : ".clean_string($email_subject)."\n\n";

    $email_message .= "이름 : ".clean_string($first_name)."\n\n";

    $email_message .= "기업명/직책 : ".clean_string($companyPosition)."\n\n";

    $email_message .= "연락처 : ".clean_string($telephone)."\n\n";

    $email_message .= "이메일 : ".clean_string($email_from)."\n\n";

    $email_message .= "내용 : ".clean_string($comments)."\n\n";

    $email_message .= "마케팅이용동의 : ".clean_string($chk_m)."\n\n";

		  if(empty($fileFlag)) {

		  	// create email headers
				$headers = 'From: '.$email_from;
				// 제목이 깨질경우 아래 캐릭터셋 적용

				@mail($email_to, $email_subject, $email_message, $headers);

		  }else{

		  	$boundary = "----" . uniqid("part"); // 구분자 생성

		  	$filename =basename($_FILES["upfile"]['name']);  // 파일명만 추출 후 $filename에 저장
			  $fp = fopen($_FILES["upfile"]["tmp_name"], "r");    // 파일 open
			  $file = fread($fp, $_FILES["upfile"]['size']);  // 파일 내용을 읽음
			  fclose($fp);          // 파일 close
				// --- 헤더작성 --- //
				$headers .= "MIME-Version: 1.0\r\n"; // MIME 버전 표시
				$headers = "From:".$email_from."\r\n";
				$headers .= "Content-Type: Multipart/mixed; boundary=\"$boundary\""; // 구분자 설정, Multipart/mixed 일 경우 첨부화일

				// --- 이메일 본문 생성 --- //
				$mailbody = "This is a multi-part message in MIME format.\r\n\r\n";
				$mailbody .= "--$boundary\r\n";
				$mailbody .= "Content-Type: text/html; charset=utf-8\r\n";
				$mailbody .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
				$mailbody .= nl2br(addslashes($email_message)) . "\r\n";

				// --- 파일 첨부 ---//
				$mailbody .= "--$boundary\r\n";
				$mailbody .= "Content-Type: ".$_FILES["upfile"]['type']."; name=\"".$filename."\"\r\n"; // 내용
				$mailbody .= "Content-Transfer-Encoding: base64\r\n"; // 암호화 방식
				$mailbody .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n"; // 첨부파일인 것을 알림
				$mailbody .= base64_encode($file)."\r\n\r\n";

				$mailbody .= "--$boundary--"; //내용 구분자 마침
				// --- 헤더작성 --- //
				$header .= "MIME-Version: 1.0\r\n";
				$header .= "Content-Type: Multipart/alternative; boundary = \"$boundary\"";

				$mailbody .= "--$boundary--\r\n\r\n";

		  }
mailer("$first_name",
    "beatace@naver.com",
    "beatace@naver.com",
    "$email_subject",
    "문의종류 : $qnaKnd<br>
    기업명 : $companyPosition<br>
    담당자명 : $first_name<br>
    연락처 : $telephone<br>
    이메일 : $email_from<br>
    내용 : $comments<br>
    마케팅이용동의 : $chk_m", 1);

?>
<script>
    alert ("메일이 발송되었습니다.\n빠른 시일안에 답변드리겠습니다.");

    setTimeout(() => {
    location.href="/marketing";
    }, 500);
</script>
