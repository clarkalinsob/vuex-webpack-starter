<template>
  <div class="the-header wrapper">
    <div class="container">
      <div class="logo">
        <img src="images/logo.svg" alt="">
      </div>
      <div class="navigation">
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        <router-link :to="{ name: 'view-1' }">View One</router-link>
        <router-link :to="{ name: 'view-2' }">View 2</router-link>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="stylus" scoped>
.the-header
  background-color $color-base-grey
.container
  flexbox center
  height 60px
.logo
  margin-right 10px
  img
    width-height auto 40px
.navigation
  a
    color $color-text-lightgrey
    &:focus, &:hover, &:active, &.--active
      color $color-accent1
    &:not(:last-child)
      margin-right 10px
</style>
