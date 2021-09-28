export default {
  methods: {
    formatPrice(price) {
      return Intl.NumberFormat('ru-RU').format(price) 
    },
  },
}