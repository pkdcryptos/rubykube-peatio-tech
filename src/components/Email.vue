<template>
  <div class="cta-sub no-color">
    <div class="container">
      <div class="cta-inner">
        <div v-if="show">
          <h1>Start your Peatio Cloud</h1>
          <p>Please submit your email to receive your peatio.tech demo link.</p>
          <div class="form">
            <form id="signup" class="formee clearfix" action="#" novalidate="novalidate">
        ￼     <div class="form-name">
                <input v-model="company_name" name="company_name" id="company_name" type="text" placeholder="Your Company name" style="display: block; width: 100%">
              </div>
              <div >
                <input v-model="email" name="email" id="email" type="text" placeholder="Your Email" style="display: block; width: 100%">
              </div>
        ￼      <div class="form-button">
                <button v-on:click.prevent="postPost()" class="right button" type="submit" title="Send">Submit</button>
              </div>
              <div v-if="incorrect > 0" class="alert alert-danger error-message" role="alert">
                Incorrect company name or email address
              </div>
            </form>
          </div>
        </div>
        <div v-else>
          <h1>
            <span class="big-text">
              Thank you!
            </span><br/>
            <span class="small-text">
              We will contact you ASAP!
            </span>
          </h1>
        </div>
        <div id="response"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        email: '',
        company_name: '',
        show: true,
        incorrect: 0,
        errors: []
      }
    },
    // Pushes posts to the server when called.
    methods: {
      postPost () {
        axios.post(`/subscribers`, {
          email: this.email,
          company_name: this.company_name
        })
        .then(response => {
          this.show = false
        })
        .catch(e => {
          this.incorrect += 1
          this.errors.push(e)
        })
      }
    }
  }
</script>
