<template>
  <div class="content-wrapper">
    <slot></slot>
      <div class="purchase-card">
        <div class="card__header">
          <div class="img__wrapper">
            <img :src="infoProduct.img[0]" alt="">  
          </div>
          <div class="purchase-card__title">{{infoProduct.title}}</div>
        </div>
        <div class="info-text">
          <span>Есть в наличии</span>
        </div>
        <fieldset class="card__content">
          <legend 
            class="old-price"
            v-if="infoProduct.old_price"
          >
            {{formatPrice(infoProduct.old_price) + '₴'}}
          </legend>
          <div class="price-block">
            <span 
              :class="infoProduct.old_price ? 'red-price': ''"
            >
              {{formatPrice(infoProduct.price) + '₴'}}
            </span>
           <span>
            <icon-btn
              icon="mdi-scale-balance"
              class="scale"
            >
            </icon-btn>
            <icon-btn
              icon="mdi-heart-outline"
              class="like"
            >
            </icon-btn>
           </span>
          </div>
          <button class="btn-buy">
            Купить
          </button>
          <button class="btn-buy-credit">
            Купить в кредит
          </button>
        </fieldset>
      </div>
  </div>
</template>

<script>
import {modalMixin} from '../mixins'
export default {
  name: 'content-wrapper',
  props: {
    infoProduct: Object
  },
  mixins: [
    modalMixin
  ],
}
</script>
<style lang="scss" scoped>
  .content-wrapper{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    max-width: 1500px ;
    
   
    .purchase-card{
      width: 470px ;
      
      // top: 228px;
      // right: 218px;
     

      .card__header{
        display: flex;
        padding: 16px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        
        .img__wrapper{
          display: flex;
          align-items: center;
          width: 100px;
          height: 100px;
          min-width: 100px;
          
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }

        .purchase-card__title{
          display: flex;
          align-items: center;
          width: 400px;
          padding: 16px;
          font-size: 18px;

        }
      }

      .info-text{
        margin: 20px 0 ;
        color: #00a046;

        span{
          padding: 8px;
          background-color: #f4faf6;
          border-radius: 4px;
        }
      }
      
      .card__content{
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        padding: 16px;
        
        .old-price{
          color: #b8b8b8;
          padding: 0 8px;
          text-decoration: line-through;
        }

        .price-block{
          display: flex;
          justify-content: space-between;
          font-size: 26px;
          margin-bottom: 12px;
          
          .red-price{
            color: #f84147;
          }

          .icon-btn{
            font-size: 26px;
            margin-right: 8px;
            transition: all 0.3s;

            &.scale{
              color: gray;
            }

            &.like{
            color: orange;
            }

            &:hover{
              background-color:#f4faf6;
              border-radius: 4px;
            }
          }
        }

        .btn-buy, .btn-buy-credit{
          width: 100%;
          color: #fff;
          cursor: pointer;
          height: 40px;
          margin-bottom: 8px;
          border-radius: 4px;
          font-size: 18px;
          transition: all 0.3s;
          
        }

        .btn-buy{
          background-color: #00a046;
          
          &:hover{
            background-color: #00bc52;
          }
        }   

        .btn-buy-credit{
          background-color: #3e77aa;

          &:hover{
            background-color: #4096e3;
          }
        }
      }
    }
  }
</style>