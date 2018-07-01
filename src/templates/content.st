<div class="card mt-0 mt-lg-3">
  $if(revision)$
  <h2 class="revision card-header alert alert-warning d-flex justify-content-between align-items-center">
    <span class="font-weight-normal">Revision</span>
    <code class="badge badge-warning ml-1 mr-auto">$revision$</code>
    <a class="btn btn-primary ml-3" href="$base$$pageUrl$">Current version</a>
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
