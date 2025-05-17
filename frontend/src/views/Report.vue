<template>
  <div>
    <h2>Отчет</h2>
    <a :href="`/api/report/html/${$route.params.projectId}`" target="_blank">HTML</a>
    <a :href="`/api/report/csv/${$route.params.projectId}`" target="_blank">CSV</a>
    <a :href="`/api/report/xml/${$route.params.projectId}`" target="_blank">XML</a>
  </div>
</template>