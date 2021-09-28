<template>
  <transition name="notification-transition"> 
    <div 
      v-if="visible"
      class="notification-wrapper"
    >
      <div 
        class="notification"
      >
        <component
          v-if="component" 
          :event="showOverlay"
          :is="component"
        ></component>
      </div> 
    </div>
  </transition> 
</template>

<script>
export default {
  name: 'notification',
  data: () => ({
    visible: false,
    component: '',
    timeout: 0,
    
  }),
  methods: {
    showNotification(option) {
      this.visible = true
      this.component = option
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = false
      }, 3500)
      
    },
    showOverlay(options) {
      this.$root.$emit('showOverlay', options)
    }
  },
  mounted() {
    this.$root.$on('showNotification', this.showNotification)
  }
}
</script>

<style lang="scss" scoped>
  .notification-wrapper{
    position: fixed;
    width: 1500px;
    bottom: 40px;
    z-index: 10;
    background: transparent;
    
    .notification{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #d0ecdb;
      border-radius: 4px;
      // opacity: 1;
      width: 50%;
      height: 40px;
      padding: 0 12px;
      margin: 0 auto;
      font-size: 14px;
      box-shadow: 0px 0px 5px 2px #9E9E9E;
    }
  }
  .notification-transition-enter-active {
    transition: all 1s ;
  }
  .notification-transition-enter {
    opacity: 0;
    bottom: 0;
  }
</style>