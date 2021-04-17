<template>
  <div class="countries">
    <div
      class="country"
      v-for="country in listItems()"
      :key="country.alpha2Code"
    >
      <router-link
        :to="{
          name: 'Country',
          params: { alpha2Code: country.alpha2Code }
        }"
      >
        <img :src="country.flag" :alt="country.name" />
      </router-link>
    </div>
    <ul v-if="totalPages > 1">
      <li v-if="pageActual > 1" class="arrow" @click="pageActual--">
        <i class="fas fa-angle-left "></i>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
          :class="pageActual === page ? 'active' : ''"
          @click="pageActual = page"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="pageActual < totalPages" class="arrow" @click="pageActual++">
        <i class="fas fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CountriesList',

  data () {
    return {
      pageActual: 1,
      limitItems: 12
    }
  },
  
  methods: {
    listItems () {
      const { pageActual, limitItems, totalPages, countries } = this

      const result = []
      let count = pageActual * limitItems - limitItems
      const delimiter = count + limitItems

      if (pageActual <= totalPages) {
        for (let i = count; i < delimiter; i++) {
          if (countries[i] != null) {
            result.push(countries[i])
          }
          count++
        }
      }
      return result
    }
  },

  computed: {
    ...mapState(['countries']),

    totalPages () {
      const total = this.countries.length / 12
      return total !== Infinity ? Math.ceil(total) : 0
    }
  }
}
</script>

<style scoped>
.countries {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  margin-bottom: 60px;
}

.country img {
  width: 100%;
  height: 100%;
  border: 0.2px solid #c2c2c2;
  object-fit: cover;
}

ul {
  grid-column: 1 / -1;
  text-align: center;
  margin: 30px 50px;
}

li {
  display: inline-block;
  color: var(--color-text-secondary);
}

.arrow {
  padding: 0 8px;
  border-radius: 2px;
  margin: 5px;
  box-shadow: 0px 2px 2px 1px #b9b8b8;
  cursor: pointer;
}

li button {
  padding: 4px 12px;
  border-radius: 2px;
  margin: 5px;
  box-shadow: 0px 2px 2px 1px #b9b8b8;
}

li .active {
  background: var(--primary-bg-color);
  color: #ffff;
}

li button:hover,
.arrow:hover {
  background: var(--primary-bg-color);
  color: #ffff;
}

@media all and (max-width: 658px) {
  .countries {
    display: block;
  }

  .country {
    margin-bottom: 15px;
  }

  ul {
    margin: 30px 0px;
  }
}
</style>
