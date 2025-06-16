<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="header">
    <h1>{{ props.title }}</h1>
    <p>{{ props.subtitle }}</p>
  </div>
</template>

<style scoped>
</style>