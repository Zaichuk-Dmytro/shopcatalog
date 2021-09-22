import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    comparison: [],
    menuCategories: [
      {id: 1, name: 'Notepad', text: 'Ноутбуки', icon: 'mdi mdi-laptop-windows'},
      {id: 2, name: 'Mobile-phones', text: 'Смартфони', icon: 'mdi mdi-cellphone-android'}
    ]
  },
  getters: {
    getMenuCategories(state) {
      return state.menuCategories
    },
    getCart(state) {
      return state.cart
    },
    getComparison(state) {
      return state.comparison
    }
  },
  mutations: {
    addCart(state, payload) { 
      state.cart.push( {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        img: payload.img,
        count: 1
      })
    },
    removeItemFromCart(state, payload) {
      state.cart = state.cart.filter(item => item.id !== payload)
    },

    addComparison(state, payload) {
      let index = state.comparison.findIndex(elem => elem.category == payload.id_category)
      if (state.comparison.length && index != -1) {
        state.comparison[index].items.push(payload)
      } else {
        state.comparison.push({category: payload.id_category, items: [payload]})
      }
    },
    removeCategoryFromComparison(state, payload) {
      state.comparison = state.comparison.filter(item => item.category !== payload)
    },
  },  
  actions: {
  },
  modules: {
  },
})
