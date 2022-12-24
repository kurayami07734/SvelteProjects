<script lang="ts">
    import Cart from "./lib/cart.svelte";
    import Product from "./lib/Product.svelte";
    let products: Array<string> = [
        "Vermuth",
        "Whiskey",
        "Brandy",
        "Vodka",
        "Beer",
    ];
    let cart: Array<string> = [];
    const deleteProduct = (product: string) => {
        products = products.filter((p) => p != product);
        alert(`${product} deleted`);
    };
    const addToCart = (name: string) => {
        cart = [name, ...cart];
    };
    let showCart: boolean = false;
</script>

<main>
    <button class="cart-button" on:click={() => (showCart = true)}>
        Show cart
    </button>
    {#if showCart}
        <Cart on:click={() => (showCart = false)}>
            <h2 slot="header">Items</h2>
            {#each cart as c}
                <h4>{c}</h4>
            {/each}
        </Cart>
    {/if}
    <div class="menu">
        {#each products as p}
            <Product
                productTitle={p}
                on:add-to-cart={() => addToCart(p)}
                on:delete={() => deleteProduct(p)}
            />
        {/each}
    </div>
</main>

<style>
    .cart-button {
        position: fixed;
        top: 10vh;
        right: 10vh;
    }
</style>
