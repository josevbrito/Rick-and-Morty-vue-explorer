<script setup lang="ts">
import { RouterLink } from 'vue-router'; // Necessário para RouterLink no footer
</script>

<template>
  <footer class="modern-footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <span class="footer-icon">🛸</span>
          <span class="footer-title">Rick & Morty Explorer</span>
        </div>
        <p class="footer-description">
          Explore the infinite multiverse with our comprehensive Rick and Morty database.
        </p>
      </div>

      <div class="footer-links">
        <div class="link-column">
          <h5>Explore</h5>
          <RouterLink to="/characters">Characters</RouterLink>
          <RouterLink to="/localization">Dimensions</RouterLink>
          <RouterLink to="/episodes">Episodes</RouterLink>
        </div>
        <div class="link-column">
          <h5>Analytics</h5>
          <RouterLink to="/dashboards">Dashboards</RouterLink>
          <a href="#" @click.prevent>Statistics</a>
          <a href="#" @click.prevent>Insights</a>
        </div>
        <div class="link-column">
          <h5>Resources</h5>
          <a href="https://rickandmortyapi.com/" target="_blank">API Docs</a>
          <a href="#" @click.prevent>About</a>
          <a href="#" @click.prevent>Contact</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Rick & Morty Universe Explorer. Data provided by <a href="https://rickandmortyapi.com/" target="_blank">Rick and Morty API</a></p>
    </div>
    
    <div class="footer-effects">
      <div class="footer-particle" v-for="n in 3" :key="n"></div>
    </div>
  </footer>
</template>

<style scoped>

.modern-footer {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  border-top: 1px solid var(--border);
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
}

.footer-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.footer-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.2;
  animation: floatSlow 8s ease-in-out infinite;
}

.footer-particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.footer-particle:nth-child(2) { top: 60%; right: 30%; animation-delay: 2s; }
.footer-particle:nth-child(3) { bottom: 40%; left: 60%; animation-delay: 4s; }

@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}

.footer-section {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.footer-icon {
  font-size: 2rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-column h5 {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.link-column a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.link-column a:hover {
  color: var(--primary);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-top: 1px solid var(--border);
  position: relative;
  z-index: 2;
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-bottom a {
  color: var(--primary);
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>