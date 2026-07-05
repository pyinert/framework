<script setup>
defineProps({ title: String, body: String })
</script>
<template><main><h1>{{ title }}</h1><p>{{ body }}</p><a href="/">Home</a></main></template>
