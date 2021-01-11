<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  import About from './pages/About.svelte'
  import Blog from './pages/Blog.svelte'
  import Home from './pages/Home.svelte'

  export let url = "";
</script>
<Router url="{url}">
  <Route path="blog" component="{Blog}" />
  <Route path="about" component="{About}" />
  <Route path="/"><Home /></Route>
</Router>