$(document).ready(function() {

  /* Put your custom script here: */

  /* Add external link icon */
  $('#content a')
    .filter(function() {
      return this.hostname && this.hostname !== location.hostname
    })
    .append('<i class="external-link fa fa-external-link-alt small"></i>')

})
