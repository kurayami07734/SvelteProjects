<script>
// @ts-nocheck

  
  import MeetUpGrid from "./meetup/meetUpGrid.svelte";
  import Header from "./ui/header.svelte";
  import TextInput from "./ui/textInput.svelte";
  import Button from "./ui/button.svelte";

  let title = "";
  let subtitle = "";
  let imageURL = "";
  let address = "";
  let description = "";
  let email = "";
  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in few hours",
      description: "Experts will be teaching basic python for all",
      imageURL:
        "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      contactEmail: "contact@test.com",
      address: "Wayne Manor, 20539 Gotham",
    },
    {
      id: "m2",
      title: "Swim along",
      subtitle: "For all swimmers",
      description: "Throughout the day",
      imageURL:
        "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      contactEmail: "contact@test.com",
      address: "Swimming pool, Wayne Manor, 20539 Gotham",
    },
  ];
  function addMeetup() {
    const newMeet = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageURL: imageURL,
      contactEmail: email,
      address: address,
    };
    meetups = [newMeet, ...meetups];
  }
</script>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      labelText="Title"
      inputType="text"
      value={title}
      on:input={(e) => (title = e.target.value)}
    />
    <TextInput
      id="subtitle"
      labelText="Subtitle"
      inputType="text"
      value={subtitle}
      on:input={(e) => (subtitle = e.target.value)}
    />
    <TextInput
      id="imageURL"
      labelText="Image URL"
      inputType="text"
      value={imageURL}
      on:input={(e) => (imageURL = e.target.value)}
    />
    <TextInput
      id="address"
      labelText="Address"
      inputType="text"
      value={address}
      on:input={(e) => (address = e.target.value)}
    />
    <TextInput
      id="email"
      labelText="Contact Email"
      inputType="email"
      value={email}
      on:input={(e) => (email = e.target.value)}
    />
    <TextInput
      inputType="textarea"
      rows="3"
      id="description"
      labelText="Description"
      value={description}
      on:input={(e) => (description = e.target.value)}
    />
    <Button type="submit" caption="Save"/>
  </form>
  <MeetUpGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
