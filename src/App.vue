<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <!-- Header -->
    <header class="header">
      <div class="logo">My App</div>
      <nav>
        <ul class="nav-list">
          <!-- <li><RouterLink :to="{ name: 'DataGridView' }" class="nav-link">DataGrid</RouterLink></li>
          <li><RouterLink :to="{ name: 'DataGridType2View' }" class="sidebar-link">DataGridType2</RouterLink></li>
          <li><RouterLink :to="{ name: 'Editor' }" class="nav-link">Editor</RouterLink></li>
          <li><RouterLink :to="{ name: 'LoadingBar' }" class="nav-link">LoadingBar</RouterLink></li>
          <li><RouterLink :to="{ name: 'AlertModal' }" class="nav-link">AlertModal</RouterLink></li>
          <li><RouterLink :to="{ name: 'Chart' }" class="nav-link">Chart</RouterLink></li> -->
        </ul>
      </nav>
    </header>

    <!-- Layout -->
    <div class="layout">
      <aside class="sidebar">
        <ul class="sidebar-list">
          <li><RouterLink :to="{ name: 'DataGridType3View' }" class="sidebar-link">DataGridType3</RouterLink></li>
          <li><RouterLink :to="{ name: 'Editor' }" class="sidebar-link">Editor</RouterLink></li>
          <li><RouterLink :to="{ name: 'LoadingBar' }" class="sidebar-link">LoadingBar</RouterLink></li>
          <li><RouterLink :to="{ name: 'AlertModal' }" class="sidebar-link">AlertModal</RouterLink></li>
          <li><RouterLink :to="{ name: 'Chart' }" class="sidebar-link">Chart</RouterLink></li>
          <li><RouterLink :to="{ name: 'AxiosExam' }" class="sidebar-link">AxiosExam</RouterLink></li>
          <li><RouterLink :to="{ name: 'VuexExam' }" class="sidebar-link">VuexExam</RouterLink></li>
          <li><RouterLink :to="{ name: 'LodashExam' }" class="sidebar-link">LodashExam</RouterLink></li>
          <li><RouterLink :to="{ name: 'VeeValidateExam' }" class="sidebar-link">VeeValidateExam</RouterLink></li>
          
        </ul>
      </aside>
      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
/* Container */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이 */
  width: 100vw; /* 화면 전체 너비 */
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d4f1d4;
}

/* Layout */
.layout {
  display: flex;
  flex: 1;
  margin-top: 70px; /* Adjust for fixed header height */
  height: calc(100vh - 70px); /* 콘텐츠 영역을 화면에 꽉 차게 */
}

.sidebar {
  width: 250px;
  background-color: #f0f0f0;
  padding: 1rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-link {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.sidebar-link:hover {
  background-color: #4caf50;
  color: white;
}

.content {
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #fff; /* 기본 배경색 */
}
</style>