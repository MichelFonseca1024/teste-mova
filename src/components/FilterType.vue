<template>
  <div class="filter">
    <p>Filtrar por</p>
    <select v-model="selected" @change="CHANGE_TYPE(selected)">
      <option :value="{}" selected disabled>
        Escolha uma opção
      </option>

      <option v-for="(type, index) in types" :key="index" :value="type">{{
        type.name
      }}</option>
    </select>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FilterType',

  data () {
    return {
      types: [
        { name: 'Região', endpoint: 'region', service: 'region' },
        { name: 'Capital', endpoint: 'capital', service: 'capital' },
        { name: 'Língua', endpoint: 'languages', service: 'lang' },
        { name: 'País', endpoint: 'name', service: 'name' },
        {
          name: 'Código de ligação',
          endpoint: 'callingCodes',
          service: 'callingCodes'
        }
      ],
      selected: {}
    }
  },

  methods: {
    ...mapMutations(['CHANGE_TYPE']),
    getTypeRegion () {
      if (this.type.service === 'region') {
        this.selected = this.type
      }
    }
  },

  created () {
    this.getTypeRegion()
  },

  computed: mapState(['type'])
}
</script>
