<template>
  <div class="empty-list-goods">
    <img 
      :src="modalImg" 
      class="modal__img"
    >
    <span class="modal__header">
      {{modalHeader}}
    </span>
    <span class="modal__caption">
      {{modalCaption}}
    </span>
  </div>  
</template>

<script>
export default {
  name: 'list-component-empty',
  props: {
    modalImg: String,
    modalHeader: String,
    modalCaption: String,

  }
    

}
</script>

<style lang="scss" scoped>
  .empty-list-goods{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        

        *:not(:last-child){
          margin-bottom: 16px;
        }

        .modal__img{
          width: 240px;
          height: 240px;
        }

        .modal__header{
          font-size: 24px;
        
        }

        .modal__caption {
         text-align: center;
          font-size: 14px;
        }
      }
</style>