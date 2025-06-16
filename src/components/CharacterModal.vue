<script setup lang="ts">
import type { Character } from '../types';

interface Props {
  character: Character | null;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div v-if="props.character" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <img :src="props.character.image" :alt="props.character.name" class="modal-image" />
        <button @click="closeModal" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <h2 class="modal-title">{{ props.character.name }}</h2>
        <div class="modal-details">
          <div class="modal-detail">
            <span class="modal-label">Status:</span>
            <span class="modal-value">
              <span
                class="status-indicator"
                :class="'status-' + props.character.status.toLowerCase()"
              ></span>
              {{ props.character.status }}
            </span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Species:</span>
            <span class="modal-value">{{ props.character.species }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Type:</span>
            <span class="modal-value">{{ props.character.type || 'N/A' }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Gender:</span>
            <span class="modal-value">{{ props.character.gender }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Origin:</span>
            <span class="modal-value">{{ props.character.origin.name }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Location:</span>
            <span class="modal-value">{{ props.character.location.name }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Created:</span>
            <span class="modal-value">{{ formatDate(props.character.created) }}</span>
          </div>
          <div class="modal-detail">
            <span class="modal-label">Episodes:</span>
            <span class="modal-value">{{ props.character.episode.length }} episodes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>