<template>
  <div 
    class="wrapper__short-product-cards"
    
  >
    <div class="title-category">{{title}}</div>
    <div class="wrapper">
      <div 
        class="short-product-card"
        v-for="(item, index) in viewed" 
        :key="index"
      >
        <router-link
          class="wrapper__photo-product"
          :to="{
              name: 'productPage',
              params: {name: item.id_category, id: item.id}
            }"  
        >
          <img 
            :src="item.img[0]"
            class="photo-product"  
          >
        </router-link>
        <div class="wrapper__title_product">
          <router-link class="title_product"
            :to="{
              name: 'productPage',
              params: {name: item.id_category, id: item.id}
            }"  
          >
            {{ item.title}}
          </router-link>
        </div>
        <div class="price-product">
          <span
            v-if="item.old_price"
            class="old-price-product"  
          >
            {{formatPrice(item.old_price)}} 
            <span class="banknote">₴</span> 
          </span>
          <span 
            class="price-product"
            :class="item.old_price ? 'price-color' : ''"
          >
            {{formatPrice(item.price)}} 
            <span class="banknote">₴</span>
          </span>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import {modalMixin} from './mixins'

export default {
  name: 'short-prosuct-cards',
  mixins: [
    modalMixin
  ],
  data: () => ({
    arr: [],
  }),
  props: {
    viewed: Array,
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .wrapper__short-product-cards{
    width: 100%;
    box-sizing: content-box;

    .title-category{
      font-size: 24px;
      margin: 25px 0;
    }
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      

      .short-product-card{
        min-width: 201px;
        max-width: 201px;
        padding: 16px;
        border-right: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;

        .wrapper__photo-product{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 170px;
          margin-bottom: 16px;          

          .photo-product{
          max-width: 100%;
          max-height: 170px;
          }
        }

        .wrapper__title_product{
          height: 35px;
          overflow: hidden;
          margin-bottom: 12px;

          .title_product{
            color: #000;
            text-decoration: none;

            &:hover {
              color: #f84147;
              text-decoration: underline;
            }
          }
        }

        .price-product{
          display: flex;
          flex-direction: column;
          height: 40px;

          .old-price-product{
            font-size: 14px;
            color: #797878;
            text-decoration: line-through;
          }

          .price-product{
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            font-size: 20px;

            .banknote {
              font-size: 16px;
              margin-left: 4px;
            }
          }

          .price-color{
            color: #f84147;
          }
        }
      }
    }
    
  }
</style>