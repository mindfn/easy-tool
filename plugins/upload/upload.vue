<script>
  /**
   * 上传组件
   * v1.0.0
   * props参数说明
   * @param {string} action 上传的地址（必填）
   * @param {string} text   上传按钮中的文字
   * @param {string} type   上传的类型       可选：1、primary（主要类型）
   * @param {Object} data   额外附带的参数
   * @param {string} name   文件对应的字段（默认"file"）
   * @param {string} icon   上传的图标
   * @param {Boolean} disabled  是否禁用（默认false）
   * @param {Boolean} multiple  是否支持多选（默认false）
   * @param {Function} on-success    上传成功的钩子  function(response, file)
   * @param {Function} before-upload 上传前的钩子 function(file)
   * @param {Function} change 文件选择变化钩子 function(filename)
   * @param {Function} reset 清空表单数据 function()
   * @param {Boolean}  auto-upload   是否自动上传（默认是），为false时可以手动调用$refs中的submit方法
   */
  export default {
    name: 'HUpload',
    data () {
      return {
        randomId: ''
      }
    },
    props: {
      action: String,              // 上传的地址
      text: String,                // 上传按钮的文字信息
      type: String,                // 上传组件的风格样式
      data: Object,                // 额外附带的参数
      name: {                      // 文件对应的字段
        type: String,
        default: 'file'
      },
      icon: String,                // 上传的图标
      disabled: Boolean,           // 是否禁用
      multiple: Boolean,           // 是否支持多选
      'on-success': Function,      // 上传成功的钩子 function(response, file)
      'before-upload': Function,   // 上传前的钩子   function(file)
      'auto-upload': {             // 是否自动上传
        type: Boolean,
        default: true
      }
    },
    computed: {
      iframeId () {
        return `__x_upload_iframe__${this.randomId}`
      },
      formId () {
        return `__x_upload_form__${this.randomId}`
      },
      uploadType () {
        if (!this.type) return ''
        return `x-upload-${this.type}`
      },
      uploadDisabled () {
        if (!this.disabled) return ''
        return `x-upload-disabled`
      },
      uploadData () {
        // 将传入的对象转为[{key:xx,value:xx},{key:xx,value:xx}, ...]的形式,方便模板中解析
        let arr = []
        for (let key in this.data) {
          let obj = {}
          obj.key = key
          obj.value = this.data[key]
          arr.push(obj)
        }
        return arr
      }
    },
    methods: {
      fileUpload () {
        // 调用可以设置是否自动提交，默认自动提交
        // 如果是手动提交，调用需要设置ref="upload"后，手动调用this.$ref.upload.submit方法
        if (this.autoUpload) this.submit()
        let fileInput = document.getElementById(this.formId)
        let file = fileInput.value
        file = file.split('\\')
        this.$emit('change', file[file.length - 1])
      },
      submit () {
        if (this.disabled) return
        let fileInput = document.getElementById(this.formId)
        let iframe = document.getElementById(this.iframeId)
        let file = fileInput.value
        // （手动上传的情况下，文件为空的情况处理）
        if (!file) return

        // 文件上传之前的钩子
        // @param {string} file 上传的文件
        if (this.beforeUpload) {
          let canUpload = this.beforeUpload(file)
          if (canUpload === false) {
            fileInput.value = ''
            return
          }
        }
        fileInput.parentNode.submit()
        // 给iframe绑定登录时间
        // 当请求结束以后，解析iframe中返回的内容，并且触发on-success事件
        iframe.onload = () => {
          let response = ''
          try {
            if (iframe.contentWindow) {
              response = JSON.parse(iframe.contentWindow.document.body.innerText)
            } else if (iframe.contentDocument) {
              response = JSON.parse(iframe.contentDocument.document.body.innerText)
            }
          } catch (err) {
            throw err
          } finally {
            // 不管是否有报错，将input的值重置
            // 因为部分浏览器下，不重置将无法重复提交相同的文件
            // fileInput.parentNode.reset()
          }

          // 请求成功时的钩子
          // @param {Object} response 响应结果
          // @param {String} file 上传的文件
          if (this.onSuccess) this.onSuccess(response, file)
        }
      },
      reset () {
        let fileInput = document.getElementById(this.formId)
        fileInput.parentNode.reset()
      }
    },
    // TODO 关于这里为什么要用created做一个说明
    // 起初想用mounted的，但发现动态赋予form和iframe的id值存在BUG，导致form表单提交的时候不能提交到target的iframe上
    // 如果想用mounted，可以将表单的相关id写死，但如果一个页面存在多处提交组件就会出问题
    created () {
      // 由于组件需要涉及到id，为保证每个组件产生的id不同，采用的方式为：
      // 取当前时间时间戳，用字符串拼接的形式，加上1000以内一个随机数。这样出现重复几乎不可能
      this.randomId = new Date().getTime().toString() + Math.floor(Math.random() * 1000)
    }
  }
</script>

<template>
  <div class="x-upload" :class="[uploadType, uploadDisabled]">
    <form class="x-upload-form" :action="action" method="post" enctype="multipart/form-data" :target="iframeId">
      <label class="x-upload-label" :for="formId">
        <!-- TODO 这里说明下为什么不用slot插槽 -->
        <!-- 确实此处用slot更方便调用时去定制内容和样式，但是存在2个问题 -->
        <!-- 1、如果用户填入的是button等按钮时，点击button表单会自动提交 -->
        <!-- 2、由于此处模拟触发input-file的是label标签，当label标签中存在a等标签时，会被a等标签的事件覆盖掉，无法触发上传 -->
        <i :class="icon" v-if="icon"></i> {{ text }} 
      </label>
      <input type="file" class="x-upload-input" :id="formId" :name="name" :multiple="multiple" @change="fileUpload" v-if="!disabled">
      <input type="hidden" v-for="item in uploadData" :key="item.key" :name="item.key" :value="item.value">
    </form>
    <iframe class="x-upload-iframe" :id="iframeId" :name="iframeId"></iframe>
  </div>
</template>

<style lang="less" scoped>
// 蓝色 primary
@primary: #20a0ff;
@primary-lighter: lighten(@primary, 10%);
@primary-light: lighten(@primary, 5%);
@primary-dark: darken(@primary, 5%);
@primary-darker: darken(@primary, 10%);
.x-upload {
  display: inline-block;
  // .no-select;
  
  // 组件风格
  &.x-upload-primary {
    .x-upload-label {
      padding: 8px 12px;
      line-height: 1;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
      background: @primary;
      cursor: pointer;
      &:hover {
        background: @primary-light;
      }
      &:active {
        background: @primary-dark;
      }
    }
  }

  // 组件默认风格
  &.x-upload-default {
    label {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: none;
      color: #878d99;
      margin-right: 8px;
      padding: 8px 15px;
      border-radius: 2px;

      &:hover {
        color: #555a65;
        border-color: #c4c4c4;
      }

      &:active {
        color: #878d99;
        border-color: #878d99;
        outline: 0;
      }
    }
  }

  .x-upload-label {
    i {
      color: @primary;
      cursor: pointer;

      &:focus {
        color: #878d99;
      }

      &:active {
        color: #878d99;
      }
    }
  }
  
  .x-upload-input {
    /* 让file上传的input不显示，由label代替触发 */
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .x-upload-iframe {
    position: absolute; 
    top: -9999px; 
    left: -9999px;
  }

  // 禁用样式
  &.x-upload-disabled {
    .x-upload-label,
    .x-upload-label:hover {
      // background: #ccc;
      cursor: not-allowed;
      i {
         cursor: not-allowed;
      }
     
    }
  }
}
</style>
