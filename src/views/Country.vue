<template>
  <main class="container">
    <country-selected />

    <countries-list />
  </main>
</template>

<script>
import CountriesList from '../components/CountriesList.vue'
import CountrySelected from '../components/CountrySelected.vue'
export default {
  components: { CountrySelected, CountriesList }
}
</script>

<style scoped></style>
