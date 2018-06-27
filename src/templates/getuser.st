<script type="text/javascript">
/* <![CDATA[ */
  \$.get("$base$/_user", {}, function(username, status) {
     if (username != "") {
        \$("#loginlink").parent().addClass("d-none");
        \$("#logoutlink").parent().removeClass("d-none");
        \$("#logged_in_user").text(username);
     };
   });
/* ]]> */
</script>
