<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchLocations } from '../services/rickAndMortyApi';
import type { Location, Info } from '../types';
import GlobalHeader from '../components/GlobalHeader.vue';
import PaginationControls from '../components/PaginationControls.vue';

const locations = ref<Location[]>([]);
const info = ref<Info | null>(null);
const currentPage = ref(1);
const loading = ref(true);
const error = ref<string | null>(null);
const searchTerm = ref('');
let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const loadLocations = async (page: number = 1) => {
  loading.value = true;
  error.value = null;
  try {
    const data = await fetchLocations(page, searchTerm.value);
    locations.value = data.results;
    info.value = data.info;
    currentPage.value = page;
  } catch (err) {
    console.error('Error fetching locations:', err);
    error.value = (err as Error).message || 'Error loading locations. Please try again.';
    locations.value = [];
    info.value = null;
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  loadLocations(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleSearchInput = () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    loadLocations(1);
  }, 300);
};

onMounted(() => {
  loadLocations();
});
</script>

<template>
  <div class="container">
    <GlobalHeader
      title="📍 Locations"
      subtitle="Discover dimensions and planets from the Rick and Morty multiverse"
    />

    <div class="controls">
      <div class="search-container" style="grid-column: span 3;">
        <input
          v-model="searchTerm"
          @input="handleSearchInput"
          type="text"
          placeholder="Search locations..."
          class="search-input"
        />
      </div>
    </div>

    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>Loading locations...</p>
    </div>

    <div v-if="error" class="error">
        ❌  {{ error }}
    </div>

    <div v-if="locations.length > 0" class="locations-grid">
      <div v-for="location in locations" :key="location.id" class="location-card">
        <h3>{{ location.name }}</h3>
        <p>Type: {{ location.type }}</p>
        <p>Dimension: {{ location.dimension }}</p>
        <p>Residents: {{ location.residents.length }}</p>
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
.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.location-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px var(--shadow-hover);
  border-color: var(--primary);
}

.location-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--primary);
}

.location-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 5px;
}
</style>