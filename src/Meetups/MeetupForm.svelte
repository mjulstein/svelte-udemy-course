<script>
  import { createEventDispatcher } from 'svelte';

  import Button from '../UI/Button.svelte';
  import InputText from '../UI/InputText.svelte';
  import Modal from '../UI/Modal.svelte';

  const dispatch = createEventDispatcher();
  export let title;

  let form;

  function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const pair of formData.entries()) {
      const key = !!pair[0] && pair[0];
      if (!!key && !!pair[1]) {
        const value = pair[1];
        if (!data[key]) {
          data[key] = value;
        } else {
          const oldVal = data[key];
          data[key] = [...(Array.isArray(oldVal) ? oldVal : [oldVal]), value];
        }
      }
    }
    return data;
  }
  function handleSumbit(submitEvent) {
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
</script>

<Modal {title} on:cancel>
  <form id={title} on:submit|preventDefault={handleSumbit} bind:this={form}>
    <InputText id="title">Title</InputText>
    <InputText id="subtitle">Subtitle</InputText>
    <InputText id="description" type="textarea">Description</InputText>
    <InputText id="imageUrl">ImageUrl</InputText>
    <InputText id="address">Address</InputText>
    <InputText id="contactEmail" type="email">Contact Email</InputText>
  </form>
  <div slot="footer">
    <Button on:click={() => console.log(getFormValues(form))} mode="outline">
      log form
    </Button>
    <Button on:click={cancel} mode="outline">Cancel</Button>
    <Button type="submit" form={title}>Save</Button>
  </div>
</Modal>
