function updatePreviewPane() {
    $("#previewpane").hide();
    var url = location.pathname.replace(/_edit\//,"_preview/");
    $.post(
      url,
      {"raw" : $("#editedText").val()},
      function(data) {
        $('#previewpane').html(data);
        // Process any mathematics if we're using MathML
        if (typeof(convert) == 'function') { convert(); }
        // Process any mathematics if we're using jsMath
        if (typeof(jsMath) == 'object')    { jsMath.ProcessBeforeShowing(); }
        // Process any mathematics if we're using MathJax
        if (typeof(window.MathJax) == 'object') {
          // http://docs.mathjax.org/en/latest/typeset.html
          var math = document.getElementById("MathExample");
          MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
        }
      },
      "html");

    $('#previewpane').fadeIn(1000);
};

$(document).ready(function() {
    $('#previewButton').replaceWith(
        '<button class="btn btn-info float-right mt-3" type="button" data-toggle="modal" data-target="#preview-modal" onclick="updatePreviewPane();">' +
        '  <i class="fa fa-eye fa-fw mr-2"></i>' +
        '  <span>Preview</span>' +
        '</button>'
    );
    $("#previewpane").replaceWith(
        '<div id="preview-modal" class="modal fade">' +
        '  <div class="modal-dialog modal-lg">' +
        '    <div class="modal-content">' +
        '      <div class="modal-header">' +
        '        <p class="modal-title h4"><i class="fa fa-eye fa-fw mr-2"></i>Preview</p>' +
        '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '      </div>' +
        '      <div class="modal-body">' +
        '        <div id="previewpane" class=""></div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    $('#editedText').focus();
});
