<template>
  <div>
    <page-header></page-header>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import pageHeader from '~/components/pageHeader.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    pageHeader
  }
})
export default class extends Vue {
}
</script>


