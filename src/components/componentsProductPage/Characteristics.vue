<template>
  <product-short-information 
    :infoProduct="product"
  >
    <message-wrapper
      text="Раздел Характеристики в разработке"
    />   
  </product-short-information>
</template>

<script>
export default {
  name: 'product-characteristics',
  props: {
    product: Object
  },
}
</script>

<style lang="scss" scoped>
</style>