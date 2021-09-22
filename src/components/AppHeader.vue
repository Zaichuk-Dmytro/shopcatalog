<template>
  <header class="app-header">
    <div class="wrapper">
      <icon-btn
        class="mdi-icon"
        icon="mdi-menu"
        @click="showOverlay"
      ></icon-btn>
      <router-link class="logo" to="/">LOGO</router-link>
      <button class="header__btn-catalog">
        <icon-btn
          class="mdi-icon"
          icon="mdi-grid-large"
        >
        </icon-btn>        
        <span>Каталог</span>
      </button>
      <div class="header-search">
        <input class="search__input" type="text" placeholder="Я шукаю...">
        <button class="search__btn">Знайти</button>
      </div>
      
      <div class="header-language">
        <button>
          <span>RU</span>
        </button>  
        <span>|</span>
        <button>
          <span>UA</span>
        </button>
      </div>
      
      <div class="header-actions">
        <badge 
          :value="lengthItemsInComparison"
        > 
          <icon-btn
            class="mdi-icon"  
            @click="showOverlay('comparison')"
            icon="mdi-scale-balance"
          >
          </icon-btn>
        </badge>
        <icon-btn
            class="mdi-icon"
            icon="mdi-heart-outline"
        >
        </icon-btn>
        <badge 
          :value="lengthItemsInCart"
        >
          <icon-btn
            class="mdi-icon"
            @click="showOverlay('cart')"
            icon="mdi-cart-outline"
          >
          </icon-btn>
        </badge>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    showOverlay(options) {
      this.$root.$emit('showOverlay', options)
    },
  },
  computed: {
    lengthItemsInCart() {
      return this.$store.getters.getCart.length
    },
    lengthItemsInComparison() {
      let comparison = this.$store.getters.getComparison
      
      return comparison.reduce((value, elem) => {
        return value += elem.items.length
      }, 0)
    },
  }
}
</script>

<style lang="scss" scoped>
  .app-header{
    height: 72px;
    color: #fff;
    background-color: #221f1f;
    font-size: 24px;
    padding: 16px 0;

    .wrapper{
      max-width: 1500px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto;
      
      .logo{
        width: 160px;
        margin-left: 20px;
      }

      .header__btn-catalog{
        display: flex;
        align-items: center;
        color: #fff;
        background-color: #4E4C4C;
        border-radius: 4px;
        padding: 8px 12px;
        margin-right: 24px;
        font-size: 16px;

        .mdi-icon{
          margin-right: 5px;
          padding: 0;
        }
      }

      .header-search{
        display: flex;
        height: 100%;
        margin-right: 32px;

        .search__input{
          width: 600px;
          padding-left: 16px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          outline: none;
          border: none;
        }

        .search__btn{
          background-color: #00a046;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          padding-left: 16px;
          padding-right: 16px;
          border: none;
          transition:  0.3s;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
          

          &:hover{
            background-color: #00bc52;
          }
        }  
      }

      .header-language{
        display: flex;
        align-items: center;
        margin-right: 32px;

        button{
          font-size: 16px;
          color: #fff;
        }
      }

      .header-actions{
        display: flex;
        height: 100%;        
      }

      .mdi-icon{
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        transition:  0.3s;
        margin-right: 16px;
        color: #fff;
        font-size: 24px;
      }

      .mdi-icon:hover:not(.search__btn){
        background-color: #4E4C4C;
        border-radius: 3px;
      }
    }
  }
</style>