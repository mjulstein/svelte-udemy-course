<script>
  export let id;
  export let name = id;
  export let type = 'text';
  export let rows = 3;
</script>

<style>
  textarea {
    display: block;
  }
</style>

<div class="form-control">
  <label for={id}>
    <slot />
  </label>
  {#if type !== 'textarea'}
    <input {type} {id} {name} />
  {:else}<textarea {rows} {id} {name} />{/if}
</div>
