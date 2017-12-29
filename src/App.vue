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
  name: 'app',
  /*eslint-disable*/
 methods: {
   handleScroll () {
     this.scrolled = window.scrollY > 0;
     _chatlio.show();
   }
 },
 created () {
   window.addEventListener('scroll', this.handleScroll);
 },
 destroyed () {
   window.removeEventListener('scroll', this.handleScroll);
 },

   /*eslint-disable*/
   mounted: function () {
     window._chatlio = window._chatlio||[];
     !function(){
       var t=document.getElementById("chatlio-widget-embed");
       if(t&&window.ChatlioReact&&_chatlio.init) return void _chatlio.init(t,ChatlioReact);
       for(var e=function(t){ return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page"],a=0;a<i.length;a++)
         _chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));
       var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];
       n.id="chatlio-widget-embed", n.src="https://w.chatlio.com/w.chatlio-widget.js", n.async=!0,n.setAttribute("data-embed-version","2.3");
        n.setAttribute('data-widget-id','b3d49755-40f4-4079-5992-a5bf40d5defb');
        c.parentNode.insertBefore(n,c);
        _chatlio.hide();
        setTimeout('_chatlio.show({expanded: true})', 40000);
     }();
   },
 }
 </script>
