export default {
  methods: {
    formatPrice(price) {
      
      return Intl.NumberFormat('ru-RU').format(price) 
    },
    async fetchApi(type) {
      return await import('../../api/' + type + 'Api.js' ).then(res => res.default )
    }
  },
}