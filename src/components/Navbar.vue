<template>
  <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" id="main">
      <div class="container no-override">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand page-scroll" href="#main">
            <img src="../assets/img/logo.png" width="25%" height="auto" alt="Logo">
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-right" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a class="page-scroll" href="#main">Product</a></li>
            <li><a class="page-scroll" href="#features">Features</a></li>
            <li><a class="page-scroll" href="#review-section">Reviews</a></li>
            <li><a class="page-scroll" href="#pricing">Pricing</a></li>
            <li><a class="page-scroll" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</template>

<script>
export default {
  name: 'navbar'
}
</script>
