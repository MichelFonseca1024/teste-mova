<template>
  <div v-if="type" class="filter">
    <p>{{ type.name }}</p>
    <select v-model="selected">
      <option :value="''" selected disabled>Escolha uma {{ type.name }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="isLanguage(option)"
        >{{ option[key] }}</option
      >
    </select>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { api } from '@/services'
import { uniqBy } from 'lodash'

export default {
  name: 'SelectByType',

  data () {
    return {
      options: [],
      selected: '',
      key: ''
    }
  },

  watch: {
    type () {
      this.getOptions()
    },
    selected () {
      this.CHANGE_FILTER(this.selected)
    }
  },

  methods: {
    ...mapMutations(['CHANGE_FILTER']),
    async getOptions () {
      const Response = await api.get(`all?fields=${this.type.endpoint};`)
      this.key = this.type.endpoint
      this.options = this.filterData(Response.data)
    },
    filterData (arr) {
      const key = this.type.endpoint

      if (key === 'languages') {
        const languages = []
        arr.forEach(item => {
          languages.push(item['languages'][0])
        })
        this.key = 'nativeName'
        return uniqBy(languages, 'iso639_1')
      }

      const values = uniqBy(arr, key).filter(item => {
        return item[key]
      })

      if (values[0]['callingCodes']) {
        const newValues = values.map(item => {
          return {
            callingCodes: item['callingCodes'][0]
          }
        })
        return newValues
      }

      return values
    },

    isLanguage (option) {
      const { key } = this
      if (key !== 'nativeName') {
        return option[key]
      }

      return option['iso639_1']
    },

    getRegion () {
      const { filter } = this
      if (filter) {
        this.selected = filter
      }
    }
  },

  created () {
    this.getRegion()
    if (this.type) {
      this.getOptions()
    }
  },

  computed: {
    ...mapState(['type', 'filter'])
  }
}
</script>
