<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #00d4aa;
    --primary-dark: #00b894;
    --secondary: #6c5ce7;
    --accent: #fd79a8;
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --bg-card: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --text-muted: #6a6a6a;
    --border: #404040;
    --shadow: rgba(0, 0, 0, 0.3);
    --shadow-hover: rgba(0, 212, 170, 0.2);
    --gradient-primary: linear-gradient(135deg, #00d4aa 0%, #6c5ce7 100%);
    --gradient-card: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    line-height: 1.6;
    overflow-x: hidden;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header */
  .header {
    text-align: center;
    padding: 60px 0;
    position: relative;
    overflow: hidden;
  }

  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.1;
    z-index: -1;
  }

  .header h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    margin-bottom: 16px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      filter: drop-shadow(0 0 20px rgba(0, 212, 170, 0.3));
    }
    to {
      filter: drop-shadow(0 0 30px rgba(108, 92, 231, 0.5));
    }
  }

  .header p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    font-weight: 300;
    animation: fadeInUp 1s ease-out 0.5s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Controls */
  .controls {
    background: var(--bg-card);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 32px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
    box-shadow: 0 8px 32px var(--shadow);
    transition: all 0.3s ease;
  }

  .controls:hover {
    box-shadow: 0 12px 40px var(--shadow-hover);
    transform: translateY(-2px);
  }

  .search-container {
    position: relative;
  }

  .search-input,
  .filter-select {
    width: 100%;
    padding: 16px 20px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 16px;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s ease;
  }

  .search-input:focus,
  .filter-select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(0, 212, 170, 0.1);
    transform: translateY(-1px);
  }

  .search-input::placeholder {
    color: var(--text-muted);
  }

  .filter-select {
    cursor: pointer;
  }

  /* Loading & Error States */
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    color: var(--text-secondary);
  }

  .loading-spinner {
    width: 60px;
    height: 60px;
    border: 3px solid var(--border);
    border-top: 3px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error {
    background: linear-gradient(135deg, #ff6b6b, #e74c3c);
    color: white;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    margin: 20px 0;
    font-weight: 500;
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.2);
  }

  /* Character Grid */
  .characters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 60px;
  }

  .character-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
  }

  .character-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .character-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px var(--shadow-hover);
  }

  .character-card:hover::before {
    opacity: 0.1;
  }

  .character-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .character-card:hover .character-image {
    transform: scale(1.1);
  }

  .character-info {
    padding: 24px;
    position: relative;
    z-index: 2;
  }

  .character-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text-primary);
  }

  .character-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .status-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 8px currentColor;
  }

  .status-alive {
    background-color: var(--primary);
  }
  .status-dead {
    background-color: #ff6b6b;
  }
  .status-unknown {
    background-color: var(--text-muted);
  }

  /* Pagination */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 40px 0;
  }

  .page-btn {
    background: var(--bg-card);
    border: 2px solid var(--border);
    color: var(--text-primary);
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .page-btn:hover:not(:disabled) {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--bg-primary);
    transform: translateY(-2px);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .current-page {
    background: var(--gradient-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
  }

  /* Modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 24px;
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal-header {
    position: relative;
  }

  .modal-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 24px 24px 0 0;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    color: white;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  .modal-body {
    padding: 32px;
  }

  .modal-title {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .modal-details {
    display: grid;
    gap: 16px;
  }

  .modal-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
  }

  .modal-detail:last-child {
    border-bottom: none;
  }

  .modal-label {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .modal-value {
    color: var(--text-primary);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .controls {
      grid-template-columns: 1fr;
      padding: 24px;
    }

    .characters-grid {
      grid-template-columns: 1fr;
    }

    .modal-content {
      width: 95%;
      margin: 20px;
    }

    .modal-body {
      padding: 24px;
    }

    .pagination {
      flex-wrap: wrap;
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }
</style>