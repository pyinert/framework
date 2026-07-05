<script setup>
defineProps({ user: Object })
</script>
<template><main><h1>{{ user.name }}</h1><p>ID: {{ user.id }}</p><a href="/users">Back</a></main></template>
