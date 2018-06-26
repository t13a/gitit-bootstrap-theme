// Hide uninitialized elements
$('<style>')
    .attr('type', 'text/css')
    .html(
        '#navbar-body-tabs,' +
        '#TOC,' +
        '#categoryList {' +
        '    display:none;' +
        '}'
    )
    .appendTo('head');

// Initialize all
$(document).ready(function() {

    var path = window.location.pathname;

    // Tabs
    $('#navbar-body-tabs')
        .each(function() {
            $(this).find('ul')
                .addClass('order-first')
                .addClass('navbar-nav')
                .addClass('mr-auto');
            $(this).find('ul li')
                .addClass('nav-item')
                .addClass('mr-lg-3');
            $(this).find('ul li a')
                .addClass('nav-link')
                .each(function() {
                    switch ($(this).text()) {
                        case 'view':
                            $(this).html('<i class="fa fa-glasses fa-fw mr-2"></i>View');
                            break;
                        case 'page':
                            $(this).html('<i class="fa fa-glasses fa-fw mr-2"></i>Page');
                            break;
                        case 'edit':
                            $(this).html('<i class="fa fa-edit fa-fw mr-2"></i>Edit');
                            break;
                        case 'revert':
                            $(this).html('<i class="fa fa-edit fa-fw mr-2"></i>Revert');
                            break;
                        case 'history':
                            $(this).html('<i class="fa fa-history fa-fw mr-2"></i>History');
                            break;
                        case 'discuss':
                            $(this).html('<i class="fa fa-comments fa-fw mr-2"></i>Discuss');
                            break;
                    }
                });
            $(this).find('ul li.selected a')
                .addClass('active');
        })
        .css('display', 'block');

    // Table of contents
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

    // Category list
    $('#categoryList')
        .each(function() {
            $(this).find('ul')
                .addClass('list-inline');
            $(this).find('ul li')
                .addClass('list-inline-item');
            $(this).find('ul li a')
                .addClass('badge')
                .addClass('badge-primary')
                .addClass('mt-3')
                .addClass('p-2')
                .html(function() {
                    return '<i class="fa fa-tag fa-fw mr-2"></i>' +
                        '<span>' + $(this).html() + '</span>';
                });
        })
        .css('display', 'block');

    // Login form
    $('#loginForm')
        .addClass('jumbotron')
        .each(function() {
            $(this).find('fieldset')
                .addClass('form-group')
                .after($(this).find('input[name="login"]'));
            $(this).find('label[for="username"]')
                .addClass('col-form-label');
            $(this).find('input[name="username"]')
                .addClass('form-control')
                .attr('placeholder', 'User name');
            $(this).find('label[for="password"]')
                .addClass('col-form-label');
            $(this).find('input[name="password"]')
                .addClass('form-control')
                .attr('placeholder', 'Password');
            $(this).find('input[name="login"]')
                .addClass('btn')
                .addClass('btn-primary');
        });

    // Edit form
    $('#editform')
        .addClass('form-group')
        .each(function() {
            $(this).find('textarea[name="editedText"]')
                .addClass('form-control')
                .attr('rows', 10);
            $(this).find('label[for="logMsg"]')
                .addClass('col-form-label')
                .text(function() {
                    return $(this).text().replace(/:/g, '');
                });
            $(this).find('input[name="logMsg"]')
                .addClass('form-control');
            $(this).find('input[name="update"]')
                .addClass('btn')
                .addClass('btn-primary')
                .addClass('mr-3')
                .addClass('mt-3');
            $(this).find('input[name="cancel"]')
                .addClass('btn')
                .addClass('btn-secondary')
                .addClass('mr-3')
                .addClass('mt-3');
            $(this).find('br')
                .remove();
        })
        .html(function() {
            return $(this).html().replace(/&nbsp;/g, '');
        });

    // Delete form
    $('#content > form > input[name="filetodelete"]').parent()
        .addClass('jumbotron')
        .each(function() {
            $(this).find('p')
                .addClass('lead');
            $(this).find('input[name="confirm"]')
                .addClass('btn')
                .addClass('btn-danger')
                .addClass('mr-3')
                .addClass('mt-3');
            $(this).find('input[name="cancel"]')
                .addClass('btn')
                .addClass('btn-secondary')
                .addClass('mr-3')
                .addClass('mt-3');
        });

    // Markup help
    $('#markuphelp')
        .addClass('card')
        .addClass('mb-3')
        .each(function() {
            $(this).find('pre')
                .addClass('card-header')
                .addClass('p-3')
                .addClass('bg-secondary')
                .addClass('text-white');
            $(this).find('p')
                .addClass('card-body')
                .addClass('m-0');
        });

    // Export box
    $('#exportbox')
        .addClass('form-group')
        .addClass('input-group')
        .addClass('mt-3')
        .each(function() {
            $(this).find('select')
                .addClass('form-control')
                .addClass('custom-select');
            $(this).find('input')
                .addClass('input-group-text').
                wrap('<div class="input-group-append"></div>');
        })
        .html(function() {
            return $(this).html().replace(/&nbsp;/g, '');
        });

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

    // Path specific contents
    if (path == '/') {
        // Home
    } else if (path == '/_categories') {
        // Categories
        $('#content > ul')
            .addClass('list-inline')        
            .each(function() {
                $(this).find('li')
                    .addClass('list-inline-item');
                $(this).find('li a')
                    .addClass('badge')
                    .addClass('badge-primary')
                    .addClass('mt-3')
                    .addClass('p-2')
                    .html(function() {
                        return '<i class="fa fa-tag fa-fw mr-2"></i>' +
                            '<span>' + $(this).html() + '</span>';
                    });
            });
        /*
        $('#content > ul')
            .addClass('list-unstyled')
            .each(function() {
                $(this).find('li')
                    .addClass('clearfix')
                    .addClass('py-2')
                    .addClass('border-bottom')
                $(this).find('li:first-child')
                    .addClass('border-top');
                $(this).find('li a')
                    .prepend('<i class="fa fa-tag fa-fw mr-2"></i>');
            });
        */
    } else if (path.match(/^\/_category\/.+/g)) {
        // Category
        $('#content > ul')
            .addClass('list-unstyled')
            .each(function() {
                $(this).find('li')
                    .addClass('clearfix')
                    .addClass('py-2')
                    .addClass('border-bottom')
                $(this).find('li:first-child')
                    .addClass('border-top');
                $(this).find('li a')
                    .prepend('<i class="fa fa-book fa-fw mr-2"></i>');
            });
        $('#categoryList > ul > li > a')
            .each(function() {
                switch ($(this).text().substring(0, 1)) {
                    case '+':
                        /*
                        $(this)
                            .removeClass('badge-primary')
                            .addClass('badge-info');
                        */
                        break;
                    case '-':
                        $(this)
                            .removeClass('badge-primary')
                            .addClass('badge-secondary')
                            .append('<i class="fa fa-times fa-fw ml-2"></i>');
                        break;
                }
            });
        $('#categoryList > ul > li > a > span')
            .text(function() {
                return $(this).text().substring(1);
            });
    } else if (path.match(/^\/(_index|.+\/)$/g)) {
        // Index
        $('#content h1').after(
            $('<div id="breadcrumb" class="breadcrumb"></div>')
                .append($('#content > a.updir'))
                .each(function() {
                    $(this).find('a')
                        .addClass('breadcrumb-item')
                        .text(function() { return $(this).text().replace('/', '') });
                    $(this).find('a:first-child')
                        .prepend('<i class="fa fa-home fa-fw"></i><span class="sr-only">/</span>');
                    $(this).find('a:last-child')
                        .addClass('active');
                }));
        $('#content > ul')
            .addClass('list-unstyled')
            .each(function() {
                $(this).find('li')
                    .addClass('clearfix')
                    .addClass('py-2')
                    .addClass('border-bottom')
                $(this).find('li:first-child')
                    .addClass('border-top');
                $(this).find('li.page a')
                    .prepend('<i class="fa fa-book fa-fw mr-2"></i>');
                $(this).find('li.folder a')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-folder fa-fw mr-2"></i>');
                $(this).find('li:not(.page):not(.folder) a:first-child')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-file fa-fw mr-2"></i>');
                $(this).find('li:not(.page):not(.folder) a:last-child')
                    .addClass('float-right')
                    .addClass('text-danger')
                    .html('<i class="fa fa-trash fa-fw mr-2"></i>Delete');
            });
    }
});
