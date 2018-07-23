<template>
  <div>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import eHeader from '~/components/eHeader.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    eHeader
  }
})
export default class extends Vue {
}
</script>


