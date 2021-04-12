<template>
  <div v-if="country" class="country-info">
    <img :src="country.flag" />
    <div class="information">
      <p>Nome: {{ country.name }}</p>
      <p>Capital: {{ country.capital }}</p>
      <p>
        Região:<span class="region" @click="searchRegion(country.region)">
          {{ country.region }}</span
        >
      </p>
      <p>Sub-região: {{ country.subregion }}</p>
      <p>População: {{ country.population }}</p>
      <p>
        Linguas:
        <span v-for="(language, index) in country.languages" :key="index">
          {{ language.nativeName }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { api } from '@/services'
import { mapMutations } from 'vuex'

export default {
  name: 'CountrySelected',

  data () {
    return {
      country: ''
    }
  },

  methods: {
    ...mapMutations(['CHANGE_TYPE', 'CHANGE_FILTER']),
    async getCountry () {
      const { alpha2Code } = this.$route.params
      const Response = await api.get(`/alpha/${alpha2Code}`)
      this.country = await Response.data
    },
    createUrl () {
      let url = '/alpha?codes='
      this.country.borders.forEach(item => {
        url += `${item};`
      })

      return url
    },
    searchRegion (region) {
      this.CHANGE_TYPE({
        name: 'Região',
        endpoint: 'region',
        service: 'region'
      })
      this.CHANGE_FILTER(region)
      this.$router.push({ name: 'Home' })
    }
  },

  created () {
    this.getCountry()
  },

  watch: {
    country () {
      const url = this.createUrl()
      this.$store.dispatch('GET_COUNTRIES', url)
    },

    $route () {
      this.getCountry()
    }
  }
}
</script>

<style spoped>
.country-info {
  height: 250px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 150px;
  color: #454545;
}

.country-info img {
  border: 0.2px solid #c2c2c2;
}

.information {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.region {
  color: var(--color-text-primary);
  text-decoration: underline;
  cursor: pointer;
}

@media all and (max-width: 768px) {
  .country-info {
    flex-direction: column;
    height: 100%;
    margin-bottom: 30px;
  }

  .information {
    margin-top: 20px;
    padding: 0;
  }

  .information p {
    margin-bottom: 20px;
  }
}
</style>
