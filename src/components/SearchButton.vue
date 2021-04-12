<template>
  <div class="btn">
    <button :disabled="!filter" @click="GET_COUNTRIES()">
      Pesquisar
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SearchButton',
  methods: {
    ...mapActions(['GET_COUNTRIES'])
  },
  computed: mapState(['filter'])
}
</script>

<style scoped>
.btn button {
  background-color: var(--primary-bg-color);
  color: #fff;
  padding: 5px;
  border-radius: 8px;
  width: 50%;
  height: 100%;
}

.btn button:disabled {
  background-color: var(--primary-bg-color-disabled);
  cursor: not-allowed;
}

@media all and (max-width: 768px) {
  .btn {
    text-align: end;
  }
  .btn button {
    width: 200px;
    height: 40px;
  }
}
</style>
