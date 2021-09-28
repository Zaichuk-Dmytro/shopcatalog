<template>
  <div class="product-page">
    <div class="page__header">
      <div class="breadcrumbs">
        <router-link 
          :to="{ name: 'homepage'}"
        >
          <span class="mdi mdi-home-outline"></span>
        </router-link>
          <span class="mdi mdi-chevron-right"></span>
        <router-link 
          :to="{ name: 'catalog', params: {name: $route.params.name}}"
        >
          {{product.category}}
        </router-link>
      </div>
      <div class="name__product">
        {{product.title}}
      </div>
    </div>
    <div class="wrapper__menu-product-component">
      <ul class="menu-product-component">
        <li
          class="tab"
          v-for="(item, index) in tabs" 
          :key="index"
        >
          <button 
            class="tab-name"
            @click="editNameComponent(item.value)"
            :class="{ 'active' : component == item.value}"
          >
            {{item.title}}
          </button>
        </li>
      </ul>
    </div>
    <div class="product-page__content">
      <component
        v-if="component && product.id"
        :is="component"
        :product="product"
      ></component>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product-page',
  data: () => ({
    product: {},
    component: 'product-information',
    tabs: [
      {title: 'Все о товаре', value: 'product-information'},
      {title: 'Характеристики', value: 'product-characteristics'},
      {title: 'Отзывы', value: 'reviews'},
      {title: 'Вопросы', value: 'questions'},
      {title: 'Фото', value: 'photo'},
    ]
  }),
  computed: {
    type() {
      return this.$route.params.name
    }
  },
  methods: {
    editNameComponent(editName) {
      this.component = editName
    },
  },
  async created() {
    this.product = await this.$store.dispatch('getItemById', {type: this.type, id: this.$route.params.id}) 
    if ( !this.product) {
      this.$router.push({path: '/error'})
    }
    await this.$store.commit('addViewedProduct', this.product)
  },  
}
</script>

<style lang="scss" scoped>
  .product-page{
    margin: 0 auto;
    

    .page__header{
      max-width: 1500px;
      margin: 0 auto;
      padding: 20px 0;
      
      .name__product{
        font-size: 36px;
      }

      .breadcrumbs {
        margin-bottom: 16px;

        * {
          font-size: 18px;
          color: #3e77aa;
        }
        
      }
    }

    .wrapper__menu-product-component{
      width: 100%;
      background-color: #f5f5f5;

      .menu-product-component{
        max-width: 1500px;
        margin: 0 auto;
        height: 35px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        .tab{
          height: 100%;
          padding: 0 8px;
        }

         .tab-name {
          height: 100%;
          font-size: 14px;
          color: #3e77aa;
          margin-right: 14px;
          cursor: pointer;
        }

        .tab-name:hover{
          box-shadow: inset 0 -2px 0 0 #00a046;
          color: #00a046;
        }
         .tab-name.active{
            box-shadow: inset 0 -2px 0 0 #00a046;
            color: #00a046;
         }
         
      }
    }

    .product-page__content{
      max-width: 1500px;
      margin: 0 auto;
      height: 100vh;

    }
  }  
</style>