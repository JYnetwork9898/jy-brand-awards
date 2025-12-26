<meta charset="utf-8">

<!-- Google Tag Manager -->
<!-- <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSKLCZP');</script> -->
<!-- End Google Tag Manager -->

<!-- AceCounter Log Gathering Script V.8.0.2019080601 -->
<script language='javascript'>
	var _AceGID=(function(){var Inf=['gtp11.acecounter.com','8080','AH3A45624890670','AW','0','NaPm,Ncisy','ALL','0']; var _CI=(!_AceGID)?[]:_AceGID.val;var _N=0;var _T=new Image(0,0);if(_CI.join('.').indexOf(Inf[3])<0){ _T.src ="https://"+Inf[0]+'/?cookie'; _CI.push(Inf);  _N=_CI.length; } return {o: _N,val:_CI}; })();
	var _AceCounter=(function(){var G=_AceGID;var _sc=document.createElement('script');var _sm=document.getElementsByTagName('script')[0];if(G.o!=0){var _A=G.val[G.o-1];var _G=(_A[0]).substr(0,_A[0].indexOf('.'));var _C=(_A[7]!='0')?(_A[2]):_A[3];var _U=(_A[5]).replace(/\,/g,'_');_sc.src='https:'+'//cr.acecounter.com/Web/AceCounter_'+_C+'.js?gc='+_A[2]+'&py='+_A[4]+'&gd='+_G+'&gp='+_A[1]+'&up='+_U+'&rd='+(new Date().getTime());_sm.parentNode.insertBefore(_sc,_sm);return _sc.src;}})();
</script>
<!-- AceCounter Log Gathering Script End -->

<?php
if(isset($_POST['email'])) {


	$email_to = "beatace@naver.com";
	$email_subject = "";
	$email_subject = '=?UTF-8?B?'.base64_encode($email_subject).'?=';



    function died($error) {
        // your error code can go here
        echo "<script> alert('메일발송을 실패하였습니다.');";
		echo "history.go(-1);";
		echo "</script>";
        die();
    }

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
    $chk_marketing = $_POST['chk_marketing'];
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
  if(strlen($error_message) > 0) {
    died($error_message);
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

    $email_message .= "마케팅이용동의 : ".clean_string($chk_marketing)."\n\n";

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

				@mail($email_to, $email_subject, $mailbody, $headers);

		  }

?>

<!-- include your own success html here -->
 <script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
<script>
  $(function(){
    $(".google-click-marketing").click();
  })
</script>

<!-- NAVER SCRIPT -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script> 
<script type="text/javascript"> 
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_3ee484cf695e";
var _nasa={};
if (window.wcs) {
_nasa["cnv"] = wcs.cnv("4","1");
wcs_do(_nasa);
}
</script>
<!-- NAVER SCRIPT END -->

<div class="google-click-marketing" onclick="test()" style="position:absolute; width:100%; height:100%; display:flex; align-items:center; justify-content: center; font-size:45px">
<i class="xi-spin xi-spinner-3"></i>
  </div>
<script>
  function test(){
    alert ("메일이 발송되었습니다.\n빠른 시일안에 답변드리겠습니다.");

    setTimeout(() => {
    location.href="/marketing";
    }, 500);
  }
</script>


<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSKLCZP');</script>


<?php
}
?>
