<template>
  <div class="product-information">
    <div class="product-description">
      <div class="product-photo">
        <div class="product-small-photos">
          <ul class="photo-list">
            <li 
              class="list__item"
              v-for="(item, index) in imgUrl" 
              :key="index"
              @mouseover="changePhoto(item)"
            >
              <img 
                class="small-photo"
                :src="item" 
                alt="">
            </li>
          </ul>
        </div>
        <div class="product-big-photo">
          <div class="photo-wrapper">
            <img 
              class="big-photo"
              :src="currentImg" 
              alt=""
            >            
          </div>
        </div>
      </div>
      <div class="short-description">
        {{product.short_description}}
      </div>
    </div>
    <div class="product-purchase-description">
      <div class="info-text">
        <span class="text">Есть в наличии</span>
      </div>
      <fieldset class="purchase-card">
        <legend 
          v-if="product.old_price"
          class="old-price-block"
        >
          <span class="wrapper__old-price">
              <span class="old_price">{{formatPrice(product.old_price)}}</span>
              <span class="small-banknote"> ₴</span>
          </span>
        </legend>
        <span class="price"
          :class="product.old_price ? 'price-red': '' "
        >
          <span>{{formatPrice(product.price)}}</span>
          <span class="banknote">₴</span>
        </span
        ><buy-button
            textIcon
            :item="product"/>    
        <button class="buy-btn-credit">
          Купить в кредит
        </button>  
        <icon-btn 
          class="scale"
          icon="mdi-scale-balance"
        ></icon-btn>
        <icon-btn 
          class="like"
          icon="mdi-heart-outline"
        ></icon-btn>
      </fieldset>
      <div class="delivery-info">
        <div class="delivery__text">Доставка</div>
        <ul class="delivery-list">
          <li 
            class="list-item"
            v-for="(item, index) in delivery" 
            :key="index"
          >
            <span class="info-text__where">{{item.where}}</span>
            <span class="info-text__when">{{item.when}}</span>
            <span class="info-text__price">{{item.price}}</span>
          </li>
        </ul>
      </div>
      <div class="payment-info">       
        <span class="payment-info-weight">Оплата.</span> Оплата при получении товара, Картой онлайн, Google Pay,
          Безналичными для юридических лиц, Безналичными для физических лиц, PrivatPay, 
          Apple Pay, Оплата картой в отделении, Кредит, Оплата частями
      </div>
        <div class="warranty-info">
          <span class="warranty-info-weight">Гарантия. 12 месяцев</span>официальной гарантии от производителя Обмен/возврат 
          товара в течение 14 дней 
          
        </div>
      
    </div>
  </div>
</template>

<script>
import {modalMixin} from '../mixins'
export default {
  name: 'product-information',
  props: {
    product: Object
  },
  mixins: [
    modalMixin
  ],
  data: () => ({
    currentImg: '',
    delivery: [
      { where: 'Самовывоз из точек выдачи Rozetka', when: 'Забрать завтра с 10:00', price: 'Бесплатно'},
      {where: 'Самовывоз из отделений почтовых', when: 'Отправим завтра', price: 'Бесплатно'},
      {where: 'Доставка курьером', when: 'Доставка завтра с 18:00', price: 'Бесплатно'}
    ]
  }),
  computed: {
    imgUrl() {
      return  this.product.img
    },
    
  },
  methods: {
    changePhoto(urlChangePhoto) {
      return this.currentImg = urlChangePhoto
    }
  },
  created() {
    this.currentImg = this.imgUrl?.find(item => item)
  },

  
}
</script>

<style lang="scss" scoped>
  .product-information{
    display: flex;
    width: 100%;
    
    .product-description{
      width: 50%;
      margin-right: 12px;

      .product-photo{
        display: flex;
        width: 100%;
        height: 600px;
        
        .product-small-photos{
          display: flex;
          justify-content: center;
          width: 12%;
                    
          .list__item{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid green;
            border-radius: 4px;
            background-color: #fff;
            width: 54px;
            height: 54px;
            margin-bottom: 10px;
            cursor: pointer;
          }

          .small-photo{
            max-width: 100%;
            max-height: 100%;  
          }
        }

        .product-big-photo{
          width: 88%;
          
          .photo-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            .big-photo{
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }

      .short-description{
        font-size: 14px;
        margin-top:50px;
      }

    }

    .product-purchase-description{
      width: 50%;
      margin-left: 12px;
      padding: 12px;
      

      .info-text{
        color: #00a046;
        font-size: 14px;
        
        .text{
          padding: 4px 8px;
          background-color: #f4faf6;
          border-radius: 4px;
        }
      }

      .purchase-card{
        display: flex;
        align-items: center;
        margin: 0;
        margin-top: 20px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        
        .old-price-block{
          color: #e9e9e9;
          font-size: 14px;
          padding: 0 8px;
          
          .wrapper__old-price {
            color: red;
            text-decoration: line-through;
            
            .old_price {
              color: #c7c7c7;
            }

           .small-banknote{
              color: #c7c7c7;
            }
          }
        }

        .price{
          
          font-size: 26px;
        }

        .price-red{
          color: #f84147;
        }
        
        .buy-btn, .buy-btn-credit{
          cursor: pointer;
          color: #fff;
          padding: 12px 16px;
          font-size: 14px;
          border-radius: 4px;
        }

        .buy-btn{
          background-color: #00a046;
          margin: 0 20px;
          
          &:hover{
            background-color: #00bc52;
          }
        }

        .buy-btn-credit{
          background-color: #3e77aa;
          margin-right: 20px;

          &:hover{
            background-color: #4096e3;
          }
        }

        .icon-btn{
          font-size: 24px;
          transition: all 0.3s;
          
          &:hover{
            background-color: #f4faf6;
            border-radius: 4px;
          }
        }

        .scale{
          color: #c7c7c7;
        }

        .like{
          color: orange;
        }
      }

      .delivery-info{
        margin-top: 20px;
        padding: 14px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;

        .delivery__text{
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 10px;

          
        }

        .delivery-list{
          .list-item{
            display: flex;
            font-size: 15px;

            &:not(:last-child){
              margin-bottom: 10px;
            }
            
            .info-text__where{
              width: 45%;
            }
            
            .info-text__when{
              display: flex;
              justify-content: flex-start;
              font-size: 14px;
              font-weight: 600;
              width: 40%;
            }

            .info-text__price{
              display: flex;
              justify-content: flex-end;
              width: 15%;
              color: #00a046;
            }
          }
        }
      }

      .payment-info{
        margin-top:  20px;
        padding: 14px;
        border: 1px solid #e9e9e9;
        .payment-info-weight{
          font-weight: 600;
        }
      }

      .warranty-info{
        border: 1px solid #e9e9e9;
        border-top: none;
        padding: 14px;

        .warranty-info-weight{
          font-weight: 600;
        }
      }
    }
  }
</style>