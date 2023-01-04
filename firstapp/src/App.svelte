<script>
  // @ts-nocheck
  import EditMeetup from "./meetup/editMeetup.svelte";
  import MeetUpGrid from "./meetup/meetUpGrid.svelte";
  import Button from "./ui/button.svelte";
  import Header from "./ui/header.svelte";
  function addMeetup(event) {
    const details = event.detail;
    const newMeet = {
      id: Math.random().toString(),
      title: details.title,
      subtitle: details.subtitle,
      description: details.description,
      imageURL: details.imageURL,
      contactEmail: details.email,
      address: details.address,
      isFavorite: false,
    };
    meetups = [newMeet, ...meetups];
    showEditMeetup = !showEditMeetup;
  }
  let meetups = [
    // {
    //   id: "m1",
    //   title: "Coding Bootcamp",
    //   subtitle: "Learn to code in few hours",
    //   description: "Experts will be teaching basic python for all",
    //   imageURL:
    //     "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    //   contactEmail: "contact@test.com",
    //   address: "Wayne Manor, 20539 Gotham",
    //   isFavorite: false,
    // },
    // {
    //   id: "m2",
    //   title: "Swim along",
    //   subtitle: "For all swimmers",
    //   description: "Throughout the day",
    //   imageURL:
    //     "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //   contactEmail: "contact@test.com",
    //   address: "Swimming pool, Wayne Manor, 20539 Gotham",
    //   isFavorite: false,
    // },
  ];

  function toggleFavorite(event) {
    const id = event.detail;
    let updatedMeetup = { ...meetups.find((m) => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const idx = meetups.findIndex((m) => m.id === id);
    console.log(updatedMeetup);
    let updatedMeetups = [...meetups];
    updatedMeetups[idx] = updatedMeetup;
    console.log(updatedMeetups);
    meetups = updatedMeetups;
  }
  let showEditMeetup = false;
  function toggleEditMeetup() {
    showEditMeetup = !showEditMeetup;
  }
</script>

<Header />

<main>
  {#if showEditMeetup}
    <EditMeetup on:add-meetup={addMeetup} on:cancel={toggleEditMeetup} />
  {:else}
    <div class="meetup-control">
      <Button on:click={toggleEditMeetup}>New meetup</Button>
    </div>
  {/if}
  {#if meetups.length === 0}
    <h1 class="empty">No meetups added yet</h1>
  {/if}
  <MeetUpGrid {meetups} on:toggle-favorite={toggleFavorite} />
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
