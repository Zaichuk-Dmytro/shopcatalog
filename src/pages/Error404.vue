<template>
  <div class="error-page">
    <div class="info-error">
      <span class="info-error__name">Ошибка 404</span>
      <span class="info-error__description">Страница не найдена</span>
      <span class="info-error__cause">Неправильно набран адрес или такой страницы на сайте больше не существует.</span>
      
      <router-link 
       to="/"
      >
        <button class="info-error__btn-home">Перейти на главную страницу</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-404'
}
</script>

<style lang="scss" scoped>
  .error-page{
    width: 1500px;
    padding: 25px;
    // height: 50px;
    margin: 0 auto;

    .info-error{
      display: flex;
      flex-direction: column;

      .info-error__name{
        font-size: 24px;
        color: #f84147;
        margin-bottom: 20px;
      }

      .info-error__description{
        font-size: 34px;
        margin-bottom: 10px;        
      }

      .info-error__cause{
        font-size: 18px;
        margin-bottom: 20px;
      }

      .info-error__btn-home{
        background-color: #00a046;
        border-radius: 4px;
        padding: 12px;
        border: none;
        transition: 0.3s;
        font-size: 16px;
        color: #fff;
        cursor: pointer;

        &:hover{
          background-color: #00bc52;
            
        }
      }
      
    }
  }
</style>