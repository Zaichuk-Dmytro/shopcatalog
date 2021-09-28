<template>
  <product-short-information 
    :infoProduct="product"
  >
    <message-wrapper
      text="Раздел в разработке"
    />
  </product-short-information>
</template>

<script>
export default {
  name: 'questions',
  props: {
    product: Object
  },
}
</script>

<style lang="scss" scoped>

</style>