<template>
  <div class="message">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'message-wrapper',
  props: {
    text: String
  }

}
</script>

<style lang="scss" scoped>
  .message{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    color: #3e77aa;
    font-size: 40px;
  }
</style>