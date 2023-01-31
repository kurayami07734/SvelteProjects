<script>
  // @ts-nocheck
  import EditMeetup from "./meetup/editMeetup.svelte";
  import MeetUpGrid from "./meetup/meetUpGrid.svelte";
  import Details from "./meetup/details.svelte";
  import Button from "./ui/button.svelte";
  import Header from "./ui/header.svelte";
  import { meetups } from "./meetup/meetups.store";
  let page = "overview";
  let id = null;
  let showEditMeetup = false;
  function toggleEditMeetup(event) {
    if (showEditMeetup === false) {
      id = event.detail;
      showEditMeetup = true;
    } else {
      id = null;
      showEditMeetup = false;
    }
  }
  function showDetails(event) {
    page = "details";
    id = event.detail;
  }
  function closeDetails() {
    page = "overview";
    id = null;
  }
</script>

<Header />

<main>
  {#if page === "overview"}
    {#if showEditMeetup}
      <EditMeetup on:hide-modal={toggleEditMeetup} {id} />
    {:else}
      <div class="meetup-control">
        <Button on:click={toggleEditMeetup}>New meetup</Button>
      </div>
    {/if}
    {#if meetups.length === 0}
      <h1 class="empty">No meetups added yet</h1>
    {/if}
    <MeetUpGrid
      meetups={$meetups}
      on:show-details={showDetails}
      on:edit-meetup={toggleEditMeetup}
    />
  {:else}
    <Details {id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-control {
    margin: 1rem;
  }
  .empty {
    place-items: center;
    display: grid;
    height: 4rem;
  }
</style>
