<script>
  import { createEventDispatcher } from "svelte";
  import MeetupItem from "./meetupItem.svelte";
  export let meetups;
  const dispatch = createEventDispatcher();
</script>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem {...meetup} on:show-details={(e) => dispatch("show-details", e.detail) } />
  {/each}
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
