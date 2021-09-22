<template>
  <div 
    class="custom-dialog"
    @click="$root.$emit('hideOptionMenu')"
  >
    <div class="custom-dialog__header">
      <span>{{title}}</span>
      <button 
        class="btn-close"
        @click="$root.$emit('hideOverlay')"
      >
        <span class="mdi mdi-close"></span>
      </button>
    </div>
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-dialog',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
$height-custom-dialog__header: 61px;
  .custom-dialog{
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    .wrapper{
      height: calc(100% - #{$height-custom-dialog__header});
      
    }
    .custom-dialog__header{
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: #221f1f;
      border-bottom: 1px solid #e9e9e9;
      height: $height-custom-dialog__header;
      padding: 16px;

      .btn-close{
        display: flex;
        align-items: flex-end;
        border: none;
        background-color: #fff;

        .mdi-close{
          display: flex;
          font-size: 24px;
          cursor: pointer;
          
          &:hover{
            color: #f84147;
          }
        }
      }
    }
  }
</style>