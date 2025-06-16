import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharactersView from '../views/CharactersView.vue';
import DashboardsView from '../views/DashboardsView.vue';
import LocalizationView from '../views/LocalizationView.vue';
import EpisodesView from '../views/EpisodesView.vue';

const baseUrl = '/';

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
    },
    {
      path: '/dashboards',
      name: 'dashboards',
      component: DashboardsView,
    },
    {
      path: '/localization',
      name: 'localization',
      component: LocalizationView,
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: EpisodesView,
    },
  ],
});

export default router;