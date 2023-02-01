<script>
  // @ts-nocheck
  import { meetups } from "./meetups.store";
  import TextInput from "../ui/textInput.svelte";
  import Button from "../ui/button.svelte";
  import { get } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  import { isValidFormData } from "../shared/validation.js";
  import Modal from "../ui/modal.svelte";
  const dispatch = createEventDispatcher();
  export let id = null;
  let meetup = {
    title: "",
    subtitle: "",
    imageURL: "",
    address: "",
    description: "",
    contactEmail: "",
  };
  let valid = {
    title: true,
    subtitle: true,
    imageURL: true,
    address: true,
    description: true,
    contactEmail: true,
  };
  let isValidForm = false;
  if (id) {
    const fetchedMeetup = get(meetups).find((m) => m.id === id);
    meetup = {
      title: fetchedMeetup.title,
      subtitle: fetchedMeetup.subtitle,
      imageURL: fetchedMeetup.imageURL,
      address: fetchedMeetup.address,
      description: fetchedMeetup.description,
      contactEmail: fetchedMeetup.contactEmail,
    };
  }
  $: {
    valid = isValidFormData(meetup);
    isValidForm =
      valid.title &&
      valid.subtitle &&
      valid.imageURL &&
      valid.address &&
      valid.description &&
      valid.contactEmail;
  }
  function submitForm() {
    if (id) {
      meetups.updateMeetup(id, meetup);
    } else {
      meetups.addMeetup(meetup);
    }
    dispatch("hide-modal");
  }
  function deleteMeetup() {
    meetups.removeMeetup(id);
    dispatch("hide-modal");
  }
  function cancel() {
    dispatch("hide-modal");
  }
</script>

<Modal title="New Meetup" on:cancel>
  <form>
    <TextInput
      id="title"
      labelText="Title"
      inputType="text"
      value={meetup.title}
      valid={valid.title}
      validityMessage="Title cannot be empty"
      on:input={(e) => (meetup.title = e.target.value)}
    />
    <TextInput
      id="subtitle"
      labelText="Subtitle"
      inputType="text"
      value={meetup.subtitle}
      valid={valid.subtitle}
      validityMessage="Subtitle cannot be empty"
      on:input={(e) => (meetup.subtitle = e.target.value)}
    />
    <TextInput
      id="imageURL"
      labelText="Image URL"
      inputType="text"
      value={meetup.imageURL}
      valid={valid.imageURL}
      validityMessage="Image URL is required"
      on:input={(e) => (meetup.imageURL = e.target.value)}
    />
    <TextInput
      id="address"
      labelText="Address"
      inputType="text"
      value={meetup.address}
      valid={valid.address}
      validityMessage="Address cannot be empty"
      on:input={(e) => (meetup.address = e.target.value)}
    />
    <TextInput
      id="email"
      labelText="Contact Email"
      inputType="email"
      value={meetup.contactEmail}
      valid={valid.contactEmail}
      validityMessage="Email is not valid"
      on:input={(e) => (meetup.contactEmail = e.target.value)}
    />
    <TextInput
      inputType="textarea"
      rows="3"
      id="description"
      labelText="Description"
      bind:value={meetup.description}
      valid={valid.description}
      validityMessage="Description cannot be empty"
    />
    <!-- <Button type="submit" slot="footer">Save</Button> -->
  </form>
  <div class="footer" slot="footer">
    <Button on:click={cancel}>Cancel</Button>
    <Button color="success" on:click={submitForm} disabled={!isValidForm}>Save</Button>
    {#if id}
      <Button on:click={deleteMeetup}>Delete</Button>
    {/if}
  </div>
</Modal>

<style>
  /* form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    } */
</style>
