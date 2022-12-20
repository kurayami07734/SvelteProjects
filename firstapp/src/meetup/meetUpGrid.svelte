<script>
    import MeetupItem from "./meetupItem.svelte";
    export let meetups;
</script>

<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem
            title={meetup.title}
            subtitle={meetup.subtitle}
            imageURL={meetup.imageURL}
            description={meetup.description}
            contactEmail={meetup.contactEmail}
            address={meetup.address}
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
