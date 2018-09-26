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
import { Common } from '~/common/types'

@Component({
  components: {
    eMenu,
    eSide
  }
})
export default class extends Vue {
  @State(state => state.menu.show) show
}
</script>

<style lang="less">

body {
  overflow: hidden;
}

.e {
  height: 100vh;
  background-color: #f5f7f9;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Tahoma, "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  
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

.page-container {
  .mu-avatar {
    &:hover {
      transition: all .3s cubic-bezier(.4,0,.2,1);
      cursor: pointer;
      background: rgb(33, 150, 243);
    }
  }
 
  height: 100%;
  padding: 12px;
  >.mu-card {
    height: 100%;
    .mu-card-header-title  {
      padding-right: 0;
      .mu-card-title {
        font-size: 18px;
      }
    }
    >.row {
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      >.col-4 {
        line-height: 75px;
        text-align: right;
        padding-right: 64px;
        >.mu-input {
          width: 160px;
          margin-right: 32px;
          .fa-search {
            margin-right: 16px;
            color: rgb(189, 189, 189);
          }
          .fa-close {
            cursor: pointer;
            font-size: 18px;
            display: inline-block;
            width: 20px;
            height: 20px;
          }
        }
        >.mu-button {
          vertical-align: middle;
        }
      }
    }
  }
}

.page-body {
  padding: 40px 120px;
  height: calc(~"100% - 102px");
  overflow: auto;
}

.page-body-default {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    display: block;
    margin-bottom: 32px;
  }
  div {
    color: rgba(0, 0, 0, .57);
  }
}


.page-list-edit {
  .mu-button {
    min-width: 40px;
  }
}
</style>
