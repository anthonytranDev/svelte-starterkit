<script>
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'
</script>

<style>
  .layout-background {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    padding: 1rem;
  }
</style>

<div data-testid="Layout">
  <Header />
  <div class="layout-background">
    <slot />
  </div>
  <Footer />
</div>
