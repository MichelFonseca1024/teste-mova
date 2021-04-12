<template>
  <router-link class="button" :to="{ name: routerName }">
    <img src="@/assets/img/go_back.svg" alt="go back" />
    <span>
      Voltar
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'GobackButton',
  props: {
    routerName: {
      type: String,
      default: 'Home',
      description: 'Button to return to the previous screen'
    }
  }
}
</script>

<style scoped>
.button {
  border: 1px solid var(--primary-bg-color);
  color: var(--color-text-primary);
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 15px;
}

@media all and (max-width: 425px) {
  .button {
    border: none;
    justify-content: flex-end;
  }

  .button span {
    display: none;
  }
}
</style>
