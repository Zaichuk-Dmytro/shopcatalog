<template>
  <product-short-information 
    :infoProduct="product"
  >
    <div class="photo-content">
      
      <div class="product-title">
        <span class="product-title_color">Фотографии</span>
        {{product.title}}
      </div>
      <ul class="list__item">
        <li
          class="item-photo"
          v-for="(item, index) in imgUrl"
          :key="index"
        >
          <img :src="item"
          class="photo"> 
        </li>
      </ul>
    </div>
   </product-short-information>  
</template>

<script>
export default {
  name: 'Photo',
  props: {
    product: Object
  },
  computed: {
    imgUrl() {
      return this.product.img.map(item => item)
    }
  } 
}
</script>

<style lang="scss" scoped>
  .photo-content{
    width: 100%;

    .product-title{
      color: #d2d2d2;
      font-size: 30px;
         margin-bottom: 40px;

      .product-title_color{
        color: #000;
      }
    }

    .list__item{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item-photo{
      margin-bottom: 100px;
      


      .photo{
        max-width: 600px;
      }
    }
  }


</style>