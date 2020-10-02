<script>
  import MeetupForm from './Meetups/MeetupForm.svelte';

  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import Header from './UI/Header.svelte';

  let meetups = [
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
  function addMeetup(formValues = {}) {
    const newMeetup = {
      id: new Date().getTime(),
      ...formValues
    };
    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <MeetupForm saveMeetupFunc={addMeetup} />
  <MeetupGrid {meetups} />
</main>
