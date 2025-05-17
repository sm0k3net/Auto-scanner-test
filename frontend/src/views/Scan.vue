<template>
  <div>
    <h2>Сканирование уязвимостей</h2>
    <button @click="runZap">OWASP ZAP</button>
    <button @click="runWPScan">WPScan</button>
    <button @click="runNmapVuln">Nmap Vuln</button>
    <button @click="runVirusTotal">VirusTotal</button>
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
    async runZap() {
      const res = await axios.post('/api/scan/zap', { url: this.$route.params.projectId });
      this.result = JSON.stringify(res.data, null, 2);
    },
    async runWPScan() {
      const res = await axios.post('/api/scan/wpscan', { url: this.$route.params.projectId });
      this.result = JSON.stringify(res.data, null, 2);
    },
    async runNmapVuln() {
      const res = await axios.post('/api/scan/nmap-vuln', { target: this.$route.params.projectId });
      this.result = res.data.result;
    },
    async runVirusTotal() {
      const res = await axios.post('/api/scan/virustotal', { url: this.$route.params.projectId });
      this.result = JSON.stringify(res.data, null, 2);
    }
  }
};
</script>