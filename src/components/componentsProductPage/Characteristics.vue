<template>
  <content-wrapper 
    :infoProduct="product"
  >
    <div class="test">
      Характеристики
    </div>
  </content-wrapper>
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
.cha{
  width: 200px;
  height: 200px;
  background-color: orange;
}
</style>