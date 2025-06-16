<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchEpisodes } from '../services/rickAndMortyApi';
import type { Episode, Info } from '../types';
import GlobalHeader from '../components/GlobalHeader.vue';
import PaginationControls from '../components/PaginationControls.vue';

const episodes = ref<Episode[]>([]);
const info = ref<Info | null>(null);
const currentPage = ref(1);
const loading = ref(true);
const error = ref<string | null>(null);
const searchTerm = ref('');
let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const loadEpisodes = async (page: number = 1) => {
  loading.value = true;
  error.value = null;
  try {
    const data = await fetchEpisodes(page, searchTerm.value);
    episodes.value = data.results;
    info.value = data.info;
    currentPage.value = page;
  } catch (err) {
    console.error('Error fetching episodes:', err);
    error.value = (err as Error).message || 'Error loading episodes. Please try again.';
    episodes.value = [];
    info.value = null;
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  loadEpisodes(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleSearchInput = () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    loadEpisodes(1);
  }, 300);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

onMounted(() => {
  loadEpisodes();
});
</script>

<template>
  <div class="container">
    <GlobalHeader
      title="📺 Episodes"
      subtitle="Dive into all the wacky adventures"
    />

    <div class="controls">
      <div class="search-container" style="grid-column: span 3;">
        <input
          v-model="searchTerm"
          @input="handleSearchInput"
          type="text"
          placeholder="Search episodes..."
          class="search-input"
        />
      </div>
    </div>

    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>Loading episodes...</p>
    </div>

    <div v-if="error" class="error">
      ❌ {{ error }}
    </div>

    <div v-if="episodes.length > 0" class="episodes-grid">
      <div v-for="episode in episodes" :key="episode.id" class="episode-card">
        <h3>{{ episode.name }} ({{ episode.episode }})</h3>
        <p>Aired: {{ formatDate(episode.air_date) }}</p>
        <p>Characters: {{ episode.characters.length }}</p>
      </div>
    </div>

    <PaginationControls
      :info="info"
      :current-page="currentPage"
      @change-page="changePage"
    />
  </div>
</template>

<style scoped>
.episodes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.episode-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.episode-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px var(--shadow-hover);
  border-color: var(--primary);
}

.episode-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--primary);
}

.episode-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 5px;
}
</style>