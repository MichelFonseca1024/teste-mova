<template>
  <div class="container">
    <div class="err">4?4</div>
    <div class="msg">
      Talvez esta página mudou? Foi excluída? Está se escondendo em quarentena?
      Nunca existiu em primeiro lugar?
      <p>
        Volte para a <router-link :to="{ name: 'Home' }">Home</router-link> e
        tente novamente.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.err {
  color: var(--primary-bg-color);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 11rem;
  text-align: center;
}

.msg {
  text-align: center;
  color: var(--color-text-secondary);
  font-family: 'Nunito Sans', sans-serif;
  margin: 0 20%;
  font-size: 1.6rem;
}
</style>
