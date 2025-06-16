<script setup lang="ts">
</script>

<template>
  <header class="modern-header">
    <div class="header-bg-effects">
      <div class="floating-particle" v-for="n in 6" :key="n" :style="{ animationDelay: n * 0.5 + 's' }"></div>
    </div>
    
    <div class="header-content">
      <div class="logo-section">
        <div class="logo-icon">🛸</div>
        <div class="logo-text">
          <h1 class="main-title">Rick & Morty</h1>
          <span class="subtitle-text">Multiverse Explorer</span>
        </div>
      </div>
      
      <div class="header-description">
        <p>Dive into the infinite cosmos of Rick and Morty. Discover characters, explore dimensions, and uncover the mysteries of the multiverse.</p>
      </div>
      
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-number">826</span>
          <span class="stat-label">Characters</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">126</span>
          <span class="stat-label">Locations</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">51</span>
          <span class="stat-label">Episodes</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

.modern-header {
  position: relative;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
  padding: 80px 0 60px;
  overflow: hidden;
}

.header-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-particle:nth-child(1) { top: 20%; left: 10%; }
.floating-particle:nth-child(2) { top: 60%; right: 15%; }
.floating-particle:nth-child(3) { bottom: 30%; left: 20%; }
.floating-particle:nth-child(4) { top: 40%; right: 25%; }
.floating-particle:nth-child(5) { bottom: 60%; right: 30%; }
.floating-particle:nth-child(6) { top: 80%; left: 40%; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-30px) rotate(270deg); }
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.logo-icon {
  font-size: 4rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.logo-text {
  text-align: left;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.subtitle-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.header-description {
  max-width: 600px;
  margin: 0 auto 40px;
}

.header-description p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 20px 40px;
  margin: 0 auto;
  max-width: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* Responsive */
@media (max-width: 768px) {
  .logo-section {
    flex-direction: column;
    gap: 10px;
  }
  .logo-text {
    text-align: center;
  }
  .stats-bar {
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }
  .stat-divider {
    width: 40px;
    height: 1px;
  }
}

@media (max-width: 480px) {
  .modern-header {
    padding: 60px 0 40px;
  }
}
</style>