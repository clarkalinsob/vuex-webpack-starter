<template>
  <div class="dashboard wrapper">
    <the-header />
    <div class="container">
      <h1>DASHBOARD</h1>
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
  }
}
</script>
