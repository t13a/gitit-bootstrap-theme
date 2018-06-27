// Hide uninitialized element
$('<style>')
    .attr('type', 'text/css')
    .html('#markuphelp, #exportbox { display.none; }')
    .appendTo('head');

$(document).ready(function() {
    // Initialize markup help
    $('#markuphelp')
        .addClass('card')
        .addClass('mt-3')
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

    // Initialize export box
    $('#exportbox')
        .addClass('form-group')
        .addClass('input-group')
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
