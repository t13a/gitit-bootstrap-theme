$(document).ready(function() {
    var path = window.location.pathname;

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
                .after($(this).find('input[name="login"]'))
                .after($(this).find('input[name="register"]'));
            $(this).find('label[for="username"]')
                .addClass('col-form-label');
            $(this).find('input[name="username"]')
                .addClass('form-control');
            $(this).find('label[for="email"]')
                .addClass('col-form-label');
            $(this).find('input[name="email"]')
                .addClass('form-control');
            $(this).find('input[name="full_name_1"]')
                .before('<label for="full_name_1">Fullname (optional):</label>')
                .addClass('col-form-label');
            $(this).find('input[name="full_name_1"]')
                .addClass('form-control');
            $(this).find('label[for="password"]')
                .addClass('col-form-label');
            $(this).find('input[name="password"]')
                .addClass('form-control');
            $(this).find('label[for="password2"]')
                .addClass('col-form-label');
            $(this).find('input[name="password2"]')
                .addClass('form-control');
            $(this).find('input[name="login"]')
                .addClass('btn')
                .addClass('btn-primary');
            $(this).find('input[name="register"]')
                .addClass('btn')
                .addClass('btn-primary');
            $(this).find('br')
                .remove();
        });

    // Reset password form
    $('#resetPassword')
        .addClass('jumbotron')
        .each(function() {
            $(this).find('fieldset')
                .addClass('form-group')
                .after($(this).find('input[name="resetPassword"]'));
            $(this).find('label[for="username"]')
                .addClass('col-form-label');
            $(this).find('input[name="username"]')
                .addClass('form-control');
            $(this).find('input[name="resetPassword"]')
                .addClass('btn')
                .addClass('btn-primary');
            $(this).find('br')
                .remove();
        });

    // Edit form
    $('#editform')
        .addClass('form-group')
        .each(function() {
            $(this).find('textarea[name="editedText"]')
                .addClass('form-control')
                .attr('rows', 10);
            $(this).find('label[for="logMsg"]')
                .addClass('col-form-label');
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

    // Path specific contents
    if (path == '/') {
        // Home
    } else if (path.match(/^\/_activity(\/.*)?$/g)) {
        // Recent activity
        $('#content ul')
            .addClass('list-unstyled')
            .each(function() {
                $(this).find('li')
                    .addClass('card')
                    .addClass('card-body')
                    .addClass('mt-3')
                    .each(function() {
                        $(this).find('span.date')
                            .addClass('text-muted');
                        $(this).find('span.author a')
                            .prepend('<i class="fa fa-user fa-fw"></i>');
                        $(this).find('span.files a')
                            .prepend('<i class="fa fa-file fa-fw"></i>');
                    });
            });
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
    } else if (path.match(/^\/_category\/.+/g)) {
        // Category
        $('#content > ul')
            .addClass('list-group')
            .each(function() {
                $(this).find('li')
                    .addClass('list-group-item');
                $(this).find('li a')
                    .prepend('<i class="fa fa-book fa-fw mr-2"></i>');
            });
        $('#categoryList > ul > li > a')
            .each(function() {
                if ($(this).text().substring(0, 1) == '-') {
                    $(this)
                        .removeClass('badge-primary')
                        .addClass('badge-secondary')
                        .append('<i class="fa fa-times fa-fw ml-2"></i>');
                }
            });
        $('#categoryList > ul > li > a > span')
            .text(function() {
                return $(this).text().substring(1);
            });
    } else if (path.match(/^\/_history(\/.*)?$/g)) {
        // History
        $('#content ul')
            .addClass('list-unstyled')
            .each(function() {
                $(this).find('li')
                    .addClass('card')
                    .addClass('card-body')
                    .addClass('mt-3')
                    .each(function() {
                        $(this).find('span.date')
                            .addClass('text-muted');
                        $(this).find('span.author a')
                            .addClass('card-title')
                            .prepend('<i class="fa fa-user fa-fw"></i>');
                    });
            });
    } else if (path.match(/^\/_upload(\/.*)?$/g)) {
        // Upload
        $('#content form')
            .addClass('jumbotron')
            .each(function() {
                $(this).find('fieldset')
                    .addClass('form-group')
                    .after($(this).find('input[name="upload"]'));
                $(this).find('p')
                    .addClass('m-0');
                $(this).find('label[for="file"]')
                    .addClass('col-form-label');
                $(this).find('input[name="file"]')
                    .addClass('form-control');
                $(this).find('label[for="wikiname"]')
                    .addClass('col-form-label');
                $(this).find('input[name="wikiname"]')
                    .addClass('form-control');
                $(this).find('input[name="wikiname"]').parent()
                    .after($("<div></div>")
                        .addClass('form-check')
                        .append($(this).find('input[name="overwrite"]')
                            .addClass('form-check-input'))
                        .append($(this).find('label[for="overwrite"]')
                            .addClass('form-check-label')));
                $(this).find('label[for="logMsg"]')
                    .addClass('col-form-label');
                $(this).find('input[name="logMsg"]')
                    .addClass('form-control');
                $(this).find('input[name="upload"]')
                    .addClass('btn')
                    .addClass('btn-primary');
            })
            .html(function() {
                return $(this).html().replace(/&nbsp;/g, '');
            });
    } else if (path.match(/^\/(_index|.*\/)$/g)) {
        // Index
        $('#content h1').after(
            $('<div id="breadcrumb" class="breadcrumb"></div>')
                .append($('#content > a.updir'))
                .each(function() {
                    $(this).find('a')
                        .addClass('breadcrumb-item')
                        .html(function() { return $(this).html().replace('/', '<span class="sr-only">/</span>') });
                    $(this).find('a:first-child')
                        .prepend('<i class="fa fa-folder fa-fw"></i>');
                    $(this).find('a:last-child')
                        .addClass('active');
                }));
        $('#content > ul')
            .addClass('list-group')
            .each(function() {
                $(this).find('li')
                    .addClass('list-group-item')
                    .addClass('d-flex')
                    .addClass('justify-content-between')
                    .addClass('align-items-center');
                $(this).find('li.page a:first-child')
                    .prepend('<i class="fa fa-book fa-fw mr-2"></i>');
                $(this).find('li.folder a:first-child')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-folder fa-fw mr-2"></i>');
                $(this).find('li.upload a:first-child')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-file fa-fw mr-2"></i>');
                $(this).find('li.upload a:first-child + a')
                    .addClass('text-danger')
                    .text(function() { return $(this).text().replace(/[()]/gi, '') })
                    .css('text-transform', 'capitalize')
                    .prepend('<i class="fa fa-trash fa-fw mr-2"></i>');
            });
    }
});
