<template>
  <div class="catalog-page">
    <div class="name-category">{{nameCategory}}

    </div>
    <div class="wrapper-catalog">
      <catalog-filters></catalog-filters>
          <div class="catalog">
            <product-card
              v-for="(item, index) in items"
              :key="index"
              :item="item"
            ></product-card>
          </div>
    </div>
    <notification/>
  </div>
</template>

<script>
import { modalMixin } from '../components/mixins'


export default {
  mixins: [
    modalMixin
  ],
  data: () => ({
    items: [],
  }),
  computed: {
    type() {
      return this.$route.params.name
    },
    nameCategory() {
      let arrMenuCategories = this.$store.getters.getMenuCategories,
        routeName = this.$route.params.name,
        item = arrMenuCategories.find(item => item.name == routeName)
      if (!item) {
        this.$router.push({name: 'error'})
      } else {
        return item.text
      }
    }
  },
  methods: {
   
  },
  async created() {
    this.items = await this.fetchApi(this.type)
  }

}
</script>

<style lang="scss" scoped>
  .catalog-page{
    max-width: 1500px;
    margin: 0 auto;
    
    
   
    .wrapper-catalog{
      display: flex;
      border-top: 1px solid #dadada;
    }

    .name-category{
      font-size: 24px;
      width: 100%;
      height: 50px;
      position: static;
      
    }
    .catalog{
      display: flex;
      flex-direction: row;
      align-content: flex-start;
      flex-wrap: wrap;
      justify-content: flex-start;
      
     
    }
  }
</style>