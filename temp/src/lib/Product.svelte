<script lang="ts">
    export let productTitle: string;
</script>

<div class="product">
    <h1>{productTitle}</h1>
    <button on:click>Add to cart</button>
    <button on:click>Delete product</button>
</div>
