// Hide uninitialized element
$('<style>')
    .attr('type', 'text/css')
    .html('#TOC { display.none; }')
    .appendTo('head');

$(document).ready(function() {
    // Initialize table of contents
    $('#TOC')
        .addClass('card')
        .addClass('my-3')
        .each(function() {
            $(this).find('ul')
                .addClass('my-0');
        })
        .html(function() {
            html =
                '<div id="headingOne" class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="TOC-body">' +
                '  <span class="collapse-icon fa fa-plus fa-fw mr-2"></span>' +
                '  <span class="card-title">Table of contents</span>' +
                '</div>' +
                '<div id="collapseOne" class="collapse hidden" aria-labelledby="headingOne" data-parent="#TOC">' + 
                '  <div class="card-body">' +
                $(this).html() +
                '  </div>' +
                '</div>';
            return html;
        })
        .css('display', 'block');

    // Add minus icon for collapse element which is open by default
    $('.collapse.in')
        .each(function() {
            $(this).siblings('.card-header').find('.collapse-icon')
                .addClass('fa-minus')
                .removeClass('fa-plus');
        });

    // Toggle plus minus icon on show hide of collapse element
    $('.collapse')
        .on('show.bs.collapse', function() {
            $(this).parent().find('.collapse-icon')
                .removeClass('fa-plus')
                .addClass('fa-minus');
        })
        .on('hide.bs.collapse', function() {
            $(this).parent().find('.collapse-icon')
                .removeClass('fa-minus')
                .addClass('fa-plus');
        });
});
