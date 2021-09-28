<template>
<transition name="slide-menu">
  <div 
    v-if="visible"
    class="slide-menu" 
  >
    <div class="slide-menu__header">
      <div class="header__title">
        <span>LOGO</span>
        <button 
          class="btn-close"
          @click="$root.$emit('hideOverlay')"
        >
          <span class="mdi mdi-close"></span>
        </button>
      </div>
      <div class="block-authorization">
        <span class="mdi mdi-account-circle"></span>
        <div class="wrapper">
          <div class="btn__authorization">
            <button class="btn__come-in">Вход</button>
            <span class="padding">|</span>
            <button class="btn__registration">Регистрация</button>
          </div>

          <div class="info__text">
           <span>Авторизуйтесь для получения расширенных возможностей</span> 
          </div>
        </div>
      </div>
    </div>
    <div class="slide-menu__category">
      <ul class="category__list">
        <li
          v-for="(item, index) in menuItem" 
          :key="index"
          class="list-item"
          :class="item.disabled ? 'disabled-list-item' : ''"
          
        >
          <button
          @click="showOverlay(item.component)"
            class="item__btn"
            :class="item.disabled ? 'disabled-item__btn' : ''"
          >
            <span 
              :class="item.icon"
              class="item__btn-icon"  
            ></span>
            <span class="item__btn-text">{{item.text}}</span>
            <span
              class="slide-menu__badge"
              v-if="item.id == 3 && lengthCart "
            >
              <span class="wrapper__badge">
                {{lengthCart}}
              </span>
            </span>
            <span
              class="slide-menu__badge"
              v-if="item.id == 5 && lengthComparison"
            >
              <span class="wrapper__badge">
                {{lengthComparison}}
              </span>
            </span>
          </button>
          
        </li>
      </ul>
    </div>
    <div class="slide-menu__account-options">
      <div class="option-language">
        <span class="options_text">Язык</span>
        <div class="option__btn">
          <button class="btn-ru">RU</button>
          <button class="btn-ua">UA</button>
        </div>
      </div>
      <div class="option-cities">
        <span class="options_text">Город</span>
        <span>Киев</span>
      </div>
    </div>
    <div class="slide-menu__company-information">
      <ul class="company-information__list">
        <li
          class="company-information__list-item"
          v-for="(item, index) in companyInformation" 
          :key="index"
        >
          {{item}}
        </li>
      </ul>
    </div>

    <div class="slide-menu__support">
      <ul class="support__list">
        <li
           class="support__list-item"
          v-for="(item, index) in support" 
          :key="index"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </div> 
</transition>
</template>

<script>
export default {
  name: 'app-left-menu',
  data: () => ({
    visible: false,
    menuItem: [
      {id: 1, icon: 'mdi mdi-grid-large', text: 'Каталог товаров', disabled: true},
      {id: 2, icon: 'mdi mdi-book', text: 'Мои заказы', disabled: true}, 
      {id: 3, component: 'cart', icon: 'mdi mdi-cart-outline', text: 'Корзина', disabled: false},
      {id: 4, icon: 'mdi mdi-heart-outline', text: 'Списки желаний', disabled: true},
      {id: 5, component: 'comparison', icon: 'mdi mdi-scale-balance', text: 'Сравнение', disabled: false},
      {id: 6, icon: 'mdi mdi-account-check', text: 'Забрать заказ', disabled: true},    
      {id: 7, icon: 'mdi mdi-message', text: 'Справочный центр', disabled: true},
      {id: 8, icon: 'mdi mdi-phone', text: '+38 011 111 11 11', disabled: true},            
    ],
    companyInformation: [
      'Информация о компании',
      'О нас',
      'Условия использования сайта',
      'Вакансии',
      'Контакты',
    ],
    support: [
      'Помощь',
      'Доставка и оплата',
      'Кредит',
      'Гарантия',
      'Возврат товара',
      'Сервисные центры',
    ]

  }),
  methods: {
    showOverlay(options) {
      if (!options) {
        return 
      }
      this.$root.$emit('showOverlay', options)
    },
  },
  computed: {
    lengthCart() {
      return this.$store.getters.lengthCart      
    },
    lengthComparison() {
      return this.$store.getters.lengthComparison
    
    },
  },
  created() {
    setTimeout(() => {
      this.visible = true
    })
    /////список городов Украины
    // async apiSity() {
    //   let response = await fetch('https://api.hh.ru/areas/5')
    //   let rez = await response.json()
    //   console.log(rez.areas)
    // }
  }
}
</script>

<style lang="scss" >
  .slide-menu{
    position: absolute;
    left: 0px;
    width: 320px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    color: #221f1f;

    .slide-menu__header{
      width: 100%;
      color: #fff;
      background-color: #221f1f;

      .header__title{
        display: flex;
        justify-content: space-between;
        padding: 12px;

        .btn-close{
          cursor: pointer;
          color: #fff;

          &:hover{
            color: #f84147;
          }
        }
      }

      .block-authorization{
        padding: 12px;
        display: flex;
        
        .mdi{
          font-size: 50px;
          margin-right: 10px;
        }
        .wrapper{
          display: flex;
          flex-direction: column;
          justify-content: center;

          .btn__authorization{
            .padding{
              padding: 0 10px;
            }

            .btn__come-in, .btn__registration{
              padding: 0;
              color: #fff;
            } 
          }
          
          .info__text{
            margin-top: 4px;
            color: #a6a5a5;
            font-size: 12px;
          }
        }
      }
    }

    .slide-menu__category{
      color: #000;
      background-color: #fff;
      padding: 4px 8px;
      border-bottom: 1px solid #e9e9e9;

      .category__list{
        .list-item{
          cursor: pointer;
          height: 47px;
          border-radius: 4px;
                    
          &:not(:last-child){
            margin-bottom: 4px;
          }
          &:hover{
            background-color: #d0ecdb;
          } 
          
          .item__btn{
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 16px;
            padding: 8px;  
            width: 100%;
            height: 100%;
            color: #221f1f;

            .item__btn-icon{
              font-size: 26px;
              margin-right: 16px;
            }

            .slide-menu__badge{
              display: flex;
              justify-content: flex-end;
              align-items: center;
              width: 100%;
              height: 100%;
              
              .wrapper__badge{
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
                color: #fff;
                background-color: #00a046;
                border-radius: 10px;
                font-size: 14px;
                height: 20px;
                min-width: 20px;
                padding: 0 4px;
              }
            }
          }

          .disabled-item__btn{
            color: grey;
          }
        }
        .disabled-list-item{
          &:hover{
            background-color: #e5e5e5;
          }

        }
      }
    }
    .slide-menu__account-options{
      border-bottom: 1px solid #e9e9e9;
      padding: 20px;
      color: #797878;

      .options_text{
        font-size: 16px;
        margin-right: 40px;
      }

      .option-language{
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        .option__btn{
          .btn-ru, .btn-ua{
            cursor: pointer;
            padding: 8px 10px;
            border-radius: 4px;
          }
          .btn-ru{
            border: 1px solid #00a046;
            background-color: #e5f5ec;
            margin-right: 8px;
          }
          
          .btn-ua{
            border: 1px solid #e9e9e9;
          }
          

        }
      }
      .option-cities{
        ///////////////////////////////////////////////////////////////////////////
      }
    }

    .slide-menu__company-information,  .slide-menu__support{
      border-bottom: 1px solid #e9e9e9;
      padding: 4px 8px;

      .company-information__list, .support__list{
        padding: 0 8px;
        
        .company-information__list-item, .support__list-item{
          
          display: flex;
          align-items: center;
          padding: 8px;
          height: 32px;
          font-size: 14px;
          color: #221f1f;

          &:first-child{
            height: 40px;
          color:#797878;
          }
        }
      }
    }
      
    
    
  }
  
  .slide-menu-enter-active, .slide-menu-leave-active{
    transition: all .3s ease;
  }
  .slide-menu-enter, .slide-menu-leave-to  {
    left: -1000px;
  }

</style>