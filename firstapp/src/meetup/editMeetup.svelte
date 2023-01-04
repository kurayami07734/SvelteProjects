<script>
    // @ts-nocheck
    import TextInput from "../ui/textInput.svelte";
    import Button from "../ui/button.svelte";
    import { createEventDispatcher } from "svelte";
    import { isEmpty } from "../shared/validation.js";
    import Modal from "../ui/modal.svelte";
    const dispatch = createEventDispatcher();
    let meetup = {
        title: '',
        subtitle: '',
        imageURL: '',
        address: '',
        description: '',
        email: '',
    };
    let valid = {
        title: true,
        subtitle: true,
        imageURL: true,
        address: true,
        description: true,
        email: true,
    };
    function submitForm() {
        dispatch("add-meetup", meetup);
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
            on:input={(e) => (meetup.subtitle = e.target.value)}
        />
        <TextInput
            id="imageURL"
            labelText="Image URL"
            inputType="text"
            value={meetup.imageURL}
            valid={valid.imageURL}
            on:input={(e) => (meetup.imageURL = e.target.value)}
        />
        <TextInput
            id="address"
            labelText="Address"
            inputType="text"
            value={meetup.address}
            valid={valid.address}
            on:input={(e) => (meetup.address = e.target.value)}
        />
        <TextInput
            id="email"
            labelText="Contact Email"
            inputType="email"
            value={meetup.email}
            valid={valid.email}
            on:input={(e) => (meetup.email = e.target.value)}
        />
        <TextInput
            inputType="textarea"
            rows="3"
            id="description"
            labelText="Description"
            value={meetup.description}
            valid={valid.description}
            on:input={(e) => (meetup.description = e.target.value)}
        />
        <!-- <Button type="submit" slot="footer">Save</Button> -->
    </form>
    <Button slot="footer" on:click={submitForm}>Save</Button>
</Modal>

<style>
    /* form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    } */
</style>
