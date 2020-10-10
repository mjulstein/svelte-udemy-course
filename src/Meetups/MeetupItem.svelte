<script>
  import { createEventDispatcher } from 'svelte';
  import Badge from '../UI/Badge.svelte';

  import Button from '../UI/Button.svelte';

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let contactEmail;
  export let address;
  export let isFavorite = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  article {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }
  header,
  .content,
  footer {
    padding: 1rem;
  }
  .image {
    width: 100%;
    height: 14rem;
    display: block;
    overflow: hidden;
  }
  img {
    width: 100%;
    margin: -20% 0;
  }
  .content {
    display: block;
    height: 4rem;
  }
  h1 {
    font-size: 1.25rem;
    margin: 0.25rem 0;
    font-family: 'Roboto Slab', sans-serif;
    display: inline-block;
  }
  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
  }
  div {
    text-align: right;
  }
</style>

<article>
  <header>
    <h1 class:is-favorite={isFavorite}>{title}</h1>
    {#if isFavorite}
      <Badge>{'<3'}</Badge>
    {/if}
    <h2>{subtitle} ({id})</h2>
    <p>{address}</p>
  </header>
  <div class="image"><img src={imageUrl} alt={title} /></div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button href="mailto:{contactEmail}">Contact</Button>
    <Button
      mode="outline"
      success={!isFavorite}
      on:click={() => dispatch('favorite-clicked', id)}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </Button>
    <Button on:click={() => dispatch('show-details-clicked', { description })}>
      Show details
    </Button>
  </footer>
</article>
