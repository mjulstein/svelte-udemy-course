<script>
  import { createEventDispatcher } from 'svelte';
  import { getFormValues } from '../helpers/getFormValues';

  import formProps from './formProps';
  import Button from '../UI/Button.svelte';
  import InputText from '../UI/InputText.svelte';
  import Modal from '../UI/Modal.svelte';

  const dispatch = createEventDispatcher();
  let inputProps = [...formProps];
  export let title;

  let form;

  $: canSubmit = inputProps.every(({ valid }) => !!valid);

  function handleSumbit(submitEvent) {
    if (!canSubmit) {
      return;
    }
    try {
      const data = getFormValues(submitEvent.target);
      dispatch('form-submitted', data);
    } catch (error) {
      console.error(error);
    }
  }
  function cancel() {
    dispatch('cancel');
  }

  function handleInvalidInput({ detail }) {
    inputProps.find(({ id }) => detail === id).valid = false;
    inputProps = inputProps;
  }
  function handleValidInput({ detail }) {
    inputProps.find(({ id }) => detail === id).valid = true;
    inputProps = inputProps;
  }
</script>

<Modal {title} on:cancel>
  <form id={title} on:submit|preventDefault={handleSumbit} bind:this={form}>
    {#each inputProps as input, _ (input.id)}
      <InputText
        {...input}
        on:invalid-input={handleInvalidInput}
        on:valid-input={handleValidInput}>
        {input.label}
      </InputText>
    {/each}
  </form>
  <div slot="footer">
    <Button on:click={() => console.log(getFormValues(form))} mode="outline">
      log form
    </Button>
    <Button on:click={cancel} mode="outline">Cancel</Button>
    <Button type="submit" form={title} disabled={!canSubmit}>Save</Button>
  </div>
</Modal>
