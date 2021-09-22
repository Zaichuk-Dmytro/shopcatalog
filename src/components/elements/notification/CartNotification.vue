<template>
  <div class="cart-notification">
    <span>Товар добавлен в корзину</span>
    <button 
      class="btn__show-cart"
      @click="event('cart')"
    >
      Открыть
    </button>
  </div>
</template>

<script>
export default {
  name: 'cart-notification',
  props: {
    event: Function
  }
}
</script>

<style lang="scss" scoped>
  .cart-notification{
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    .btn__show-cart{
      color:#3e77aa;
      cursor: pointer;

      &:hover{
        color: #f84147;
      }
    }
  }
  
</style>