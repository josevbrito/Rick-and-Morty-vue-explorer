<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});

const navigationOptions = [
  {
    to: '/dashboards',
    icon: '📊',
    title: 'Analytics',
    subtitle: 'Interactive dashboards and real-time statistics',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    delay: '0.1s'
  },
  {
    to: '/characters',
    icon: '🧬',
    title: 'Characters',
    subtitle: 'Meet every character from the multiverse',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    delay: '0.2s'
  },
  {
    to: '/localization',
    icon: '🌌',
    title: 'Dimensions',
    subtitle: 'Explore infinite worlds and realities',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    delay: '0.3s'
  },
  {
    to: '/episodes',
    icon: '🎬',
    title: 'Episodes',
    subtitle: 'Complete episode guide and details',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    delay: '0.4s'
  }
];
</script>

<template>
  <div class="home-container">
    <AppHeader />

    <main class="main-content">
      <div class="section-header">
        <h2 class="section-title">Explore the Universe</h2>
        <p class="section-subtitle">Choose your adventure through the Rick and Morty multiverse</p>
      </div>

      <div class="navigation-grid" :class="{ 'loaded': isLoaded }">
        <RouterLink 
          v-for="option in navigationOptions" 
          :key="option.to"
          :to="option.to" 
          class="nav-card"
          :style="{ animationDelay: option.delay }"
        >
          <div class="card-background" :style="{ background: option.gradient }"></div>
          <div class="card-content">
            <div class="card-icon">{{ option.icon }}</div>
            <h3 class="card-title">{{ option.title }}</h3>
            <p class="card-subtitle">{{ option.subtitle }}</p>
            <div class="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="card-glow"></div>
        </RouterLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>

.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 80px 0 60px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* Navigation Grid */
.navigation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.navigation-grid.loaded .nav-card {
  animation: slideInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 40px 30px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 3;
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.card-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  color: var(--primary);
}

.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.4s ease;
  z-index: 2;
}

.nav-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 212, 170, 0.2);
  border-color: var(--primary);
}

.nav-card:hover .card-background {
  opacity: 0.1;
}

.nav-card:hover .card-title {
  color: var(--primary);
}

.nav-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

.nav-card:hover .card-glow {
  opacity: 0.1;
  transform: translate(-50%, -50%) scale(1.2);
}

/* Responsive */
@media (max-width: 768px) {
  .navigation-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .nav-card {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 60px 0 40px;
  }
  .section-title {
    font-size: 2rem;
  }
  .nav-card {
    min-height: 180px;
  }
  .card-title {
    font-size: 1.5rem;
  }
}
</style>