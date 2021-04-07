<template>
  <div id="app">
    <base-header />
    <router-view></router-view>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader'

export default {
  components: {
    BaseHeader
  }
}
</script>

<style></style>
