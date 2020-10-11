<script>
  import { createEventDispatcher } from 'svelte';

  import Button from './Button.svelte';

  export let title = undefined;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('cancel');
  }
</script>

<style>
  .modal {
    position: fixed;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }

  header {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    font-family: 'Roboto Slab', sans-serif;
  }

  header h1 {
    margin: 0;
  }

  .content {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>

<div class="backdrop" on:click={handleClose} />
<div class="modal">
  <header>
    <slot name="header">
      <h1>{title}</h1>
    </slot>
  </header>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={handleClose}>Close</Button>
    </slot>
  </footer>
</div>
