<script>
  import { getStores, navigating, page, updated } from '$app/stores';
  let slugid = $page.params.slug;
  export let data;
</script>

<h1>Blog page</h1>
<h2>{data.title}</h2> 
 <h2>{@html data.content}</h2>
<h1>{slugid}</h1>