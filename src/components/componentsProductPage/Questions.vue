<template>
  <content-wrapper 
    :infoProduct="product"
  >
    <div class="wrapper"> 
      <div class="reviews">
        Раздел в разработке
      </div>  
   </div>
  </content-wrapper>
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