<template>
  <form id="signup" class="formee clearfix" action="#" novalidate="novalidate">
￼     <div style="float: left"><input v-model="email" name="email" id="email" type="text" style="display: block; width: 100%"></div>
￼     <div style="float: left"><input v-on:click.prevent="postPost()" class="right inputnew" type="submit" title="Send" value="Submit" style="display: block; width: 100%"></div>
  </form>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert'

  export default {
    data () {
      return {
        email: '',
        errors: []
      }
    },

    // Pushes posts to the server when called.
    methods: {
      postPost () {
        axios.post(`/subscribers`, {
          email: this.email
        })
        // swal('good')
        .then(response => {
          swal('Success')
        })
        .catch(e => {
          swal('Incorrect email')
          this.errors.push(e)
        })
      }
    }
  }
</script>
