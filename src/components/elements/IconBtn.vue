<template>
  <button 
    class="icon-btn"
    @click="$emit('click')"
  >
    <span 
      :class="['mdi', icon]"
    ></span>
  </button>  
</template>

<script>
export default {
  name: 'icon-btn',
  props: {
    icon: String
  }
}
</script>

<style lang="scss" scoped>
  .icon-btn{
    cursor: pointer;
  }
</style>