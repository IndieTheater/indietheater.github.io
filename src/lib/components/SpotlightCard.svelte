<script>
  export let title;
  export let slug;
  export let thumbnail;
</script>
<a href={slug} class="block border rounded overflow-hidden hover:shadow-lg">
  <img src={thumbnail} alt={title} class="w-full h-48 object-cover" />
  <div class="p-4">
    <h3 class="text-lg font-bold">{title}</h3>
  </div>
</a>
