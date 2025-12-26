<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html data-wf-page="646b08af3f5cc176af48ceb0" data-wf-site="646b08af3f5cc176af48ce90" lang="kr">

<style>
        .modal-bg {display:none;width:100%;height:100%;position:fixed;top:0;left:0;right:0;background: rgba(0, 0, 0, 0.6);z-index:999;}
        .modal-wrap {display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:#fff;z-index:1000; overflow-y:scroll; padding: 10px; border-radius:10px;}
</style>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
 <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/saideubaeneo.webflow.css" rel="stylesheet" type="text/css">
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon">
  <head>
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-TSKLCZP');</script>

    <!-- AceCounter Log Gathering Script V.8.0.AMZ2019080601 -->
    <script language='javascript'>
      var _AceGID = (function () { var Inf = ['gtp11.acecounter.com', '8080', 'AH3A45624890670', 'AW', '0', 'NaPm,Ncisy', 'ALL', '0']; var _CI = (!_AceGID) ? [] : _AceGID.val; var _N = 0; var _T = new Image(0, 0); if (_CI.join('.').indexOf(Inf[3]) < 0) { _T.src = "https://" + Inf[0] + '/?cookie'; _CI.push(Inf); _N = _CI.length; } return { o: _N, val: _CI }; })();
      var _AceCounter = (function () { var G = _AceGID; var _sc = document.createElement('script'); var _sm = document.getElementsByTagName('script')[0]; if (G.o != 0) { var _A = G.val[G.o - 1]; var _G = (_A[0]).substr(0, _A[0].indexOf('.')); var _C = (_A[7] != '0') ? (_A[2]) : _A[3]; var _U = (_A[5]).replace(/\,/g, '_'); _sc.src = 'https:' + '//cr.acecounter.com/Web/AceCounter_' + _C + '.js?gc=' + _A[2] + '&py=' + _A[4] + '&gd=' + _G + '&gp=' + _A[1] + '&up=' + _U + '&rd=' + (new Date().getTime()); _sm.parentNode.insertBefore(_sc, _sm); return _sc.src; } })();
    </script>
    <!-- AceCounter Log Gathering Script End -->

  </head>

  <body>

    <div class="hd_wrap">
      <div class="topnav" id="myTopnav">
        <a href="index.jsp" class="active"><img src="images/logo.png"></a>
        <a href="about.jsp" class="menu_min menu_TM">ABOUT US</a>
        <a href="referance.jsp" class="menu_TM">REFERANCE</a>
        <!-- <a href="package.jsp" class="menu_TM">PACKAGE</a> -->
        <!--
    <div class="dropdown">
      <button class="dropbtn">PACKAGE
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="">신규업체 패키지</a>
        <a href="">인플루언서 패키지</a>
        <a href="">1인기업 패키지</a>
      </div>
    </div>
    -->
        <a href="index.jsp#contact" class="menu_TM">CONTACT</a>
        <a href="file/jynetwork_company.pdf" target="_blank" class="menu_TM menu_cp">회사소개서</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"><img src="images/menu.png"></a>
      </div>
    </div>


	 <div id="quick_contact" class="w-layout-layout quick_contact w-node-a39eaea3-04d3-4195-f606-312ede815d74-af48ceb0 wf-layout-layout">
    <div id="w-node-_9507c949-60d9-fac2-2800-29e62a4e4187-af48ceb0" class="w-layout-cell quick_container">
      <h4 id="contact_tilte" class="contact_tilte">QUICK CONTACT</h4>
      <div class="w-form">
        <form id="wf-form-q_contact" name="wf-form-q_contact" data-name="q_contact" method="post" class="form" action="quick_send.php">
		<input type="text" class="text-field w-input" maxlength="256" name="company_name" data-name="company_name" placeholder="기업명" id="company_name"required="">
		<input type="text" class="text-field-2 w-input" maxlength="256" name="company_emp" data-name="company_emp" placeholder="담당자명" id="company_emp-2" required="">
		<input type="tel" class="text-field-3 w-input" maxlength="256" name="company_phone" data-name="company_phone" placeholder="연락처" id="company_phone" required="">
    <input type="text" class="text-field-2 w-input" maxlength="256" name="company_mail" data-name="company_mail" placeholder="Email" id="company_mail" required="">
		<select id="contact_plat" name="field" data-name="Field" class="contact_plat w-select">
            <option value="선택안함">-문의매체-</option>
            <option value="검색광고">검색광고</option>
            <option value="배너광고">배너광고</option>
            <option value="바이럴광고">바이럴광고</option>
            <option value="SNS광고">SNS광고</option>
            <option value="모바일광고">모바일광고</option>
            <option value="언론보도">언론보도</option>
            <option value="어워드">어워드</option>
            <option value="영상제작">영상제작</option>
            <option value="디자인제작">디자인제작</option>
            <option value="홈페이지제작">홈페이지제작</option>
            <option value="기타">기타</option>
          </select>
		  <select id="contact_cost" name="field_2" data-name="Field 2" class="contact_cost w-select">
            <option value="선택안함">-월 예산-</option>
            <option value="50만~100만">50만~100만</option>
            <option value="100만~500만">100만~500만</option>
            <option value="500만~1000만">500만~1000만</option>
            <option value="1000만~5000만">1000만~5000만</option>
            <option value="5000만 이상">5000만 이상</option>
            <option value="미정">미정</option>
          </select>
          <div class="columns w-row">
            <div id="contact-_agree" class="contact-_agree w-col w-col-8"><label class="w-checkbox checkbox-field"><input type="checkbox" name="privacy_agree" value="동의" data-name="개인정보 이용동의" required="" checked="" id="checkbox" class="w-checkbox-input"><span class="checkbox-label w-form-label">[필수]정보이용동의</span></label>
            <label class="w-checkbox checkbox-field"><input type="checkbox" name="marketing_agree" value="동의" data-name="마케팅이용동의" checked="" id="checkbox" class="w-checkbox-input"><span class="checkbox-label w-form-label">[선택]마케팅동의</span></label></div>
            <div class="column-2 w-clearfix w-col w-col-4">
              <a href="#" class="button-2 w-button" onClick="javascript:popOpen();">약관보기</a>
            </div>
          </div><input type="submit" value="빠른상담신청" data-wait="전송중입니다." class="submit_contact w-button" onclick='getCheckboxValue()'>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <h6 class="heading"><span class="text-span-3"></span><span> </span> <span id="contact_number" class="contact_number"><a href="tel:0269526443" style="color:#1b1b1b">02-6952-6443</span></a></span></h6>
      <h6 class="heading"><span class="mobile_kakao"></span><span> </span><span id="contact_kakao" class="contact_kakao"><a href="https://pf.kakao.com/_xlqakC" style="color:#1b1b1b">카카오톡 상담</span></a></span></h6>
      <h6 class="heading"><span class="text-span-5"></span><span id="contact_mail" class="contact_mail"> dellycoo<br>@jynetwork.co.kr</span></h6>
    </div>
  </div>
  <div id="w-node-fc421c20-676f-9a3d-8bd1-a649f0b16564-af48ceb0" class="w-layout-layout mobile_quick wf-layout-layout">
    <div id="w-node-fc421c20-676f-9a3d-8bd1-a649f0b16565-af48ceb0" class="w-layout-cell">
      <a href="#" class="button-4 w-button"></a>
      <a href="#" class="button-3 w-button"></a>
	  <a href="#" class="button-5 w-button"></a>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=646b08af3f5cc176af48ce90" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  
  <!--
     <div class="quick">
	 
     <div class="side_form">
		<div class="q_title">
			<span>CONTACT US</span>
		</div>
		<div>
		<div class="button_sns">
				<a href="https://www.youtube.com/channel/UCwub2CMPjXjF6ZtI49YbIEQ" target="new"><img src="https://jy-media.co.kr/bizdemo38741/img/youtube.png"><br>
				<span class="sns_title">YOUTUBE</span></a>
			</div>
			<div class="button_sns">
				<a href="https://blog.naver.com/mitao685" target="new"><img src="https://jy-media.co.kr/bizdemo38741/img/blog.png"><br>
				<span class="sns_title">BLOG</span></a>
			</div>

		</div>
		<form class="contactForm" name="formmail" enctype="multipart/form-data" action="quick_send.php">
			<input class="form_input" name="company_info" placeholder="업체명">
			<input class="form_input" name="company_n" placeholder="담당자명">
			<input class="form_input" name="company_num" placeholder="연락처">
			<select class="q_select" name="q_meta">
				<option value="선택안함">- 문의매체 -</option>
				<option value="검색광고">검색광고</option>
				<option value="배너광고">배너광고</option>
				<option value="바이럴광고">바이럴광고</option>
				<option value="SNS광고">SNS광고</option>
				<option value="영상광고">영상광고</option>
				<option value="모바일광고">모바일광고</option>
				<option value="언론보도">언론보도</option>
				<option value="어워드">어워드</option>
				<option value="영상제작">영상제작</option>
				<option value="디자인제작">디자인제작</option>
				<option value="홈페이지제작">문홈페이지제작</option>
				<option value="기타">기타</option>
			</select>
			<select class="q_select" name="q_price">
				<option value="선택안함">- 월 예상 예산 -</option>
				<option value="50만_100만">50만~100만</option>
				<option value="100만_500만">100만~500만</option>
				<option value="500만_1000만">500만~1000만</option>
				<option value="1000만_5000만">1000만~5000만</option>
				<option value="5000만이상">5000만 이상</option>
			</select>
			<label class="q_agreeLa">
			<input type="radio" name="q_agree" class="q_agree" value="동의" checked>
			<span class="q_agreeTxt"> 개인정보이용동의 <a href="#" style="float: right; color:#ccc; margin-top:6px;">[보기]</a></span>
			</label>
			<button class="quick_submit" value="submit" id="quick_submit" onclick="checkField();"><i class="fa-solid fa-paper-plane fa-beat-fade" style="color: #ffffff;"></i> 빠른상담신청</button>
		</form>
		<div>
			<button class="q_phone" type="button" onclick="window.open('tel:0233908532');"><i class="fa-sharp fa-solid fa-phone fa-shake" style="color: #00ca00;"></i> 02-3390-8532</button>
			<button class="q_kakao" type="button" onclick="window.open('https://pf.kakao.com/_xlqakC');"><i class="fa-sharp fa-solid fa-comment" style="color: #fad003;"></i> 카카오 상담하기</button>
			<button class="q_mail" id="button"><i class="fa-solid fa-envelope" style="color: #4ca0d3;" value="beatace@naver.com"></i> beatace@naver.com</button>
		</div>
	</div>
//-->


<!--
    <ul>
        <li>
          <img src="images/q_logo.png">
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCwub2CMPjXjF6ZtI49YbIEQ" target="_blank">
            <img src="images/youtube.png">
            <p>JY TV</p>
          </a>
        </li>
        <li>
          <a href="https://blog.naver.com/mitao685/" target="_blank">
            <img src="images/blog.png">
            <p>JY BLOG</p>
          </a>
        </li>
        <li>
          <a href="https://jynetwork.net/marketing/#contact">
            <img src="images/fast.png">
            <p>빠른문의</p>
          </a>
        </li>
        <li>
          <a href="http://pf.kakao.com/_xlqakC" target="_blank">
            <img src="images/kakao.png">
            <p>카카오상담</p>
          </a>
        </li>
        <li>
          <img src="images/call.png">
          <p><a href='tel:02 6952 6443'>02-6952-6443</a></p>
        </li>
        <li>dellycoo@jynetwork.co.kr</li>
      </ul> 
    </div> 
//-->
    



        <!-- modal 영역 -->
  <div class="modal-bg" onClick="javascript:popClose();"></div>
  <div class="modal-wrap">
    <h3 style="float:left;">개인정보 이용약관</h3><button class="modal-close" onClick="javascript:popClose();" style="float:right; background: #000; padding: 5px 10px; color: #fff; border-radius: 23px;">Close</button>
<p style="float:left;">‘주식회사 제이와이네트워크’는 (이하 ‘회사’) 회사가 운영하는 서비스 상품에 대하여 이용하는 이용자님들의 개인정보를 중요시하며, 아래와 같은 개인정보취급방침을 가지고 있습니다.<br>
이 개인정보 취금방침은 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, 개인정보 보호법’ 및 ‘전자 등에서의 소비자 보호에 관한 법률’ 등 개인정보와 관련된 법령 상의 개인정보보호규정과 방송통신위원회 및 안정행정부 등 관계부처가 제정한 가이드라인을 준수하고 있습니다. 본 개인정보취급방침은 당사의 서비스에 적용되며 다음과 같은 내용을 담고 있습니다.<br>
회사는 이용자의 개인정보를 수집/이용/제공하는 경우 반드시 사전에 이용자에게 해당 내용을 알리고 동의 절차를 거치며, 이용자가 동의하지 않을 경우에는 이용자의 개인정보를 수집/이용/제공하지 않습니다.<br>
단, 동의를 거부하는 경우 서비스의 전부 또는 일부 이용이 제한될 수 있습니다.<br>
회사는 개인정보 취급방침을 통해 이용자가 제공하는 개인정보가 어떠한 용도의 방식으로 이용되고 있으며, 적극적으로 보호하기 위해 항상 노력하고 있음을 알려드리고자 합니다.<br>
<br>
수집하는 개인 정보 항목 및 수집방법<br>
- 이름, 회사명, 이메일, 연락처, URL 등<br>
<br>
개인정보의 수집/이용 목적<br>
- 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br>
- 회원관리 및 마케팅, 광고에 활용 : 전화, 이메일을 통한 상품 및 기타 상품 상담 및 권유<br>
<br>
개인정보 보유/이용기간<br>
- 동의일로부터 3년간<br>
<br>
수집한 개인정보의 위탁 또는 제공<br>
- 회사는 고객의 동의없이 정보를 외부 업체에 위탁하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br>
1. 이용자들이 사전에 동의한경우<br>
2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br>
<br>
개인정보 수집에 변경, 철회방법<br>
- 주식회사 제이와이네트워크 beatace@naver.com로 이메일 문의하여 주십시오.</p>
        </div>
        <!-- //modal 영역 -->
  </body>
</html>

<script>
function popOpen() {

    var modalPop = $('.modal-wrap');
    var modalBg = $('.modal-bg'); 
    modalBg.fadeIn();
    modalPop.fadeIn();
    $(modalPop).show();
    $(modalBg).show();

}

 function popClose() {
   var modalPop = $('.modal-wrap');
   var modalBg = $('.modal-bg');
   $(modalPop).fadeOut();
   $(modalBg).fadeOut();

}

function getCheckboxValue()  {
  // 선택된 목록 가져오기
  const query = 'input[name="agree"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  });
  
  // 출력
}
  </script>
