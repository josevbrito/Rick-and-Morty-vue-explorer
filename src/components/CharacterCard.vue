<script setup lang="ts">
import type { Character } from '../types';

interface Props {
  character: Character;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="character-card">
    <img :src="props.character.image" :alt="props.character.name" class="character-image" />
    <div class="character-info">
      <h3 class="character-name">{{ props.character.name }}</h3>
      <div class="character-details">
        <div class="detail-item">
          <span
            class="status-indicator"
            :class="'status-' + props.character.status.toLowerCase()"
          ></span>
          <span>{{ props.character.status }} - {{ props.character.species }}</span>
        </div>
        <div class="detail-item">
          <span>📍</span>
          <span>{{ props.character.location.name }}</span>
        </div>
        <div class="detail-item">
          <span>🌍</span>
          <span>{{ props.character.origin.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>