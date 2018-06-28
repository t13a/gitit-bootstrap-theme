$(document).ready(function() {
    $('#navbar-body-tabs')
        .addClass('order-first')
        .each(function() {
            $(this).find('ul')
                .addClass('nav')
                .addClass('nav-pills')
                .addClass('flex-column')
                .addClass('flex-lg-row')
                .addClass('mx-auto');
            $(this).find('ul li')
                .addClass('nav-item');
            $(this).find('ul li a')
                .addClass('nav-link')
                .css('text-transform', 'capitalize')
                .each(function() {
                    switch ($(this).text()) {
                        case 'diff':
                            $(this).prepend('<i class="fa fa-exchange-alt fa-fw mr-2"></i>');
                            break;
                        case 'view':
                            $(this).prepend('<i class="fa fa-glasses fa-fw mr-2"></i>');
                            break;
                        case 'page':
                            $(this).prepend('<i class="fa fa-glasses fa-fw mr-2"></i>');
                            break;
                        case 'edit':
                            $(this).prepend('<i class="fa fa-edit fa-fw mr-2"></i>');
                            break;
                        case 'revert':
                            $(this).prepend('<i class="fa fa-edit fa-fw mr-2"></i>');
                            break;
                        case 'history':
                            $(this).prepend('<i class="fa fa-history fa-fw mr-2"></i>');
                            break;
                        case 'discuss':
                            $(this).prepend('<i class="fa fa-comments fa-fw mr-2"></i>');
                            break;
                    }
                });
            $(this).find('ul li.selected a')
                .addClass('active')
                .addClass('bg-secondary');
            $(this).find('ul li:not(.selected) a')
                .addClass('text-secondary');
        });
});
