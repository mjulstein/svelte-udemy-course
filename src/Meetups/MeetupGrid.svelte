<script>
  import MeetupItem from './MeetupItem.svelte';

  export let meetups;
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<ul class="meetups">
  {#each meetups as meetup, i (meetup.id)}
    <li>
      <MeetupItem {...meetup} on:favorite-clicked on:show-details-clicked />
    </li>
  {/each}
</ul>
