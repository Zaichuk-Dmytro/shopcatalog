<template>
  <icon-btn
    v-if="iconBtn"
    @click="addToCart"
    :icon="inCart ? 'mdi mdi-cart ': 'mdi mdi-cart-outline'"
    class="buy-btn btn-cart"
  >
  </icon-btn>
  
  <button v-else
    class="buy-btn"
    @click="addToCart"
  >
    
    <span v-if="textIcon" class="mdi mdi-cart-outline"></span>
    Купить
  </button>
</template>

<script>
export default {
  name: 'buy-button',
  props: { 
    item: Object,
    iconBtn: Boolean,
    textIcon: Boolean
  },
  computed: {
    inCart() {
      let cart = this.$store.getters.getCart
      return cart.find(itemCart => itemCart.id == this.item.id)
    },
  },
  methods: {
    addToCart() {
      if (!this.inCart) {
        this.$store.commit('addToCart', this.item)
        this.$root.$emit('showNotification', 'cart-notification')
        
      } else {
        this.$root.$emit('showOverlay', 'cart')
        
      }
    },
  }
}
</script>

<style lang="scss" scoped>

</style>