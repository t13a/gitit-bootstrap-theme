<fieldset class="mt-3">
  <legend class="my-0">This page</legend>
  <div class="list-group mt-3">
    <a class="list-group-item list-group-item-action" href="$base$/_showraw$pageUrl$$if(revision)$?revision=$revision$$endif$"><i class="fa fa-code fa-fw mr-2"></i>Raw page source</a>
    <a class="list-group-item list-group-item-action" href="$base$$pageUrl$?printable$if(revision)$&amp;revision=$revision$$endif$"><i class="fa fa-print fa-fw mr-2"></i>Printable version</a>
    <a class="list-group-item list-group-item-action text-danger" href="$base$/_delete$pageUrl$"><i class="fa fa-trash fa-fw mr-2"></i>Delete this page</a>
    $if(feed)$
    <a class="list-group-item list-group-item-action" href="$base$/_feed$pageUrl$" type="application/atom+xml" rel="alternate" title="This page's ATOM Feed"><i class="fa fa-rss fa-fw mr-2"></i>Atom feed</a>
    $endif$
  </div>
  $exportbox$
</fieldset>
