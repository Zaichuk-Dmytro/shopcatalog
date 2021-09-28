<template>
  <div class="homepage">
    <app-bar/>
    <home-page-content/>
    
  </div>
</template>

<script>
export default {
  name: 'home-page',
 
}
</script>

<style lang="scss" scoped>
  .homepage {
    display: flex;
    max-width: 1500px;    
    height: max-content;
    min-height: calc(100vh - 172px);
    margin: 0 auto;
  }
</style>