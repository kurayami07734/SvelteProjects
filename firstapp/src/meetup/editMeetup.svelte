<script>
  // @ts-nocheck
  import { meetups } from "./meetups-store";
  import TextInput from "../ui/textInput.svelte";
  import Button from "../ui/button.svelte";
  import { createEventDispatcher } from "svelte";
  import { isEmpty, isValidEmail } from "../shared/validation.js";
  import Modal from "../ui/modal.svelte";
  const dispatch = createEventDispatcher();
  let meetup = {
    title: "",
    subtitle: "",
    imageURL: "",
    address: "",
    description: "",
    email: "",
  };
  let valid = {
    title: true,
    subtitle: true,
    imageURL: true,
    address: true,
    description: true,
    email: true,
  };
  let isValidForm = false;
  $: valid.title = !isEmpty(meetup.title);
  $: valid.subtitle = !isEmpty(meetup.subtitle);
  $: valid.imageURL = !isEmpty(meetup.imageURL);
  $: valid.address = !isEmpty(meetup.address);
  $: valid.description = !isEmpty(meetup.description);
  $: valid.email = isValidEmail(meetup.email);
  $: isValidForm =
    valid.title &&
    valid.subtitle &&
    valid.imageURL &&
    valid.address &&
    valid.description &&
    valid.email;
  function submitForm() {
    meetups.addMeetup(meetup);
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
      value={meetup.email}
      valid={valid.email}
      validityMessage="Email is not valid"
      on:input={(e) => (meetup.email = e.target.value)}
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
    <Button on:click={submitForm} disabled={!isValidForm}>Save</Button>
  </div>
</Modal>

<style>
  /* form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    } */
</style>
