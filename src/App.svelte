<script>
  import { Router, Route } from 'svelte-routing'

  import Layout from './components/Layout/index.svelte'

  import Blog from './pages/Blog/index.svelte'
  import BlogPost from './pages/Blog/BlogPost.svelte'
  import Home from './pages/Home.svelte'
</script>

<div data-testid="App">
  <Router>
    <Layout>
      <Route path="/"><Home /></Route>
      <Route path="blog" component="{Blog}" />
      <Route path="blog/:id" let:params>
        <Blog>
          <BlogPost params="{params}" />
        </Blog>
      </Route>
    </Layout>
  </Router>
</div>
