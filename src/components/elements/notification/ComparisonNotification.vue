<template>
  <div class="comparison-notification">
    <span>Товар добавлен в <span class="link">сравнение</span></span>
  </div>
</template>

<script>
export default {
  name: 'comparison-notification'
}
</script>

<style lang="scss" scoped>
  .comparison-notification {
    .link{
      color:#3e77aa;
      cursor: pointer;
    }
  }
</style>