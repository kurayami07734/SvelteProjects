<script lang="ts">
    export let productTitle: string;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="product">
    <h1>{productTitle}</h1>
    <button on:click={() => dispatch("add-to-cart", "p1")}>Add to cart</button>
    <button on:click={() => dispatch("delete", "p2")}>Delete product</button>
</div>
