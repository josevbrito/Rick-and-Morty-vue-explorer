// src/services/rickAndMortyApi.ts
import type { ApiResponse, LocationApiResponse, EpisodeApiResponse } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (
  page: number = 1,
  searchTerm: string = '',
  statusFilter: string = '',
  speciesFilter: string = ''
): Promise<ApiResponse> => {
  let url = `${BASE_URL}/character/?page=${page}`;
  const params: string[] = [];

  if (searchTerm) params.push(`name=${encodeURIComponent(searchTerm)}`);
  if (statusFilter) params.push(`status=${statusFilter}`);
  if (speciesFilter) params.push(`species=${encodeURIComponent(speciesFilter)}`);

  if (params.length > 0) {
    url += `&${params.join('&')}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No characters found with the applied filters.');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchLocations = async (page: number = 1, searchTerm: string = ''): Promise<LocationApiResponse> => {
  let url = `${BASE_URL}/location/?page=${page}`;
  if (searchTerm) {
    url += `&name=${encodeURIComponent(searchTerm)}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No locations found with the applied filters.');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchEpisodes = async (page: number = 1, searchTerm: string = ''): Promise<EpisodeApiResponse> => {
  let url = `${BASE_URL}/episode/?page=${page}`;
  if (searchTerm) {
    url += `&name=${encodeURIComponent(searchTerm)}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No episodes found with the applied filters.');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};