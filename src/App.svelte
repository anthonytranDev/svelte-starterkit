<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  import About from './pages/About.svelte'
  import Blog from './pages/Blog/index.svelte'
  import BlogPost from './pages/Blog/BlogPost.svelte'
  import Home from './pages/Home.svelte'

  export let url = "";
</script>
<Router url="{url}">
  <Route path="/"><Home /></Route>
  <Route path="about" component="{About}" />
  <Route path="blog" component="{Blog}" />
  <Route path="blog/:id" component="{BlogPost}" />
</Router>