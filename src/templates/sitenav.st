<fieldset class="mt-3">
  <legend class="my-0">Site</legend>
  <div class="list-group mt-3">
    <a class="list-group-item list-group-item-action" href="$base$/"><i class="fa fa-home fa-fw mr-2"></i>Front page</a>
    <a class="list-group-item list-group-item-action" href="$base$/_index"><i class="fa fa-list fa-fw mr-2"></i>All pages</a>
    <a class="list-group-item list-group-item-action" href="$base$/_categories"><i class="fa fa-tags fa-fw mr-2"></i>Categories</a>
    <a class="list-group-item list-group-item-action" href="$base$/_random"><i class="fa fa-random fa-fw mr-2"></i>Random page</a>
    <a class="list-group-item list-group-item-action" href="$base$/_activity"><i class="fa fa-chart-line fa-fw mr-2"></i>Recent activity</a>
    $if(wikiupload)$
    <a class="list-group-item list-group-item-action" href="$base$/_upload"><i class="fa fa-upload fa-fw mr-2"></i>Upload a file</a>
    $endif$
    $if(feed)$
    <a class="list-group-item list-group-item-action" href="$base$/_feed/" type="application/atom+xml" rel="alternate" title="ATOM Feed"><i class="fa fa-rss fa-fw mr-2"></i>Atom feed</a>
    $endif$
    <a class="list-group-item list-group-item-action" href="$base$/Help"><i class="fa fa-question fa-fw mr-2"></i>Help</a>
  </div>
  <form class="form-group mt-3 mb-0" action="$base$/_go" method="post" id="goform">
    <div class="input-group input-group-sm">
      <input class="form-control" placeholder="Go to page" type="text" name="gotopage" />
      <div class="input-group-append">
        <button class="input-group-text" type="submit" name="go">
          <i class="fa fa-arrow-right"></i>
          <span class="sr-only">Go</span>
        </button>
      </div>
    </div>
  </form>
</fieldset>
