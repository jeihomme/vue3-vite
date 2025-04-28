import { createStore } from 'vuex'

export interface State {
  items: Array<{ id: number; name: string }>
  loading: boolean
  error: string | null
}

const store = createStore<State>({
  state: {
    items: [],
    loading: false,
    error: null,
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    },
  },
  actions: {
    async fetchItems({ commit }) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        commit('setItems', data.slice(0, 10)) // 10개의 데이터만 가져오기
      } catch (error) {
        commit('setError', 'Failed to fetch items')
      } finally {
        commit('setLoading', false)
      }
    },
  },
})

export default store