(function () {
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function buildPrivacyTermsHtml(companyName) {
        var safeCompanyName = escapeHtml(companyName);

        return [
            '<div class="privacy-terms">',
            '  <p>' + safeCompanyName + '은 고객님의 문의 요청에 정확하고 신속한 답변을 드리기 위해 필요한 최소한의 개인정보를 수집하고 있습니다.<br>이에 개인정보의 수집 및 이용에 관하여 아래와 같이 고지하오니 충분히 읽어보신 후 동의하여 주시기 바랍니다.</p>',
            '  <p><strong>1. 수집하는 개인정보의 항목</strong><br>– 필수항목 : 회사명, 이메일, 문의 내용<br>서비스 제공에 있어 담당자와의 원활한 소통, 데이터와 문서 전달을 위해 수집합니다.<br>수집된 개인정보 이용 : ' + safeCompanyName + '의 서비스를 통해 의뢰한 제작내용에 대해서만 안내 및 문의에 활용됩니다.</p>',
            '  <p><strong>2. 개인정보 보유 및 이용기간</strong><br>이용자의 개인정보 삭제요청이 없을 경우 개인정보 보유기간은 3년으로 유지합니다.<br>' + safeCompanyName + '은 의뢰자의 개인정보를 원칙적으로 제3자나 외부에 제공하지 않습니다.</p>',
            '</div>'
        ].join('');
    }

    function renderPrivacyTerms(root) {
        var elements = (root || document).querySelectorAll('[data-privacy-terms]');

        Array.prototype.forEach.call(elements, function (element) {
            var companyName = element.getAttribute('data-company-name') || '';

            if (!companyName) {
                return;
            }

            element.innerHTML = buildPrivacyTermsHtml(companyName);
        });
    }

    window.JYPrivacyTerms = {
        buildPrivacyTermsHtml: buildPrivacyTermsHtml,
        render: renderPrivacyTerms
    };

    document.addEventListener('DOMContentLoaded', function () {
        renderPrivacyTerms(document);
    });
})();
