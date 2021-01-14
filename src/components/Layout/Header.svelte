<script>
  import { Link } from 'svelte-routing'
</script>

<style>
  span {
    font-weight: 700;
  }

  .header {
    padding: 1rem 0.5rem;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .header__nav {
    display: inline-flex;
  }

  .header-item {
    padding: 1rem 0.75rem;
  }
</style>

<div class="header" data-testid="Header">
  <div class="header-wrapper">
    <Link to="/">
      <div class="header-item">
        <span>Basic</span> Starterkit
      </div>
    </Link>

    <nav class="header__nav">
      <Link to="/">
        <div class="header-item">Home</div>
      </Link>
      <Link to="/about">
        <div class="header-item">About</div>
      </Link>
      <Link to="/blog">
        <div class="header-item">Blog</div>
      </Link>
    </nav>
  </div>
</div>
