<template>
  <div class="home-page-content">
    <short-prosuct-cards
    
    v-if="arrViewedProducts.length"
      :viewed="arrViewedProducts"
      title="Последние просмотренные товары"
    ></short-prosuct-cards>
    <message-wrapper
      text="Cо временем здесь появится больше контента"
    />
  </div>
</template>

<script>
export default {
  name: 'home-page-content',

  computed: {
    arrViewedProducts() {
      return this.$store.getters.getLastViewedProducts
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .home-page-content{
    padding-left: 40px;
    width: calc(100% - 250px);
  }

</style>