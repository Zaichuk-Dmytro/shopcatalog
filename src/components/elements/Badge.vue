<template>
  <div class="badge">
    <div class="badge-wrapper">
      <slot></slot>
    </div>
    <span 
      v-if="value"
      class="badge__element"
    >
      {{value}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'badge',
  props: {
    value: [String, Number]
  }
}
</script>

<style lang="scss" scoped>
  .badge{
    position: relative;
    display: flex;
    align-items: center;
    
    .badge-wrapper{
      height: 100%;
      
    }

    .badge__element{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 12px;
      background-color: #00a046;
      border-radius: 10px;
      font-size: 12px;
      height: 16px;
      min-width: 16px;
      padding: 0 4px;
      

}
    
  }//#00a046
</style>