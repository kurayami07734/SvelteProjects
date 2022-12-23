<script lang="ts">
    import Product from "./lib/Product.svelte";
</script>

<main>
    <Product productTitle="Vermuth" on:click={() => (alert("Vermuth added to cart"))}/>
</main>

<style>
</style>
