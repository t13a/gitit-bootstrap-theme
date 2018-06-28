<noscript>
  <a href="$base$/_login">Login</a>
  <a href="$base$/_logout">Logout</a>
</noscript>
<ul class="userbox nav nav-pills flex-column flex-lg-row ml-auto">
  <li class="nav-item dropdown" style="display:none">
    <span class="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
      <i class="fa fa-user-slash fa-fw mr-2"></i><span>Not logged in</span>
    </span>
    <span class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; width: 100%; top: 0px; left: 0px; transform: translate3d(0px, 2rem, 0px);">
      <a id="loginlink" class="dropdown-item small" href="$base$/_login">
        <i class="fa fa-sign-in-alt fa-fw mr-2"></i>
        <span>Log in</span>
      </a>
    </span>
  </li>
  <li class="nav-item dropdown" style="display:none">
    <span class="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
      <i class="fa fa-user fa-fw mr-2"></i><span id="logged_in_user"></span>
    </span>
    <span class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; width: 100%; top: 0px; left: 0px; transform: translate3d(0px, 2rem, 0px);">
      <a id="logoutlink" class="dropdown-item small" href="$base$/_logout">
        <i class="fa fa-sign-out-alt fa-fw mr-2"></i>
        <span>Log out</span>
      </a>
    </span>
  </li>
</ul>
