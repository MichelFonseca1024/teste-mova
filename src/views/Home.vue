<template>
  <main class="container">
    <filter-type class="type" />
    <select-by-type class="select" />
    <search-button class="search" />
    <countries-list v-if="hasCountries" class="countriesList" />
  </main>
</template>

<script>
import FilterType from '../components/FilterType.vue'
import SelectByType from '../components/SelectByType.vue'
import SearchButton from '../components/SearchButton.vue'
import CountriesList from '../components/CountriesList.vue'

export default {
  name: 'Home',
  components: {
    FilterType,
    SelectByType,
    SearchButton,
    CountriesList
  },
  computed: {
    hasCountries () {
      return this.$store.state.countries
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
}

.search {
  grid-column: 3/4;
}

.countriesList {
  grid-column: 1/4;
}

@media all and (max-width: 768px) {
  .container {
    display: block;
  }

  .container > div {
    margin-bottom: 20px;
  }
}
</style>
