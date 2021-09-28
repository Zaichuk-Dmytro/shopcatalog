import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],/////storage cart
    lastViewedProducts: [],
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
    },

    lengthCart(store) {
      return store.cart.length
    },

    lengthComparison(state) {
      let comparison = state.comparison
      
      return comparison.reduce((value, elem) => {
        return value += elem.items.length
      }, 0)
    },

    getLastViewedProducts(state) {
      return state.lastViewedProducts.slice(0,12)
    }

  },
  mutations: {
    addToStorage(state, payload) {
      localStorage.setItem(payload, JSON.stringify(state[payload]))
    },
    
    addCartToStorage() {
      this.commit('addToStorage', 'cart')
    },

    editCart(state,payload) {
      state.cart = payload
    },

    editComparison(state,payload) {
      state.comparison = payload
    },

    editlastViewedProducts(state,payload) {
      state.lastViewedProducts = payload
    },

    addToCart(state, payload) {
      state.cart.push( {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        img: payload.img,
        count: 1
      })
      this.commit('addCartToStorage')
    },
    removeItemFromCart(state, payload) { 
      state.cart = state.cart.filter(item => item.id !== payload)
      this.commit('addCartToStorage')
    },

    addComparison(state, payload) {
      let index = state.comparison.findIndex(elem => elem.category == payload.id_category)
      if (state.comparison.length && index != -1) {
        state.comparison[index].items.push(payload)
      } else {
        state.comparison.push({category: payload.id_category, items: [payload]})
      }
      this.commit('addToStorage', 'comparison')
    },

    removeCategoryFromComparison(state, payload) {
      state.comparison = state.comparison.filter(item => item.category !== payload)
      this.commit('addToStorage', 'comparison')
    },

    addViewedProduct(state, payload) {
      let notViewed = !state.lastViewedProducts.some(item =>  item.id == payload.id)
      if (notViewed) {
        state.lastViewedProducts.push(payload)
      }
      this.commit('addToStorage', 'lastViewedProducts')
    }
  },  
  actions: {
    async getItemById(store, payload) {
      return await store.dispatch('fetchApi', payload.type).then(res => {
        return res.find(item => item.id == payload.id)
      })
    },
    async fetchApi(store, payload) {
      return await import('../api/' + payload + 'Api.js' ).then(res => res.default )
    }

  },
  modules: {
  },
})
