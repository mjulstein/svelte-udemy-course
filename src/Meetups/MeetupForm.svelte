<script>
  import { createEventDispatcher } from 'svelte';

  import Button from '../UI/Button.svelte';
  import InputText from '../UI/InputText.svelte';
  const dispatch = createEventDispatcher();
  function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const pair of formData.entries()) {
      if (!!pair[0] && !!pair[1]) data[pair[0]] = pair[1];
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
</script>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<form on:submit|preventDefault={handleSumbit}>
  <InputText id="title">Title</InputText>
  <InputText id="subtitle">Subtitle</InputText>
  <InputText id="description" type="textarea">Description</InputText>
  <InputText id="imageUrl">ImageUrl</InputText>
  <InputText id="address">Address</InputText>
  <InputText id="contactEmail" type="email">Contact Email</InputText>
  <Button type="submit">Save</Button>
</form>
