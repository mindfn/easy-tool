<template>
  <div class="e">
    <e-menu></e-menu>
    <mu-flex class="e-flex">
      <mu-slide-left-transition>
        <mu-flex 
          v-if="show"
          justify-content="start" 
          align-items="start"
          class="e-flex-row">
          <e-side></e-side>
        </mu-flex>
      </mu-slide-left-transition>  
        <mu-flex
          justify-content="start" 
          align-items="start"
          class="e-flex-row"
          fill>
          <div class="e-home">
            <mu-breadcrumbs>
              <mu-breadcrumbs-item 
                v-for="(breadcrumb, index) in breadcrumbs" 
                :key="index"
                :to="breadcrumb.to"
                :disabled="breadcrumb.disabled">
                {{breadcrumb.text}}
              </mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <nuxt/>
          </div>
        </mu-flex>
    </mu-flex>
  </div>
</template>


<script lang="ts">
import eMenu from '~/components/eMenu.vue'
import eSide from '~/components/eSide.vue'
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import BREADCRUMBS from '~/constant/breadcrumb'
import { Common } from '~/common/types'

@Component({
  components: {
    eMenu,
    eSide
  }
})
export default class extends Vue {
  @State(state => state.menu.show) show

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-06 11:23:43  
   * @Desc:   根据路由获取面包屑 
   * @Parm:    
   */  
  get breadcrumbs (): Common {
    return BREADCRUMBS[this.$route.path]
  }
}
</script>

<style lang="less" scoped>
.e {
  height: 100vh;
  background-color: #f5f7f9;
  .e-body {
    width: 100%;
    height: 100%;
  }
  .e-flex {
    height: calc(~"100% - 64px");
  }
  .e-flex-row {
    height: 100%;
  }
  .e-home {
    height: 100%;
    width: 100%;
  }
}
</style>
