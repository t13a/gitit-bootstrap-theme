$(document).ready(function() {
    $('#markuphelp')
        .addClass('card')
        .addClass('mt-3')
        .each(function() {
            $(this).find('pre')
                .addClass('card-header')
                .addClass('p-2')
                .addClass('bg-light')
                .addClass('text-secondary');
            $(this).find('p')
                .addClass('card-body')
                .addClass('m-0');
        });

    $('#exportbox')
        .addClass('form-group')
        .addClass('input-group')
        .addClass('input-group-sm')
        .addClass('mt-3')
        .addClass('mb-0')
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
});
