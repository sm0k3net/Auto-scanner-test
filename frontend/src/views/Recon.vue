<template>
  <div>
    <h2>Разведка</h2>
    <button @click="runNmap">Nmap</button>
    <button @click="runSublist3r">Sublist3r</button>
    <button @click="runDNSRecon">DNSRecon</button>
    <button @click="runGobuster">Gobuster</button>
    <button @click="runWhois">Whois</button>
    <button @click="runShodan">Shodan</button>
    <pre>{{ result }}</pre>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return { result: '' };
  },
  methods: {
    async runNmap() {
      const res = await axios.post('/api/recon/nmap', { target: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runSublist3r() {
      const res = await axios.post('/api/recon/sublist3r', { domain: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runDNSRecon() {
      const res = await axios.post('/api/recon/dnsrecon', { domain: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runGobuster() {
      const res = await axios.post('/api/recon/gobuster', { domain: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runWhois() {
      const res = await axios.post('/api/recon/whois', { domain: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runShodan() {
      const res = await axios.post('/api/recon/shodan', { ip: this.$route.params.projectId });
      this.result = JSON.stringify(res.data, null, 2);
    }
  }
};
</script>