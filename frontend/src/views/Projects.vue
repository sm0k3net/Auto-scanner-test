<template>
  <div>
    <h2>Проекты</h2>
    <form @submit.prevent="createProject">
      <input v-model="name" placeholder="Название проекта" />
      <input v-model="target" placeholder="Цель (IP/домен)" />
      <button type="submit">Создать</button>
    </form>
    <ul>
      <li v-for="p in projects" :key="p.id">
        {{ p.name }} — {{ p.target }}
        <router-link :to="`/recon/${p.id}`">Разведка</router-link>
        <router-link :to="`/scan/${p.id}`">Сканирование</router-link>
        <router-link :to="`/report/${p.id}`">Отчет</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return { name: '', target: '', projects: [] };
  },
  async mounted() {
    const res = await axios.get('/api/projects');
    this.projects = res.data;
  },
  methods: {
    async createProject() {
      await axios.post('/api/projects', { name: this.name, target: this.target });
      const res = await axios.get('/api/projects');
      this.projects = res.data;
    }
  }
};
</script>