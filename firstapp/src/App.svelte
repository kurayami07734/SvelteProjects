<script>
  // @ts-nocheck
  import EditMeetup from "./meetup/editMeetup.svelte";
  import MeetUpGrid from "./meetup/meetUpGrid.svelte";
  import MeetUpDetails from "./meetup/meetUpDetails.svelte";
  import Header from "./ui/header.svelte";
  let page = "overview";
  let id = null;
  let showEditMeetup = false;
  function showModal(meetupID) {
    id = meetupID;
    showEditMeetup = true;
  }
  function hideModal() {
    showEditMeetup = false;
    id = null;
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
      <EditMeetup on:hide-modal={hideModal} {id} />
    {/if}
    <MeetUpGrid
      on:show-details={showDetails}
      on:edit-meetup={(e) => showModal(e.detail)}
    />
  {:else}
    <MeetUpDetails {id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
