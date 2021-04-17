<template>
  <header class="header">
    <div>
      <router-link :to="{ name: 'Home' }" class="logo">
        <img src="@/assets/img/logo_principal.png" alt="Mova" />
      </router-link>
      <go-back-button v-if="isInCountry" />
    </div>
  </header>
</template>

<script>
import GoBackButton from './GoBackButton'

export default {
  name: 'BaseHeader',

  components: {
    GoBackButton
  },

  computed: {
    isInCountry () {
      return this.$route.name === 'Country'
    }
  }
}
</script>

<style scoped>
.header {
  width: 100vw;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #727272;
}

.header > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 15px auto;
}

.logo {
  height: 45px;
}

.logo img {
  height: 100%;
}

</style>
