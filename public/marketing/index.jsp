<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<meta name="viewport" content="width=device-width,initial-scale=1" />

<head>
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <title>제이와이네트워크 마케팅 - 전문가의 컨설팅</title>

    <!--css-->
    <link rel="stylesheet" href="/marketing/css/common.css">
    <link rel="stylesheet" href="/marketing/css/header.css">
    <link rel="stylesheet" href="/marketing/css/footer.css">
    <link rel="stylesheet" href="/marketing/css/main.css">
    <!--script-->
    <script type="text/javascript" src="/marketing/js/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="/marketing/js/header.js"></script>
    <script type="text/javascript" src="/marketing/js/banner.js"></script>
    <!--count script-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="/marketing/js/counterUp2.js"></script>
    <!--slick-->
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="/marketing/js/slick.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/marketing/css/slick.css" />
    <link rel="stylesheet" type="text/css" href="/marketing/css/slick-theme.css" />
    <!--AOS-->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

</head>

<body>
  <div class="wrap">

    <%@ include file="header.jsp" %>

      <div class="content">

        <div class="sec1">
          <h1 data-aos="flip-right">Creative Consulting</h1>
          <h3 data-aos="flip-left">바이럴, DA, 영상제작, 디자인, 언론홍보, IMC믹스플랜</h3>
          <div class="sec1_btn">
            <a href="#contact">바로 문의하기</a>
          </div>
          <h5>제이와이네트워크 만의 광고성과 극대화를 위한 서비스와 도구들을 활용해보세요.</h5>
          <div class="sec1_4box" data-aos="zoom-in">
            <ul>
              <li><a href="https://jynetwork.net/marketing/referance.jsp" target="_blank">온라인마케팅<br>레퍼런스</a></li>
              <li><a href="https://jy-media.co.kr/default/product/sub3.php?top=3&sub=3" target="_blank">영상제작<br>레퍼런스</a>
              </li>
              <li><a href="https://jy-design.co.kr/portfolio" target="_blank">디자인,홈페이지<br>레퍼런스</a></li>
              <li><a href="https://jym.co.kr" target="_blank">광고 간편 구매<br>쇼핑몰</a></li>
            </ul>
          </div>
        </div><!--sec1 끝-->

        <div class="sec2">
          <img src="/marketing/images/bau_text.png" data-aos="zoom-in" class="sec2_img1">
          <img src="/marketing/images/bau_img.png" data-aos="zoom-in" class="sec2_img2">
        </div><!--sec2 끝-->

        <div class="sec_area">
          <div class="sec3">
            <h1 class="sec_tit">고객사</h1>
            <img src="/marketing/images/client.png" data-aos="zoom-in">
            <div class="sec3_btn"><a href="referance.jsp" target="_blank">레퍼런스 바로가기</a></div>
          </div><!--sec3 끝-->

          <div class="sec4">
            <ul>
              <li>
                <h2 class="counter">2015</h2>
                <h5>SINCE</h5>
                <i>고객과 함께<br>발빠른 성장</i>
              </li>
              <li>
                <h2 class="counter">5</h2>
                <h5>TEAM</h5>
                <i>원동력이 되는<br>팀구성</i>
              </li>
              <li>
                <h2 class="counter">1148</h2>
                <h5>PROJECT</h5>
                <i>다수의<br>프로젝트를 진행</i>
              </li>
              <li>
                <h2 class="counter">20</h2>
                <h5>SPECIALIST</h5>
                <i>전문가들의<br>협업</i>
              </li>
            </ul>
            <script>
              //
              $(document).ready(function () {

                jQuery(function ($) {
                  "use strict";

                  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

                  var $counters = $(".counter");

                  /* Start counting, do this on DOM ready or with Waypoints. */
                  $counters.each(function (ignore, counter) {
                    var waypoint = new Waypoint({
                      element: $(this),
                      handler: function () {
                        counterUp(counter, {
                          duration: 1000,
                          delay: 10
                        });
                        this.destroy();
                      },
                      offset: 'bottom-in-view',
                    });
                  });

                });
              });

            </script>

            <div class="certif">
              <ul>
                <li>
                  <img src="/marketing/images/c_01.png"><br>
                  <span>기업부설창작연구소 인정서</span>
                </li>
                <li>
                  <img src="/marketing/images/c_01.png"><br>
                  <span>벤처기업확인서</span>
                </li>
                <li>
                  <img src="/marketing/images/c_01.png"><br>
                  <span>직접생산 확인증명서</span>
                </li>
              </ul>
            </div>
          </div><!--sec4 끝-->

          <div class="sec5">
            <h1 class="sec_tit">광고 효율 극대화 프로세스</h1>
            <h5>프로세스에 기반한 안정적인 성과를 도출합니다.</h5>
            <p class="Mnone"><img src="/marketing/images/process.png" data-aos="zoom-in"></p>
            <p class="Pcnone Tnone"><img src="/marketing/images/m_process.png" data-aos="zoom-in"></p>
            <p class="Pcnone Tnone"><img src="/marketing/images/m_process2.png" data-aos="zoom-in"></p>
            <h3>업종, 시즈널, 이슈 등을 파악하여, 최적화된 결과를 도출하는<br>
              제이와이네트워크의 8단계 마케팅 프로세스입니다.  </h3>
            <div class="process">
              <img src="/marketing/images/process_2.png" data-aos="zoom-in">
            </div>
          </div><!--sec5 끝-->

          <div class="sec6">
            <div class="sec6_tit" data-aos="zoom-in">
              <span style="">매체분석, 예상경쟁사분석, 잠재소비자분석, 레퍼런스비교 등<br><strong>15가지 이상의 전략분석도구</strong></span>

            </div>
            <img src="/marketing/images/process_3.png" data-aos="zoom-in">
            <p class="sec6_p">다양한 분석도구를 활용한 맞춤 전략 제공</p>
            <div class="sec6_btn"><a href="http://naver.me/5IlQgn68" target="_blank">컨설팅 요청하기</a></div>
          </div><!--sec6 끝-->
        </div><!--sec_area 끝-->

        <div class="sec7">
          <img src="/marketing/images/process_4.png" data-aos="zoom-in" class="Mnone">
          <img src="/marketing/images/m_process3.png" data-aos="zoom-in" class="Pcnone Tnone">
        </div><!--sec7 끝-->
        <!--
        <div class="sec8">
          <h1 class="sec_tit" style="margin-top: 0px;">PATNERS</h1>
          <img src="/marketing/images/partners.png" data-aos="zoom-in">
        </div> //sec8 끝
-->
        <div class="sec9">
          <h1 class="sec9_tit" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            제이와이네트워크,<br>
            체계적 전문화를 이루어 내다.
          </h1>
          <div class="slick">
            <div><a href="https://jynetwork.net/marketing" target="_blank"><img src="/marketing/images/1.jpg"></a></div>
            <div><a href="https://jy-media.co.kr" target="_blank"><img src="/marketing/images/2.jpg"></a></div>
            <div><a href="https://jy-design.co.kr" target="_blank"><img src="/marketing/images/3.jpg"></a></div>
          </div>
          <div class="slick">
            <div><a href="https://jynetwork.net/test" target="_blank"><img src="/marketing/images/4.jpg"></a></div>
            <div><a href="https://jym.co.kr" target="_blank"><img src="/marketing/images/5.jpg"></a></div>
            <div><a href="https://jynetwork.net" target="_blank"><img src="/marketing/images/6.jpg"></a></div>
          </div>
        </div><!--sec9 끝-->

        <div class="sec10">
          <h1 class="sec_tit" style="color:#111" id="contact">
            Ask Us<br>
            <span class="sec10_span">양식에 맞춰 문의를 남겨주시면, 확인 후 빠르게 연락드리겠습니다.<br>
              접수된 문의는 순차적으로 처리 됩니다 :)</span>
          </h1>
          <div class="contact_us_box">
            <ul>
              <li>
                <p>* 표시는 필수 항목입니다.</p>
              </li>
              <li>
                <form method="post" id="insertFrm" enctype="multipart/form-data" action="sendMail.php">
                  <input type="hidden" name="qnaKnd" class="termshidden" id="qnaKnd" value="">
                  <div class="contect_content">
                    <p class="t_p">문의종류 <span>*</span></p>
                    <div class="radio_box" id="radio_box">
                      <label for="radio_g">
                        <input type="radio" name="radio" id="radio_g" value="일반" checked>
                        <p>일반문의</p>
                      </label>
                      <label for="radio_e">
                        <input type="radio" name="radio" id="radio_e" value="견적">
                        <p>견적문의</p>
                      </label>
                      <label for="radio_etc">
                        <input type="radio" name="radio" id="radio_etc" value="기타">
                        <p>기타</p>
                      </label>
                    </div><!--radio_box 끝-->
                  </div><!--contect_content 끝-->
              </li>
              <li>
                <div class="contect_content">
                  <p class="t_p">제목 <span>*</span></p>
                  <input type="text" name="subject" id="subject" maxlength="249">
                </div>
              </li>
              <li>
                <div class="input_box2">
                  <div class="c_input">
                    <p class="t_p">이름 <span>*</span></p>
                    <input type="text" name="first_name" id="first_name">
                  </div>
                  <div class="c_input">
                    <p class="t_p">기업명/직책 <span>*</span></p>
                    <input type="text" name="companyPosition" id="companyPosition" placeholder="ex) 제이와이네트워크 / 팀장">
                  </div>
                </div><!--input_box2 끝-->
              </li>
              <li>
                <div class="input_box2">
                  <div class="c_input">
                    <p class="t_p">연락처 <span>*</span></p>
                    <div class="phone_input" id="phone_input">
                      <div class="p_select">
                        <select name="p1" id="p1">
                          <option value="010">010</option>
                          <option value="011">011</option>
                          <option value="016">016</option>
                          <option value="017">017</option>
                        </select>
                      </div><!--p_select 끝-->
                      -
                      <input type="text" name="p2" id="p2" maxlength="4" value="">
                      -
                      <input type="text" name="p3" id="p3" maxlength="4" value="">
                      <input type="hidden" name="telephone" id="telephone" value="">
                    </div><!--phone_input 끝-->
                  </div><!--c_input 끝-->
                  <div class="c_input">
                    <p class="t_p">이메일 <span>*</span></p>
                    <input type="text" name="email" id="email" maxlength="249">
                  </div>
                </div><!--input_box2 끝-->
              </li>
              <li>
                <div class="contect_content">
                  <p class="t_p">내용 <span>*</span></p>
                  <textarea name="comments" id="comments"></textarea>
                </div>
              </li>
              <!--
              <li>
                <div class="input_box2">
                  <div class="c_input">
                    <p class="t_p">첨부파일 : </p>
                    <div class="file_box">
                      <div class="file">
                      	<label for="file" style="cursor:pointer">
                        <input type="file" name="upfile" id="file" style="display:none;">
                        파일선택
                      </div>
                      <p id="txt1">선택된 파일 없음</p>
                    </div>
                  </div>
                </div>
              </li> //-->
            </ul>

            <div class="agree_box">
              <p>개인정보 수집동의</p>
              <div class="agree_con">
                개인정보 이용약관<br>
                ‘주식회사 제이와이네트워크’는 (이하 ‘회사’) 회사가 운영하는 서비스 상품에 대하여
                이용하는 이용자님들의 개인정보를 중요시하며, 아래와 같은 개인정보취급방침을 가지고 있습니다.<br>
                <br>
                이 개인정보 취금방침은 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, 개인정보 보호법’ 및 ‘전자 등에서의 소비자
                보호에 관한 법률’ 등 개인정보와 관련된 법령 상의 개인정보보호규정과 방송통신위원회 및 안정행정부 등 관계부처가
                제정한 가이드라인을 준수하고 있습니다. 본 개인정보취급방침은 당사의 서비스에 적용되며 다음과 같은 내용을 담고
                있습니다.<br>
                <br>
                회사는 이용자의 개인정보를 수집/이용/제공하는 경우 반드시 사전에 이용자에게 해당 내용을 알리고 동의 절차를 거치며,
                이용자가 동의하지 않을 경우에는 이용자의 개인정보를 수집/이용/제공하지 않습니다.<br>
                단, 동의를 거부하는 경우 서비스의 전부 또는 일부 이용이 제한될 수 있습니다.<br>
                회사는 개인정보 취급방침을 통해 이용자가 제공하는 개인정보가 어떠한 용도의 방식으로 이용되고 있으며,
                적극적으로 보호하기 위해 항상 노력하고 있음을 알려드리고자 합니다.<br>
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
                - 주식회사 제이와이네트워크 beatace@naver.com로 이메일 문의하여 주십시오.
              </div>
              <div class="check_section">
                <input type="radio" id="chk_info" name="chk_info" value="CSS" checked="checked">
                <p>[필수] 개인정보 취급 방침에 동의</p>
                <input type="radio" id="chk_m" name="chk_m" value="Y">
                <p>[선택] 마케팅 이용에 동의</p>
              </div>
            </div><!--agree_box 끝-->

            <div class="inquiry_btn">
              <button id="sendBtn" type="button">문의하기</button>
            </div>
            </form>
          </div><!--contact_us_box 끝-->
        </div><!--sec10 끝-->

      </div><!--content 끝-->

      <%@ include file="footer.jsp" %>

  </div>
</body>
<script>
  $("#sendBtn").click(function () {

    if ($("#radio_g").is(":checked")) {
      $("#qnaKnd").val($("#radio_g").val());
    } else if ($("#radio_e").is(":checked")) {
      $("#qnaKnd").val($("#radio_e").val());
    } else {
      $("#qnaKnd").val($("#radio_etc").val());
    }


    var qnaKnd = $("#qnaKnd").val();
    var subject = $("#subject").val();

    if (subject == '' || subject == null) {
      alert("제목을 입력해 주세요.");
      return false;
    }

    var first_name = $("#first_name").val();

    if (first_name == '' || first_name == null) {
      alert("이름을 입력해 주세요.");
      return false;
    }

    var companyPosition = $("#companyPosition").val();

    if (companyPosition == '' || companyPosition == null) {
      alert("기업명/직책을 입력해 주세요.");
      return false;
    }

    var p1 = $("#p1").val();
    var p2 = $("#p2").val();
    var p3 = $("#p3").val();

    if (p2 == '') {

      alert("연락처를 입력해 주세요.");
      return false;

    }

    if (p3 == '') {

      alert("연락처를 입력해 주세요.");
      return false;

    }

    var telephone = p1 + "-" + p2 + "-" + p3;
    $("#telephone").val(telephone);

    if (telephone == '' || telephone == null) {
      alert("연락처를 입력해 주세요.");
      return false;
    }

    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var email = $("#email").val();

    if (email.match(regExp) == null) {
      alert("이메일을 올바르게 입력해 주세요.");
      return false;
    }

    var comments = $("#comments").val();

    if (comments == '' || comments == null) {
      alert("내용을 입력해 주세요.");
      return false;
    }

    if (!$("#chk_info").is(":checked")) {

      alert("개인정보 취급 방침에 동의해 주세요.");
      return false;

    }

    document.getElementById('insertFrm').submit();

  });
</script>

<script>
  $(document).ready(function () {
    $('.slick').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    //파일 변경 스크립트
    $("#file").change(function () {

      try {

        var fileInput = document.getElementById("file");

        var files = fileInput.files;

        var fileSize = files[0].size;
        var fileName = files[0].name;

        $("#txt1").text(fileName);

      } catch (e) {

        $("#txt1").text('선택된 파일 없음');

      }

    });

    $("#sendBtn").click(function () {

      if ($("#radio_g").is(":checked")) {
        $("#qnaKnd").val($("#radio_g").val());
      } else if ($("#radio_e").is(":checked")) {
        $("#qnaKnd").val($("#radio_e").val());
      } else {
        $("#qnaKnd").val($("#radio_etc").val());
      }


      var qnaKnd = $("#qnaKnd").val();
      var subject = $("#subject").val();

      if (subject == '' || subject == null) {
        alert("제목을 입력해 주세요.");
        return false;
      }

      var first_name = $("#first_name").val();

      if (first_name == '' || first_name == null) {
        alert("이름을 입력해 주세요.");
        return false;
      }

      var companyPosition = $("#companyPosition").val();

      if (companyPosition == '' || companyPosition == null) {
        alert("기업명/직책을 입력해 주세요.");
        return false;
      }

      var p1 = $("#p1").val();
      var p2 = $("#p2").val();
      var p3 = $("#p3").val();

      if (p2 == '') {

        alert("연락처를 입력해 주세요.");
        return false;

      }

      if (p3 == '') {

        alert("연락처를 입력해 주세요.");
        return false;

      }

      var telephone = p1 + "-" + p2 + "-" + p3;
      $("#telephone").val(telephone);

      if (telephone == '' || telephone == null) {
        alert("연락처를 입력해 주세요.");
        return false;
      }

      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      var email = $("#email").val();

      if (email.match(regExp) == null) {
        alert("이메일을 올바르게 입력해 주세요.");
        return false;
      }

      var comments = $("#comments").val();

      if (comments == '' || comments == null) {
        alert("내용을 입력해 주세요.");
        return false;
      }

      if (!$("#chk_info").is(":checked")) {

        alert("개인정보 취급 방침에 동의해 주세요.");
        return false;

      }

      document.getElementById('insertFrm').submit();

    });
  });
</script>
<script>
  AOS.init();
</script>

</html>