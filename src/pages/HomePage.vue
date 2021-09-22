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
    height: 2000px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>