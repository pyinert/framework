<script setup>
defineProps({ users: Array })
</script>
<template><main><h1>Users</h1><ul><li v-for="user in users" :key="user.id"><a :href="`/users/${user.id}`">{{ user.name }}</a></li></ul></main></template>
