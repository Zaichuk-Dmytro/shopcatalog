<template>
  <custom-dialog 
    class="comparison"
    title="Список сравнений"
  > 
    <div class="comparison__list-wrapper">
      <ul class="comparison__list">
        <li 
          class="comparison__item"
          v-for="(item, index) in comparison" 
          :key="index"
        >
          <span class="comparison__item-category">

            {{item.items[0].category}}
            {{item.items.length}}
          </span>
          <button>
            <span 
              class="mdi mdi-delete"
              @click="removeCategoryFromComparison(item.category)"
            ></span> 
          </button>
        </li>
      </ul>
      <list-component-empty 
        v-if="visibleEmpty"
        modalImg="https://xl-static.rozetka.com.ua/assets/img/design/comparison-modal-dummy.svg"
        modalHeader="Нет товаров в сравнении"
        modalCaption="Добавляйте товары к сравнению характеристик и выбирайте самый подходящий вам товар"
      >
      </list-component-empty>
    </div>
  </custom-dialog>
</template>

<script>
export default {
  name: 'comparison',
  data: () => ({
  }),
  computed: {
    comparison() {
      return this.$store.getters.getComparison
    },
    visibleEmpty() {
      return !this.comparison.length //> 0 ? false : true
    }
    
  },
  methods: {
    removeCategoryFromComparison(payload) {
      this.$store.commit('removeCategoryFromComparison', payload)
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .comparison{
     width: 400px;
    
    .comparison__list-wrapper{
      display: flex;
      justify-content: center;
      flex-direction: column;
      min-height: 90px;
      padding: 20px 24px;
    
      .comparison__list{

      }

      .comparison__item{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 20px;
        }
              
        .comparison__item-category{
          color: #3e77aa;
          cursor: pointer;

          &:hover{
            color: #f84147;
            text-decoration: underline;
          }
        }

        .mdi-delete{
          font-size: 20px;
          color:grey;
          cursor: pointer;

          &:hover{
            color: #f84147;
          }
        }
      } 
      .empty-cart{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;

        *:not(:last-child){
          margin-bottom: 16px;
        }

        .empty-cart__img{
          width: 240px;
          height: 240px;
        }

        .empty-cart__header{
          font-size: 24px;
        
        }

        .empty-cart__caption {
          font-size: 14px;
        }
      } 
    }    
  }
</style>