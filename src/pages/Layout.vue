<template>
  <div class="layout">
    <div class="wrappermain">
      <app-header/>
      <div class="main">
        <router-view/>
      </div>
    </div>
    <overlay/>
  </div>
</template>

<script>
export default {
  name: 'layout',
}
</script>

<style lang="scss" scoped>

  .layout{
    height: 100vh;
    overflow:hidden;

    .wrappermain {
      height: 100vh;
      overflow: auto;

      .main{
        height: calc(100vh - 72px);
        overflow: auto;
        position: relative;
      }
    }
  }  
</style>