jQuery.fn.highlightPattern = function (patt) {
    // check if patt starts or ends with non-word character
    // and set regex boundary accordingly.
    var start = '\\b(';
    var end = ')\\b';
    if (/\W/.test(patt.charAt(0))) {
        var start = '\(?=\\W\)(';
    };
    if (/\W/.test(patt.charAt(patt.length - 1))) {
        var end = ')\(?!\\w\)';
    }
    // escape regex metacharacters that may be in the patt
    var epatt = patt.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    // patt is a space separated list of strings - we want to highlight
    // an occurrence of any of these strings as a separate word.
    var regex = new RegExp(start + epatt.replace(/ /g, '| ') + end, 'gi');
    return this.each(function () {
        this.innerHTML = this.innerHTML.replace(regex,
            '<span class="text-info font-weight-bold">' + '$1' + '</span>');
    });
};

function toggleMatches(e) {
    var pattern = $('#pattern').text();
    var matches = e.parent().find('pre.matches')
    matches.slideToggle(300);
    matches.highlightPattern(pattern);
    var chevron = e.parent().find('i.chevron')
    if (chevron.hasClass('fa-chevron-down')) {
        chevron
            .removeClass('fa-chevron-down')
            .addClass('fa-chevron-up');
    } else {
        chevron
            .removeClass('fa-chevron-up')
            .addClass('fa-chevron-down');
    };
}

$(function() {
    $('span.head').attr('onClick', 'toggleMatches($(this));');
    $('pre.matches').hide();
});
