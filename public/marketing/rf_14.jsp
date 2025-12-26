<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">

  <head>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <title>제이와이네트워크 마케팅 - 전문가의 컨설팅</title>

    <!--css-->
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/sub.css">
    <!--script-->
    <script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="js/header.js"></script>
    <!--slick-->
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/slick.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>

  </head>

  <body>
    <div class="wrap">

      <%@ include file="header.jsp"%>

      <div class="sub_banner">
        <h1>REFERANCE</h1>
      </div>

      <div class="sub_area rf_div">

        <h1 class="rf_h1">REFERANCE</h1>
        <h5 class="rf_h5"><b>1148</b>PROJECT</h5>

        <div class="rf_con">
          <div class="rf_logo"><img src="images/logo_rf14.jpg"></div>
          <div class="rf_top">
            <img src="images/img_rf14.jpg">
            <div class="rf_name">
              BODYFRIEND
            </div>
          </div>
          <div class="rf_mid">
            <h3>[업종]</h3>
            <p class="mid_p">의료기기</p>
            <h3>[업체명]</h3>
            <p>바디프렌드</p>
          </div>
          <div class="rf_bot">
            <div class="rf_left">
              <div class="slick">
                <div><img src="images/rf14-1.jpg"></div>
                <div><img src="images/rf14-2.jpg"></div>
              </div>
            </div>
            <div class="rf_right">
              <table>
                <tr>
                  <td><img src="images/ic_blog.jpg"></td>
                  <td>Viral / Blog</td>
                </tr>
                <tr>
                  <td><img src="images/ic_news.jpg"></td>
                  <td>News</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

      </div><!--sub_area 끝-->

      <%@ include file="footer.jsp"%>

      <script>
        $(document).ready(function(){
          $('.slick').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 200,
            slidesToShow: 1,
            adaptiveHeight: true
          });
        });
      </script>

    </div>
  </body>

</html>
