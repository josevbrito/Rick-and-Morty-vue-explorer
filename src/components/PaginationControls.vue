<script setup lang="ts">
import type { Info } from '../types';

interface Props {
  info: Info | null;
  currentPage: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['changePage']);

const goToPage = (page: number) => {
  if (page < 1 || (props.info && page > props.info.pages)) return;
  emit('changePage', page);
};
</script>

<template>
  <div v-if="props.info" class="pagination">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="!props.info.prev"
      class="page-btn"
    >
      <span>←</span>
      <span>Previous</span>
    </button>

    <span class="current-page">
      Page {{ currentPage }} of {{ props.info.pages }}
    </span>

    <button
      @click="goToPage(currentPage + 1)"
      :disabled="!props.info.next"
      class="page-btn"
    >
      <span>Next</span>
      <span>→</span>
    </button>
  </div>
</template>

<style scoped>
</style>