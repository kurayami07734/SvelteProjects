<script>
  import { createEventDispatcher } from "svelte";
  import MeetUpFilter from "./meetUpFilter.svelte";
  import MeetupItem from "./meetupItem.svelte";
  import Button from "../ui/button.svelte";
  import { meetups } from "./meetups.store";
  const dispatch = createEventDispatcher();
  let favsOnly = false;
  function setFilter(e) {
    return e.detail === 1 ? (favsOnly = true) : (favsOnly = false);
  }
</script>

<section id="meetup-controls">
  <Button on:click={() => dispatch("edit-meetup")}>New meetup</Button>
  <MeetUpFilter on:select={setFilter} />
</section>
<section id="meetups">
  {#each $meetups as meetup (meetup.id)}
    {#if (favsOnly && meetup.isFavorite) || !favsOnly}
      <MeetupItem
        id={meetup.id}
        on:show-details={(e) => dispatch("show-details", e.detail)}
        on:edit-meetup={(e) => dispatch("edit-meetup", e.detail)}
      />
    {/if}
  {/each}
</section>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
