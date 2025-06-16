<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { fetchCharacters } from '../services/rickAndMortyApi';
import type { Character, Info } from '../types';
import GlobalHeader from '../components/GlobalHeader.vue';
import CharacterCard from '../components/CharacterCard.vue';
import CharacterModal from '../components/CharacterModal.vue';
import PaginationControls from '../components/PaginationControls.vue';

const characters = ref<Character[]>([]);
const info = ref<Info | null>(null);
const currentPage = ref(1);
const loading = ref(true);
const error = ref<string | null>(null);
const searchTerm = ref('');
const statusFilter = ref('');
const speciesFilter = ref('');
const selectedCharacter = ref<Character | null>(null);
let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const loadCharacters = async (page: number = 1) => {
  loading.value = true;
  error.value = null;
  try {
    const data = await fetchCharacters(page, searchTerm.value, statusFilter.value, speciesFilter.value);
    characters.value = data.results;
    info.value = data.info;
    currentPage.value = page;
  } catch (err) {
    console.error('Error fetching characters:', err);
    error.value = (err as Error).message || 'Error loading characters. Please try again.';
    characters.value = [];
    info.value = null;
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  loadCharacters(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleSearchInput = () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    loadCharacters(1);
  }, 300);
};

const handleFilterChange = () => {
  loadCharacters(1);
};

const openModal = (character: Character) => {
  selectedCharacter.value = character;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedCharacter.value = null;
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  loadCharacters();
});


</script>

<template>
  <div class="container">
    <GlobalHeader
      title="🧑‍🚀 Characters"
      subtitle="Discover all characters from the Rick and Morty universe"
    />

    <div class="controls">
      <div class="search-container">
        <input
          v-model="searchTerm"
          @input="handleSearchInput"
          type="text"
          placeholder="Search characters..."
          class="search-input"
        />
      </div>

      <select v-model="statusFilter" @change="handleFilterChange" class="filter-select">
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select v-model="speciesFilter" @change="handleFilterChange" class="filter-select">
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Mythological Creature">Mythological</option>
      </select>
    </div>

    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>Loading characters from the multiverse...</p>
    </div>

    <div v-if="error" class="error">
      ❌ {{ error }}
    </div>

    <div v-if="characters.length > 0" class="characters-grid">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        @click="openModal(character)"
      />
    </div>

    <PaginationControls
      :info="info"
      :current-page="currentPage"
      @change-page="changePage"
    />

    <CharacterModal
      :character="selectedCharacter"
      @close="closeModal"
    />
  </div>
</template>