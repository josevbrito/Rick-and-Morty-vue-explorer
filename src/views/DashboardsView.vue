<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<template>
  <div class="container">
    <GlobalHeader
      title="📊 Dashboards"
      subtitle="Soon you'll find amazing statistics and data visualizations here!"
    />
    <div class="content-placeholder">
      <p>This section is under construction. Check back later for cool dashboards!</p>
      <img src="https://media.giphy.com/media/l0HlTy9SBb4S1eEms/giphy.gif" alt="WIP" class="wip-gif" />
    </div>
  </div>
</template>

<style scoped>
.content-placeholder {
  text-align: center;
  padding: 80px 20px;
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 32px var(--shadow);
  margin-top: 40px;
}

.content-placeholder p {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.wip-gif {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>