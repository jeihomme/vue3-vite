<template>
  <div>
    <h1>Vuex Example</h1>
    <button @click="fetchItems">Fetch Items</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

// Vuex 스토어 가져오기
const store = useStore()

// Vuex 상태를 계산 속성으로 매핑
const items = computed(() => store.state.items)
const loading = computed(() => store.state.loading)
const error = computed(() => store.state.error)

// Vuex 액션 호출
const fetchItems = () => {
  store.dispatch('fetchItems')
}

onMounted(() => {
  // 초기 데이터 가져오기
  console.log( store.state )
})
</script>

<style scoped>
h1 {
  color: #333;
}
button {
  margin-bottom: 10px;
}
</style>
