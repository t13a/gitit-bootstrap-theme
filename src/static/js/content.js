$(document).ready(function() {
    var path = window.location.pathname;

    $('#categoryList')
        .each(function() {
            $(this).find('ul')
                .addClass('list-inline')
                .addClass('mt-3');
            $(this).find('ul li')
                .addClass('list-inline-item')
                .addClass('mr-1');
            $(this).find('ul li a')
                .addClass('badge')
                .addClass('badge-primary')
                .addClass('mt-1')
                .addClass('p-2')
                .html(function() {
                    return '<i class="fa fa-tag fa-fw mr-2"></i>' +
                        '<span>' + $(this).html() + '</span>';
                });
        })
        .css('display', 'block');

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

    // delete form
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

    // path specific
    if (path == '/') {
        // do nothing
    } else if (path.match(/^\/_activity(\/.*)?$/g)) {
        $('#content h1.pageTitle + h1')
            .replaceWith(function() {
                return '<div class="h4">' + $(this).text() + '</div>';
            });
        $('#content ul')
            .addClass('list-unstyled')
            .addClass('list-group');
        $('#content ul li')
            .addClass('list-group-item')
            .each(function() {
                $(this)
                    .append($('<span class="head"></span>')
                        .append($(this).children('span.date'))
                        .append($(this).children('span.author')))
                    .append($('<span class="body"></span>')
                        .append($(this).children('span.subject'))
                        .append($(this).children('span.files')));
                $(this).find('span.head')
                    .addClass('d-flex')
                    .addClass('justify-content-between')
                    .addClass('align-items-center');
                $(this).find('span.head span.author')
                    .addClass('order-first')
                $(this).find('span.head span.date')
                    .addClass('order-last')
                    .addClass('ml-3')
                    .addClass('small')
                    .addClass('text-muted');
                $(this).find('span.head span.author a')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-user fa-fw"></i>');
            })
            .contents()
            .filter(function() { return this.nodeType != 1; })
            .remove();
        $('#content ul li span.files')
            .addClass('d-block');
        $('#content ul li span.files a')
            .addClass('badge')
            .addClass('badge-primary')
            .addClass('mt-1')
            .addClass('p-2')
            .prepend('<i class="fa fa-exchange-alt fa-fw mr-2"></i>');
    } else if (path == '/_categories') {
        $('#content > ul')
            .addClass('list-inline')
            .addClass('mt-3')
            .each(function() {
                $(this).find('li')
                    .addClass('list-inline-item')
                    .addClass('mr-1');
                $(this).find('li a')
                    .addClass('badge')
                    .addClass('badge-primary')
                    .addClass('mt-1')
                    .addClass('p-2')
                    .prepend('<i class="fa fa-tag fa-fw mr-2"></i>');
            });
    } else if (path.match(/^\/_category\/.+/g)) {
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
    } else if (path.match(/^\/_diff(\/.*)?$/g)) {
        $('#content h1.pageTitle + h2.revision')
            .replaceWith(function() {
                return '<div class="h4">' + $(this).text() + '</div>';
            });
        $('#content pre')
            .addClass('card')
            .addClass('card-header')
            .addClass('p-2')
            .addClass('bg-light')
            .addClass('text-muted');
        $('#content pre span.added')
            .addClass('text-success')
            .addClass('font-weight-bold');
        $('#content pre span.deleted')
            .addClass('text-danger')
            .addClass('font-weight-bold');
    } else if (path.match(/^\/_history(\/.*)?$/g)) {
        $('#content ul')
            .addClass('list-unstyled')
            .addClass('list-group');
        $('#content ul li')
            .addClass('list-group-item')
            .addClass('w-100')
            .each(function() {
                $(this)
                    .append($('<span class="head"></span>')
                        .append($(this).children('span.date'))
                        .append($(this).children('span.author')))
                    .append($('<span class="body"></span>')
                        .append($(this).children('a')))
                $(this).find('span.head')
                    .addClass('d-flex')
                    .addClass('justify-content-between')
                    .addClass('align-items-center');
                $(this).find('span.head span.author')
                    .addClass('order-first')
                $(this).find('span.head span.date')
                    .addClass('order-last')
                    .addClass('ml-3')
                    .addClass('small')
                    .addClass('text-muted');
                $(this).find('span.head span.author a')
                    .addClass('text-secondary')
                    .prepend('<i class="fa fa-user fa-fw"></i>');
            })
            .contents()
            .filter(function() { return this.nodeType != 1; })
            .remove();
    } else if (path.match(/^\/(_search|_go)(\/.*)?$/g)) {
        $('#content h1.pageTitle + h3')
            .replaceWith(function() {
                return '<div class="h4">' + $(this).html() + '</div>';
            });
        $('#content ol')
            .addClass('list-unstyled')
            .addClass('list-group');
        $('#content ol li')
            .addClass('list-group-item')
            .addClass('p-0')
            .each(function() {
                var matchingLines = $(this)
                    .contents()
                    .filter(function() { return this.nodeType != 1; })
                    .text()
                    .replace(/[^0-9]+/g, '');
                $(this)
                    .append($('<span class="head d-flex justify-content-between align-items-center px-3 py-2"></span>')
                        .append($('<span></span>')
                            .addClass('d-flex')
                            .addClass('align-items-center')
                            .append($('<i class="chevron fa fa-chevron-down fa-fw mr-3"></i>'))
                            .append($(this).children('a:not(.showmatch)')
                                .prepend('<i class="fa fa-book fa-fw mr-2"></i>')))
                        .append($('<span class="badge badge-info" title="' + matchingLines + ' matching lines">' + matchingLines + '</span>')))
                    .append($(this).children('pre.matches')
                        .addClass('border-top')
                        .addClass('m-0')
                        .addClass('px-3')
                        .addClass('py-2')
                        .addClass('bg-light')
                        .addClass('text-muted')
                        .css('background', 'transparent')
                        .css('border', 'none'));
                $(this)
            })
            .contents()
            .filter(function() { return this.nodeType != 1; })
            .remove();
    } else if (path.match(/^\/_upload(\/.*)?$/g)) {
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
    } else {
        // page title to bread comb
        if (path.match(/^\/[^_]/g) && path.slice(1) == $('#content h1:first').text()) {
            var segments = path.slice(1).split('/');
            $('#content h1:first').html(function() {
                var ret = '';
                for (var i = 0; i < segments.length - 1; i++) {
                    var href = '/' + segments.slice(0, i + 1).join('/') + '/';
                    var text = segments[i];
                    ret += '<a class="text-muted" href="' + href + '">' + text + '</a>/';
                }
                return ret + segments[segments.length - 1];
            });
        }
    }
});
