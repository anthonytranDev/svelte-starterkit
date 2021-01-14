<script>
  import { Link } from 'svelte-routing'
  import BlogHeader from './BlogHeader.svelte'
</script>

<div data-testid="Blog">
  <BlogHeader />
  <slot>
    <div>
      <Link to="/blog/1">Blog Post #1</Link>
    </div>
    <div>
      <Link to="/blog/2">Blog Post #2</Link>
    </div>
  </slot>
</div>
