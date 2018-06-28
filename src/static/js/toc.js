$(document).ready(function() {
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
                '  <span class="collapse-icon fa fa-chevron-down fa-fw mr-2"></span>' +
                '  <span class="card-title">Table of contents</span>' +
                '</div>' +
                '<div id="collapseOne" class="collapse hidden" aria-labelledby="headingOne" data-parent="#TOC">' + 
                '  <div class="card-body">' +
                $(this).html() +
                '  </div>' +
                '</div>';
            return html;
        });

    // Add up icon for collapse element which is open by default
    $('.collapse.in')
        .each(function() {
            $(this).siblings('.card-header').find('.collapse-icon')
                .addClass('fa-chevron-up')
                .removeClass('fa-chevron-down');
        });

    // Toggle down up icon on show hide of collapse element
    $('.collapse')
        .on('show.bs.collapse', function() {
            $(this).parent().find('.collapse-icon')
                .removeClass('fa-chevron-down')
                .addClass('fa-chevron-up');
        })
        .on('hide.bs.collapse', function() {
            $(this).parent().find('.collapse-icon')
                .removeClass('fa-chevron-up')
                .addClass('fa-chevron-down');
        });
});
