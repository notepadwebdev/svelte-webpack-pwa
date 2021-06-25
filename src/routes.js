import Home from './components/pages/Home.svelte';
import NotFound from './components/pages/NotFound.svelte';

export default {
  '/': Home, 
  '*': NotFound
}
