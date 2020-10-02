<script>
  import MeetupList from './Meetups/MeetupGrid.svelte';

  import Header from './UI/Header.svelte';
  import InputText from './UI/InputText.svelte';
  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup we will have some experts that will teach you how to code!',
      imageUrl: 'https://www.instagram.com/p/CEO0H9FDv0H/media/?size=l',
      address: '27th Nerd Rd, 32515 NY',
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim together',
      subtitle: "Lets's go for some swimming",
      description: 'Well swim some ipsum dipsum slipsum!',
      imageUrl: 'https://www.instagram.com/p/CEO0H9FDv0H/media/?size=l',
      address: '27th Nerd Rd, 32515 NY',
      contactEmail: 'code@test.com'
    }
  ];
  function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const pair of formData.entries()) {
      if (!!pair[0] && !!pair[1]) data[pair[0]] = pair[1];
    }
    return data;
  }
  function handleSumbit(submitEvent) {
    const data = getFormValues(submitEvent.target);
    debugger;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={handleSumbit}>
    <InputText id="title">Title</InputText>
    <InputText id="subtitle">Subtitle</InputText>
    <InputText id="description" type="textarea">Description</InputText>
    <InputText id="imageUrl">ImageUrl</InputText>
    <InputText id="address">Address</InputText>
    <InputText id="contactEmail" type="email">Contact Email</InputText>
    <button type="submit">Save</button>
  </form>
  <MeetupList {meetups} />
</main>
