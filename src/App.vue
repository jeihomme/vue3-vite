<template>
  <div>
    <nav>
      <router-link to="/bar-single">단일 색상 막대그래프</router-link> |
      <router-link to="/bar-multi">다중 색상 막대그래프</router-link> |
      <router-link to="/pie">원형 그래프</router-link> |
      <router-link to="/ckeditor">CKEditor</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  padding: 1rem;
  text-align: center;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
}
</style>
