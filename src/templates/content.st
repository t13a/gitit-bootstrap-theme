<div class="card mt-0 mt-lg-3">
  $if(revision)$
  <h2 class="revision card-header clearfix bg-warning">
    <span class="card-title">Revision</span>
    <code class="card-subtitle">$revision$</code>
    <a class="card-link float-right" href="$base$$pageUrl$">Current version</a>
  </h2>
  $endif$
  <div id="content" class="card-body clearfix my-0">
    <h1 class="pageTitle my-3">$pagetitle$</h1>
    $if(messages)$
$messages()$
    $endif$
$content$
</div>
</div>
