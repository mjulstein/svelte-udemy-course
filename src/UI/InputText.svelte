<script>
  import { createEventDispatcher } from 'svelte';
  import validate from '../helpers/validation';
  export let id;
  export let name = id;
  export let type = 'text';
  export let rows = 3;
  export let valid = true;
  export let validators = [];
  export let hint = '';

  function checkValidators(value) {
    return (
      validators.length === 0 ||
      validators.every((validator) => validate[validator](value))
    );
  }

  const dispatch = createEventDispatcher();
  function handleBlur({ target }) {
    if (checkValidators(target.value)) {
      dispatch('valid-input', id);
    } else {
      dispatch('invalid-input', id);
    }
  }
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
  .invalid {
    border-color: red;
    background-color: #ffe3e3;
  }
  .error-message {
    color: red;
    margin: 0.25rem 0;
  }
</style>

<div class="form-control">
  <label for={id}>
    <slot />
  </label>
  {#if type !== 'textarea'}
    <input
      {type}
      class:invalid={!valid}
      {id}
      {name}
      on:blur|preventDefault={handleBlur} />
  {:else}
    <textarea
      class:invalid={!valid}
      {rows}
      {id}
      {name}
      on:blur|preventDefault={handleBlur} />
  {/if}
  {#if hint}
    <p class:error-message={!valid}>{hint}</p>
  {/if}
</div>
