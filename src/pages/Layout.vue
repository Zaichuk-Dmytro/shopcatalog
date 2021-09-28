<template>
  <div class="layout">
    <div class="wrapperlayout">
      <app-header/>
      <div class="wrappermain" >
        <div class="main">
          <router-view/>
        </div>
        <footer class="footer">
          <a 
            class="myGit-link"
            target="_blank"
            href="https://github.com/Zaichuk-Dmytro">
            <span class="mdi mdi-git"></span>
              Zaichuk-Dmytro
          </a>
        </footer>
      </div>
    </div>
    <overlay/>
  </div>
</template>

<script>
export default {
  name: 'layout',
  created() {
    let cart = JSON.parse(localStorage.getItem('cart')),
      comparison = JSON.parse(localStorage.getItem('comparison')),
      lastViewedProducts = JSON.parse(localStorage.getItem('lastViewedProducts'))
    if (cart?.length) {
      this.$store.commit('editCart', cart)
    }
    if (comparison?.length) {
      this.$store.commit('editComparison', comparison)
    }
    if (lastViewedProducts?.length) {
      this.$store.commit('editlastViewedProducts', lastViewedProducts)
    }
   
  }
}
</script>

<style lang="scss" scoped>

  .layout{
    height: 100vh;
    overflow:hidden;

    .wrapperlayout {
      height: 100vh;
      overflow: auto;
      .wrappermain {
        height: calc(100vh - 72px);
        overflow: auto;
        position: relative;
      }
      .main{
        min-height: calc(100vh - 172px);
      }

      .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100%;
        background-color: #00a046;

        .myGit-link{
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }  
</style>