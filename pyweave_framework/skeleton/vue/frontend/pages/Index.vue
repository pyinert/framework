<script setup>
defineProps({ title: String, message: String })
</script>
<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <a href="/about">About</a> · <a href="/users">Users</a>
  </main>
</template>
