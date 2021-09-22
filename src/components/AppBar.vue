<template>
  <div class="app-bar">
   
    <ul class="menu-categories">
      <li 
        v-for="(item, index) in menuCategories" 
        :key="index"
        class="menu-categories__item"
      > <div>
          <span 
            :class="item.icon"
            class="menu-categories__icon"
          ></span>
        </div>
        <router-link 
          class="menu-categories__link"
          :to="{
            name: 'catalog', 
            params: {name: item.name}
          }"
        >
          {{item.text}}  
        </router-link>
      </li>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'app-bar',
  data: () => ({
    
  }),
  computed: {
    menuCategories() {
      return this.$store.getters.getMenuCategories
    },
  }
}
</script>

<style lang="scss" scoped>
  .app-bar{
    width: 250px;
    height: 300px;
    border-right: 1px solid #e9e9e9;
    padding: 10px;
    
    .menu-categories{
      .menu-categories__item{
        display: flex;
        color: #3e77aa;
        font-size: 18px;
        padding: 4px;
      

        .menu-categories__link{
          text-decoration: none;
          margin-left: 8px;
         
          &:visited{
            color: #3e77aa;
          }
          &:hover{
            text-decoration: underline;
            color: #f84147;
          }

        }

        .menu-categories__icon{
          color: #adb8c8;
        }
      }
    }
  }
</style>