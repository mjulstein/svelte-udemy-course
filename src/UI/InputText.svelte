<script>
  export let id;
  export let name = id;
  export let type = 'text';
  export let rows = 3;
</script>

<style>
  .form-control {
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.25rem 0;
  }
  .form-control > * {
    display: block;
    width: 100%;
  }
  input,
  textarea {
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }
  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }
  label {
    margin-bottom: 0.5rem;
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
