<script>
  import { createEventDispatcher } from "svelte";
  import MeetupItem from "./meetupItem.svelte";
  export let meetups;
  const dispatch = createEventDispatcher();
</script>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      id={meetup.id}
      on:show-details={(e) => dispatch("show-details", e.detail)}
      on:edit-meetup={(e) => dispatch("edit-meetup", e.detail)}
    />
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
