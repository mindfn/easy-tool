<template>
  <div></div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import head from '~/mixins/head'
import layout from '~/mixins/layout'

@Component
export default class extends mixins(head, layout) {
  readonly title:string = "记录"
}
</script>


