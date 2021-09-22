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
        <legend class="old-price-block">
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
        </span>
        <button class="btn-buy">
          <span class="mdi mdi-cart-outline"></span>
          Купить 
        </button>      
        <button class="btn-buy-credit">
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
        <span>Доставка</span>
        <ul>
          <li 
            v-for="(item, index) in delivery" 
            :key="index"
          >
            <span>{{item.where}}</span>
            <span>{{item.when}}</span>
            <span>{{item.price}}</span>
          </li>
        </ul>
      </div>
      <div class="payment-info">
        <span>icon</span>
        <div>
          <span>Оплата.</span> Оплата при получении товара, Картой онлайн, Google Pay,
           Безналичными для юридических лиц, Безналичными для физических лиц, PrivatPay, 
           Apple Pay, Оплата картой в отделении, Кредит, Оплата частями
        </div>
        <div class="warranty-ingo">
          <span>icon</span>
          <div>
            <span>Гарантия. 12 месяцев</span>официальной гарантии от производителя Обмен/возврат 
            товара в течение 14 дней 
          </div>
        </div>
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
      console.log('cmena')
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
          // border: 1px solid rgb(83, 0, 138);

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
        border: 1px solid ;
        font-size: 14px;
        margin-top:50px;
      }

    }

    .product-purchase-description{
      width: 50%;
      // height: 100px;//убрать
      // background-color:orange;
      margin-left: 12px;
      padding: 12px;
      border:1px solid black;

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
        
        .btn-buy, .btn-buy-credit{
          cursor: pointer;
          color: #fff;
          padding: 12px 16px;
          font-size: 14px;
          border-radius: 4px;
        }

        .btn-buy{
          background-color: #00a046;
          margin: 0 20px;
          
          &:hover{
            background-color: #00bc52;
          }
        }

        .btn-buy-credit{
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
        border: 1px solid #e9e9e9;
        border-radius: 4px;
      }
    }
  }
</style>