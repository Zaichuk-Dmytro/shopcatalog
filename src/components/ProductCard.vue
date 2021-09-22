<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product__tile-action">
        <icon-btn 
          icon="mdi-heart-outline"
          class="like"
        ></icon-btn>
        <icon-btn 
          @click="addComparison"
          :icon="inComparison ? 'disable-scale' : 'mdi-scale-balance'"
          class="scale-balance"
        ></icon-btn>
      </div>
      <div class="wrapper-product__img">
        <router-link 
          class="product__img-link"
          :to="{
            name: 'productPage',
            params: {name: $route.params.name , id: item.id}
          }"
        >
          <img 
          class="product__img"
          :src="item.img[0]"
          :alt="item.title"
        >
        </router-link>
        
      </div>
      <div 
        class="product__title"
        :title="item.title"
      >
        {{item.title}}
      </div>
      <div class="product__price">
        <div class="product__old_price" >
          {{old_price}}
          <span v-if="old_price">₴</span>
        </div>
        <div class="wrapper__price-cart">
          <div class="product__current_price"
          :class="{'promo': item.old_price}"
          >
            {{formatPrice(item.price)}}
            <span class="sign-currency__price">₴</span>
          </div>
          <icon-btn
            @click="addCart"
            :icon="inCart ? 'mdi mdi-cart ': 'mdi mdi-cart-outline'"
            class="btn-cart"
          >
          </icon-btn>
        </div>
      </div>
      <div class="product__short-description">
        {{item.short_description}}
      </div>
    </div>
  </div>  
  
</template>

<script>
import { modalMixin } from './mixins'
export default {
  name: 'product-card',
  mixins: [ 
    modalMixin 
  ],
  props: {
    item: Object
  },
  computed: {
    old_price() {
      if (this.item.old_price) {
        
        return this.formatPrice(this.item.old_price)
      }
    },
    inCart() {
      let cart = this.$store.getters.getCart
      return cart.find(itemCart => itemCart.id == this.item.id)
    },
    inComparison() {
      let comparison = this.$store.getters.getComparison
      return comparison.find(itemComparison => {
        return itemComparison.items.find(elem => elem.id == this.item.id)
      })
    }
  },
  methods: {
    addCart() {
      if (!this.inCart) {
        this.$store.commit('addCart', this.item)
        this.$root.$emit('showNotification', 'cart-notification')
        
      } else {
        this.$root.$emit('showOverlay', 'cart')
        
      }
    },
    addComparison() {
      this.$store.commit('addComparison', this.item)
      this.$root.$emit('showNotification', 'comparison-notification')
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-card{
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    width: 250px;
    position: relative;

    .product-card__wrapper{
      padding: 12px;
      position: relative;

      .product__tile-action{  
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;  
        top: 0px;
        right: 0px;
        padding-top: 10px;
        height: 65px;
    
        .icon-btn{
          font-size: 22px;
          cursor: pointer;

          &.like{
            color: orange;
          }
          
          &.scale-balance{
            color: grey;        
          }

          .disable-scale{
            display: none;
          }
        }
        
      }
    }
    
    &:hover{
      .product__tile-action{
        padding: 0 11px;
        padding-top: 10px;
      }

      .product-card__wrapper{
        position: absolute;
        left: -10px;
        width: 270px;
        background: #fff;
        padding: 12px 22px;
        z-index: 1;
        box-shadow: 0px 0px 15px 4px #A0A0A0;
      }

      .product__short-description{
        display: block;
      }
    }

    .wrapper-product__img{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 225px;
      margin-bottom: 10px;

      .product__img-link{
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;

        .product__img{
          max-width: 100%;
          max-height: 100%;
          cursor: pointer;
        }
      }
    }
    
    .product__title{
      font-size: 14px;
      height: 35px;
      margin-bottom: 10px;
      overflow: hidden;
      cursor: pointer;

    }
    
    .product__price{

      .wrapper__price-cart{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 225px;


        .btn-cart{
          border: none;
          background-color: #fff;
          font-size:20px;
          cursor: pointer;
          color:#00a046;
         
        }
      }
      
      .product__old_price{
        font-size: 14px;
        height: 19px;
        text-decoration: line-through; 
        color: #686868; 
      }

      .product__current_price{
        display: flex;
        align-items: baseline;
        font-size: 24px;
        line-height: 1;
        color: black;
     
        &.promo{
          color: red;
        }
      
        .sign-currency__price{
          font-size: 16px;
        }
      }
    }
    .product__short-description{
      display: none;
      margin-top: 10px;
      left: 0;
      z-index: 2;
      background-color: #fff;
      font-size: 12px;
     
      
    }
  
    
}
</style>