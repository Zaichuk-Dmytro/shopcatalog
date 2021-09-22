<template>
  <custom-dialog 
    title="Корзина"
    class="cart"
  >
    <div class="list-goods">
      <cart-item
        v-for="(item, index) in cart"
        :key="index"
        :cartItem="item"
      >
      </cart-item>
      <list-component-empty 
        v-if="!visibleElement"
        modalImg="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
        modalHeader="Корзина пуста"
        modalCaption="Но это никогда не поздно исправить :)"
      />
    </div> 
    <div 
      class="cart__footer"
      v-if="visibleElement"
    >
      <button 
        class="return-shopping"
        @click="$root.$emit('hideOverlay')"
      >
        Продолжить покупки
      </button>
      <div class="wrapper__complete-order">
        <span class="total-price">
          {{formatPrice(totalPrice)}} 
          <span class="banknote">₴</span> 
        </span>
        <button class="complete-order">
          Оформить заказ
        </button>
      </div>
    </div>  
  </custom-dialog>
</template>

<script>
import {modalMixin} from './mixins'
export default {
  name: 'cart',
  data: () => ({
   
  }),
  mixins: [
    modalMixin
  ],
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      return this.cart.reduce((value, item) => {
        return  value += item.count * item.price
      }, 0)
    },
    visibleElement() {
      return !!this.cart.length
    }
    
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>

  .cart{
    width: 900px;
    height: 540px;
   

    :last-child.list-goods{
      height: 100%;
    }
    
    .list-goods{
      padding: 16px;
      padding-top: 0;
      height: calc(100% - 100px); ;
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba($color: #000000, $alpha: 0.5) transparent;
      &::-webkit-scrollbar {width: 8px;}
      &::-webkit-scrollbar-track-piece { background: white;}
      &::-webkit-scrollbar-thumb {
        background-color: rgba($color: #000000, $alpha: 0.3);
        border-radius: 4px;
      }
    }
    
    .cart__footer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      height: 100px;
      padding: 16px;
      padding-top: 0;
      
      .return-shopping{
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        box-shadow: inset 0 0 0 1px #ebebeb;
        color: #3e77aa;
        height: 40px;
        font-size: 16px;
        padding: 5px 10px;
        margin-left: 10px;
        cursor: pointer;
      }
    
      .wrapper__complete-order{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #fff;
        background-color:rgba(0,160,70,.1);
        border: 1px solid #00a046;
        border-radius: 4px;
        height: 100%;
        padding: 24px;

        .total-price{
          font-size: 36px;
          margin-right: 20px;

          .banknote{
            font-size: 20px;
          }
        }

        .complete-order{
          background-color: #00a046;
          color:#fff;
          font-size: 18px;
          padding: 0 10px;
          height: 40px;
          border-radius: 4px;

          &:hover {
            background-color: #00bc52;
          }
        }
      }
    }
  }
</style>