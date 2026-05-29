
import os
import re

# Configuration
MARKETING_DIR = '/Users/a11/Desktop/디자인팀/02_어워즈/00_홈페이지/jy-brand-awards/public/marketing'

# Header and Footer Templates (Extracted and slightly modified for generic use)
# Note: We must be careful to include the specific active state logic if we can, but static is acceptable for now.
# The user wants "REFERANCE" to be active for rf_*.jsp pages, which matches `referance.html`.

HEADER_TEMPLATE = """
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <title>제이와이네트워크 마케팅 - 전문가의 컨설팅</title>

  <!-- CSS -->
  <link href="/marketing/css/normalize.css" rel="stylesheet" type="text/css">
  <link href="/marketing/css/webflow.css" rel="stylesheet" type="text/css">
  <link href="/marketing/css/saideubaeneo.webflow.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="/marketing/css/common.css">
  <link rel="stylesheet" href="/marketing/css/header.css">
  <link rel="stylesheet" href="/marketing/css/footer.css">
  <link rel="stylesheet" href="/marketing/css/sub.css">
  
  <!-- Slick -->
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="/marketing/js/slick.min.js"></script>
  <link rel="stylesheet" type="text/css" href="/marketing/css/slick.css"/>
  <link rel="stylesheet" type="text/css" href="/marketing/css/slick-theme.css"/>

  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="/marketing/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="/marketing/images/webclip.png" rel="apple-touch-icon">

  <!-- Scripts -->
  <script type="text/javascript" src="/marketing/js/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="/marketing/js/header.js"></script>
  
  <!-- Google Tag Manager -->
  <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TSKLCZP');</script>

  <!-- AceCounter -->
  <script language='javascript'>
    var _AceGID = (function () { var Inf = ['gtp11.acecounter.com', '8080', 'AH3A45624890670', 'AW', '0', 'NaPm,Ncisy', 'ALL', '0']; var _CI = (!_AceGID) ? [] : _AceGID.val; var _N = 0; var _T = new Image(0, 0); if (_CI.join('.').indexOf(Inf[3]) < 0) { _T.src = "https://" + Inf[0] + '/?cookie'; _CI.push(Inf); _N = _CI.length; } return { o: _N, val: _CI }; })();
    var _AceCounter = (function () { var G = _AceGID; var _sc = document.createElement('script'); var _sm = document.getElementsByTagName('script')[0]; if (G.o != 0) { var _A = G.val[G.o - 1]; var _G = (_A[0]).substr(0, _A[0].indexOf('.')); var _C = (_A[7] != '0') ? (_A[2]) : _A[3]; var _U = (_A[5]).replace(/\,/g, '_'); _sc.src = 'https:' + '//cr.acecounter.com/Web/AceCounter_' + _C + '.js?gc=' + _A[2] + '&py=' + _A[4] + '&gd=' + _G + '&gp=' + _A[1] + '&up=' + _U + '&rd=' + (new Date().getTime()); _sm.parentNode.insertBefore(_sc, _sm); return _sc.src; } })();
  </script>

  <style>
        .modal-bg {display:none;width:100%;height:100%;position:fixed;top:0;left:0;right:0;background: rgba(0, 0, 0, 0.6);z-index:999;}
        .modal-wrap {display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:#fff;z-index:1000; overflow-y:scroll; padding: 10px; border-radius:10px;}
  </style>
</head>

<body>
  <div class="wrap">
      <div class="hd_wrap">
      <div class="topnav" id="myTopnav">
        <a href="index.html"><img src="/marketing/images/logo.png"></a>
        <a href="about.html" class="menu_min menu_TM">ABOUT US</a>
        <a href="referance.html" class="menu_TM active">REFERANCE</a>
        <a href="index.html#contact" class="menu_TM">CONTACT</a>
        <a href="file/jynetwork_company.pdf" target="_blank" class="menu_TM menu_cp">회사소개서</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"><img src="/marketing/images/menu.png"></a>
      </div>
    </div>
"""

FOOTER_TEMPLATE = """
    <div class="ft_div">
        <div class="ft_wrap">
        <b>제이와이네트워크 바이럴 마케팅</b> | (주)제이와이네트워크 | 대표: 김재훈 | 사업자등록번호: 172-87-00908<br>
        주소: 서울특별시 강서구 공항대로 212, 문영퀸즈파크11차 B동 1111~1113호 | <b>TEL: 02-6952-6443</b> | FAX: 02-866-7761 | Email: dellycoo@jynetwork.co.kr
        <br><span>copyright ⓒ 2022 JYNETWORK ALL RIGHTS RESERVED</span>
        <div class="ft_ic">
            <ul>
            <li><a href="https://www.facebook.com/JYNETWORK1" target="_blank"><img src="/marketing/images/ic_fb.png"></a></li>
            <li><a href="https://www.instagram.com/jy_network/?hl=ko" target="_blank"><img src="/marketing/images/ic_inst.png"></a></li>
            <li><a href="https://pf.kakao.com/_xlqakC" target="_blank"><img src="/marketing/images/ic_talk.png"></a></li>
            <li><a href="https://blog.naver.com/jynetwork_" target="_blank"><img src="/marketing/images/ic_blog.png"></a></li>
            <li><a href="https://www.youtube.com/channel/UCwub2CMPjXjF6ZtI49YbIEQ" target="_blank"><img src="/marketing/images/ic_you.png"></a></li>
            </ul>
        </div>
        </div>
    </div>
    
    <script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
    <script type="text/javascript">
    if (!wcs_add) var wcs_add={};
    wcs_add["wa"] = "s_3ee484cf695e";
    if (!_nasa) var _nasa={};
    if(window.wcs){
    wcs.inflow("jynetwork.net");
    wcs_do(_nasa);
    }
    </script>
    
      <!-- Modal -->
      <div class="modal-bg" onClick="javascript:popClose();"></div>
      <div class="modal-wrap">
          <h3 style="float:left;">개인정보 이용약관</h3><button class="modal-close" onClick="javascript:popClose();" style="float:right; background: #000; padding: 5px 10px; color: #fff; border-radius: 23px;">Close</button>
          <p style="float:left;">‘주식회사 제이와이네트워크’는...</p>
      </div>

     <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=646b08af3f5cc176af48ce90" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="/marketing/js/webflow.js" type="text/javascript"></script>
    <script>
    function popOpen() {
        var modalPop = $('.modal-wrap');
        var modalBg = $('.modal-bg');
        modalBg.fadeIn();
        modalPop.fadeIn();
    }
    function popClose() {
        var modalPop = $('.modal-wrap');
        var modalBg = $('.modal-bg');
        $(modalPop).fadeOut();
        $(modalBg).fadeOut();
    }
    </script>
  </div>
</body>
</html>
"""

def convert_file(filename):
    filepath = os.path.join(MARKETING_DIR, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the main content (between header include and footer include)
    # The structure in rf_1.jsp is:
    # ... head ... include header.jsp ... content ... include footer.jsp ... end
    # We want to replace everything BEFORE the content with HEADER_TEMPLATE and AFTER with FOOTER_TEMPLATE
    # But note that rf_1.jsp has some specific slick scripts in head that might be unique?
    # Actually, looking at rf_1.jsp, it imports slick css/js in head.
    # My HEADER_TEMPLATE already includes slick.
    
    # Let's find the content between `<%@ include file="header.jsp"%>` and `<%@ include file="footer.jsp"%>`
    start_marker = '<%@ include file="header.jsp"%>'
    end_marker = '<%@ include file="footer.jsp"%>'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    if start_idx == -1 or end_idx == -1:
        print(f"Skipping {filename}: Markers not found")
        return

    body_content = content[start_idx + len(start_marker):end_idx]
    
    # Process body content: fix paths
    body_content = body_content.replace('src="images/', 'src="/marketing/images/')
    body_content = body_content.replace('src="js/', 'src="/marketing/js/')
    body_content = body_content.replace('href="css/', 'href="/marketing/css/')
    
    # Also check if there's any script after footer.jsp in the original file
    # In rf_1.jsp, there is a $(document).ready for slick AFTER footer include.
    # We should grab that too.
    after_footer = content[end_idx + len(end_marker):]
    
    # Remove closing </body></html> from after_footer if present, as FOOTER_TEMPLATE has it? 
    # Actually FOOTER_TEMPLATE ends with </body></html>.
    # So we should inject the extra scripts BEFORE the closing body tag of FOOTER_TEMPLATE.
    
    # Let's extract scripts from after_footer
    # Usually it's just the slick init script.
    
    # Clean up after_footer (remove closing tags)
    after_footer = after_footer.replace('</body>', '').replace('</html>', '').strip()
    
    # Construct new content
    # We inject body_content + after_footer inside the body of the new page.
    # But wait, HEADER_TEMPLATE starts the body and <div class="wrap">.
    # FOOTER_TEMPLATE closes </div> and body.
    
    # We need to insert body_content right after header.
    # Then append FOOTER_TEMPLATE.
    # But merge after_footer scripts into the end (before body close).
    
    footer_part1 = FOOTER_TEMPLATE.replace('</body>\n</html>', '')
    
    new_content = HEADER_TEMPLATE + body_content + footer_part1 + after_footer + '\n</body>\n</html>'
    
    new_filename = filename.replace('.jsp', '.html')
    new_filepath = os.path.join(MARKETING_DIR, new_filename)
    
    with open(new_filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Converted {filename} -> {new_filename}")

def main():
    files = [f for f in os.listdir(MARKETING_DIR) if f.startswith('rf_') and f.endswith('.jsp')]
    for f in files:
        convert_file(f)

if __name__ == '__main__':
    main()
