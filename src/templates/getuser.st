<script type="text/javascript">
/* <![CDATA[ */
  \$.get("$base$/_user", {}, function(username, status) {
     if (username != "") {
        \$("#logoutlink").parent().parent().show();
        \$("#logged_in_user").text(username);
     } else {
        \$("#loginlink").parent().parent().show();
     };
   });
/* ]]> */
</script>
