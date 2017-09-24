document.addEventListener("DOMContentLoaded", function(event) {
    // fill timeline with section headers
    var $sectionHeaders = $('.post-content h2');
    $sectionHeaders.each(function (index, element) {
        $('ul.cbp_tm-timeline').append(function (index, html) {
            var htmlString = "";
            htmlString += "<li><img class='cbp_tm-icon-timeline-pointer' src='/user/themes/longread/images/timeline-pointer-white.svg' alt=''><div class='cbp_tm-text'>"
            htmlString += "<h2 class='cbp_tm-label f-uni-grotesk-bold'><a class='sethash' href='#"+$(element).attr('id')+"'>"+$(element).text()+"</a></h2>"
            if ($(element).next('.title-date')) {
                htmlString += "<time class='cbp_tm-time' datetime='1938-10-06'>"+ $(element).next('.title-date').text() +"</time>"
            }
            htmlString += "</div></li>"
            return htmlString;
        });
    });

    // insert class to headings that need vertical offset to account for fixed pos nav bar
    $('.chapter-content h2').addClass('offset-link');
    
    UIkit.offcanvas.onShow = function () {
        setTimelineBottom();
    };

    // shorten vertical line to stop at last icon
    function setTimelineBottom() {
        var lastHeight = $(".cbp_tm-text").last().outerHeight() - 10;
        // add to last styleSheet which is on the same domain, so it gives no SecurityError
        addCSSRule(document.styleSheets[document.styleSheets.length-1], '.cbp_tm-timeline::before', 'bottom: '+lastHeight+'px !important', 0);
    }
});

function addCSSRule(sheet, selector, rules, index) {
    if("insertRule" in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
    }
    else if("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
    }
}