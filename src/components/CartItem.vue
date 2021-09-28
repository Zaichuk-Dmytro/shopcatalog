<template>
  <div class="cart-item-list__wrapper">
    <div class="cart-item">
      <div class="cart-item__img">
        <img :src="cartItem.img[0]" alt="">
      </div>
      <div class="cart-item__title">
        <span>
          {{cartItem.title}}
        </span>
      </div>
      <div class="options-menu__wrapper">
        <button 
          class="options-menu__btn"
          @click.stop="showOptionMenu"
        >
          <span class="mdi mdi-dots-vertical"></span>
        </button>
        <div 
          v-if="visibleMenuOption"
          class="options-menu"
        >
          <ul class="options-menu__list">
            <li 
              class="options-menu__items"
              v-for="(item, index) in itemOptionMenu" 
              :key="index"
            >
              <span 
                :class="item.icon"
                class="options-menu__icon"
              ></span>
              <span 
                class="option_menu__description"
                @click="item.event"
              >
                {{item.text}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cart-item__footer">
      <div class="cart-item__servises">
        Дополнительные услуги
      </div>
      <div class="cart-item__count">
        <button>
          <span 
            class="mdi mdi-minus"
            @click="editCountItemCart(false)"
          >
          </span>
        </button>
        <input 
          class="castom-input" 
          type="number" 
          min="1"
          max="10"
          @input="rangeValueForInput"
          v-model="cartItem.count"
        >
        <button>
          <span 
            class="mdi mdi-plus"
            @click="editCountItemCart(true)"
          >
          </span>
        </button>
      </div>
      <div class="cart-item__price">
        {{formatPrice(calculatedPrice)}} 
        <span>₴</span>       
      </div>
    </div>
  </div>
</template>

<script>
import {modalMixin} from './mixins'
export default {
  name: 'cart-item',
  data ()  {
    return {
      visibleMenuOption: false,
      itemOptionMenu: [
        {icon: 'mdi mdi-delete', text: 'Удалить', event: this.removeItemFromCart},
        {icon: 'mdi mdi-heart-outline', text: 'В список желаний',  event: ''}
      ],
    }
  },
  mixins: [ 
    modalMixin 
  ],
  props: {
    cartItem: Object,
  },
  methods: {
    showOptionMenu() {
      this.visibleMenuOption = true
    },
    hideOptionMenu() {
      this.visibleMenuOption = false
    },
    editCountItemCart (option) {
      if (option) {
        this.cartItem.count++  
      } else {
        this.cartItem.count--  
      }
      this.rangeValueForInput()
      this.$store.commit('addCartToStorage')
    },
    rangeValueForInput() {
      let count = this.cartItem.count
      if (count <= 1) {
        this.cartItem.count = 1
      } 
      if (count >= 100) {
        this.cartItem.count = 100
      }
    },
    removeItemFromCart() {
      this.$store.commit('removeItemFromCart', this.cartItem.id)
    }
  },
  computed: {  
    calculatedPrice() {
      return this.cartItem.count * this.cartItem.price 
    }  
  },
  mounted() {
    this.$root.$on('hideOptionMenu', this.hideOptionMenu)
  }
}
</script>

<style lang="scss" scoped>
  .cart-item-list__wrapper{
    position: relative;
    width: 100%;
    padding: 10px;
    padding-bottom: 20px;
    
    
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
    
    .cart-item{
      display: flex;
      
      
      .cart-item__img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;

        img{
          max-height: 100%;
          max-width: 100%;
          cursor: pointer;
        }
      }

      .cart-item__title {
        width: 100%;
        padding: 10px;
        font-size: 14px;

        span:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .options-menu__wrapper{
        
        .options-menu__btn{
          font-size: 24px;
          color: #3e77aa;
          cursor: pointer;

          &:hover{
            color: #f84147;
          }
        }

        .options-menu{
          position: absolute;
          top:0;
          right: 0;
          padding: 16px;
          background-color: #fff;
          box-shadow: 0px 0px 5px 2px #9E9E9E;

          .options-menu__list{
            .options-menu__items{
              font-size: 16px;
              color: #3e77aa;
              cursor: pointer;

              &:first-child{
                margin-bottom: 14px;
              }
              &:hover{
                color: #f84147;
              }

              .options-menu__icon{
                margin-right: 10px;
              }
              .option_menu__description{

              }
            }
          }
        }
      }
    }

    .cart-item__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 100px ;
      font-size: 20px;
      
      .cart-item__servises{
        font-size: 16px;
        color: #3e77aa;
        width: 33%;
        
      }

      .cart-item__count{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 33%;
       

        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
          
        }
        .castom-input{
          outline: none;
          width: 50px;
          height: 35px;
          margin-left: 4px;
          margin-right: 4px;
          text-align: center;
        }

        .mdi-plus, .mdi-minus{
          font-size: 26px;
          color: #3e77aa;
        }
      }
      
      .cart-item__price{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 20px;
        width: 33%;
      }
    }
  }
</style>