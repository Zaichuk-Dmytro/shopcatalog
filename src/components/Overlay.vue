<template>
  <transition name="overlay">
    <div 
      v-if="visible"
      class="overlay"
      @click.self="hideOverlay"
    >
      <component
        v-if="component"    
        :is="component"
      ></component>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'overlay',
  data: () => ({
    visible: false,
    component: '',
  }),
  methods: {
    showOverlay(option) {
      this.visible = true
      this.component = option      
    },
    hideOverlay() {
      this.visible = false
      this.component = ''
    }
  },
  mounted() {
    this.$root.$on('showOverlay', this.showOverlay)
    this.$root.$on('hideOverlay', this.hideOverlay)
    
  }
}
</script>

<style lang="scss" scoped>
  .overlay{
    display: flex;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
  }

.overlay-enter-active, .overlay-leave-active {
  transition: opacity .3s;
}
.overlay-enter, .overlay-leave-to  {
  opacity: 0;
}

</style>