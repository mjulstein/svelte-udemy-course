<script>
  import MeetupForm from './Meetups/MeetupForm.svelte';

  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import Button from './UI/Button.svelte';
  import Header from './UI/Header.svelte';
  let editMode = null;
  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup we will have some experts that will teach you how to code!',
      imageUrl: 'https://www.instagram.com/p/CEO0H9FDv0H/media/?size=l',
      address: '27th Nerd Rd, 32515 NY',
      contactEmail: 'code@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim together',
      subtitle: "Lets's go for some swimming",
      description: 'Well swim some ipsum dipsum slipsum!',
      imageUrl: 'https://www.instagram.com/p/CEO0H9FDv0H/media/?size=l',
      address: '27th Nerd Rd, 32515 NY',
      contactEmail: 'code@test.com',
      isFavorite: false
    }
  ];
  function addMeetup({ detail }) {
    const newMeetup = {
      id: new Date().getTime(),
      ...detail
    };
    meetups = [newMeetup, ...meetups];
    editMode = false;
  }
  function handleFavoriteClicked({ detail }) {
    const index = meetups.findIndex(({ id }) => id === detail);
    if (index === -1) {
      return;
    }
    meetups[index].isFavorite = !meetups[index].isFavorite;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')} disabled={!!editMode}>
      New Meetup
    </Button>
  </div>
  {#if editMode === 'add'}
    <MeetupForm on:form-submitted={addMeetup} />
  {/if}
  <MeetupGrid {meetups} on:favorite-clicked={handleFavoriteClicked} />
</main>
