<script>
    // @ts-nocheck
    import TextInput from "../ui/textInput.svelte";
    import Button from "../ui/button.svelte";
    import { createEventDispatcher } from "svelte";
    import Modal from "../ui/modal.svelte";
    const dispatch = createEventDispatcher();
    let title = "";
    let subtitle = "";
    let imageURL = "";
    let address = "";
    let description = "";
    let email = "";
    function submitForm() {
        let obj = {
            title: title,
            subtitle: subtitle,
            imageURL: imageURL,
            address: address,
            description: description,
            email: email,
        };
        dispatch("add-meetup", obj);
    }
</script>

<Modal title="New Meetup" on:cancel>
    <form on:submit|preventDefault={submitForm}>
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
    <!-- <Button type="submit" slot="footer">Save</Button> -->
    </form>
</Modal>

<style>
    /* form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    } */
</style>
