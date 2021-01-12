<style>
  .home-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .home-logo {
    height: 36vmin;
    pointer-events: none;
    margin-bottom: 3rem;
    animation: home-logo-pulse infinite 1.6s ease-in-out alternate;
  }
  @keyframes home-logo-pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="app" data-testid="Home">
  <header class="home-header">
    <img src="/logo.svg" class="home-logo" alt="logo" />
    <a
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"> Learn Svelte </a>
  </header>
</div>
