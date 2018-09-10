$(document).ready(function () {
    // 본문 내용이 표시되는 영역에 전부 적용한다.
    var $codes = $('pre[class^="lang-"]');
    var i, $pre;

    for (i = 0; i < $codes.length; i++) {
        $pre = $($codes[i]);
        $pre.addClass('prettyprint linenums');
    }

    PR.prettyPrint();
});