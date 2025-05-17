<template>
  <div class="login">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return { email: '', password: '', error: '' };
  },
  methods: {
    async login() {
      try {
        await axios.post('/api/auth/login', { email: this.email, password: this.password });
        this.$router.push('/dashboard');
      } catch (e) {
        this.error = 'Ошибка входа';
      }
    }
  }
};
</script>