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
  name: 'reviews',
  props: {
    product: Object
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  
  .reviews{
    display: flex;
    justify-content: center;
    font-size: 40px;
    color: #3e77aa;
  }
}
  
</style>