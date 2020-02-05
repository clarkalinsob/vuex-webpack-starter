<template>
  <div class="dashboard wrapper">
    <the-header />
    <div class="container">
      <h1>DASHBOARD</h1>
      <p>The icecream flavor we're getting later is {{ $store.getters.flavor }}. </p>
      <p>Not feeling that one?</p>
      <p>What would you like to get instead?</p>
      <input name="flavor" @input="changed">
      <p>Good choice.</p>
      <hr>
      <h4>Installing vuex:</h4>
      <em>npm install --save-dev vuex</em>
      <p>Set up the store</p>
      <em>getters... setters... and all that...</em>
      <p>Import store in top-level parent Vue app</p>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheHeader from '../components/the-header.vue'
import TheFooter from '../components/the-footer.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    changed: function (event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>
