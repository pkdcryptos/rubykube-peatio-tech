<template>
  <div class="wrapper" id="top">
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    AppNavbar: Navbar,
    AppFooter: Footer
  },
  name: 'app'
}
</script>
