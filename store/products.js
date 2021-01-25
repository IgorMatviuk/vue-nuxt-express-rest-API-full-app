
export const state = () => ({
  products: []
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  addProducts: (state, data) => {
    state.products.push(data);
  },
}

export const actions = {
    async fetch({commit}) {
        try {
          const products = await this.$axios.$get('/api/products')
          commit('setProducts', products)
        } catch (e) {
          commit('Error', e)
          throw e
        }
    },
    async fetchById({commit}, id) {
        try {
          return await this.$axios.$get(`/api/products/${id}`)
        } catch (e) {
          commit('Error', e)
          throw e
        }
    },
    async create({commit}, {data}) {
      try {
        return await this.$axios.$post('/api/products', data),
        commit('addProducts', data);
      } catch (e) {
        commit('Error', e)
        throw e
      }
    },
    async delete({commit}, {id}) {
      try {
        return await this.$axios.$delete(`/api/products/${id}`)
      } catch (e) {
        commit('Error', e)
        throw e
      }
    },
}

export const getters = {
  products: s => s.products
}