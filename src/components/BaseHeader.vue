<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="logo">
        <img src="@/assets/img/logo_principal.png" alt="Mova" />
      </router-link>
      <go-back-button />
    </div>
  </header>
</template>

<script>
import GoBackButton from './GoBackButton'

export default {
  name: 'BaseHeader',
  components: {
    GoBackButton
  }
}
</script>

<style scoped>
.header {
  width: 100vw;
  position: fixed;
  z-index: 1;
  box-shadow: 0px 0px 10px 0px #c4c4c4;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 15px auto;
}

.logo {
  height: 45px;
}

.logo img {
  height: 100%;
}
</style>
