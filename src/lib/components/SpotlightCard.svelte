<script>
  export let title;
  export let slug;
  export let thumbnail;
  export let description = '';
  export let meta = '';
  export let category = '';
</script>

<a href={slug} class="spotlight-card spotlight-hover-group">
  <div class="spotlight-card-image">
    <img 
      src={thumbnail} 
      alt={title} 
      class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
    />
    {#if category}
      <div class="absolute top-4 left-4 bg-[#316354] text-white px-3 py-1 rounded-full text-sm font-medium">
        {category}
      </div>
    {/if}
  </div>
  
  <div class="spotlight-card-content">
    <h3 class="spotlight-card-title">{title}</h3>
    
    {#if meta}
      <p class="spotlight-card-meta">{meta}</p>
    {/if}
    
    {#if description}
      <p class="spotlight-card-description">{description}</p>
    {/if}
    
    <div class="spotlight-card-link">
      Learn More
      <svg class="w-4 h-4 hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </div>
  </div>
</a>
