<div class="backdrop">
    <slot name="header" />
    <button class="hide-cart" on:click>Hide cart</button>
    <div class="cart">
        <slot />
    </div>
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        overflow: scroll;
    }
    .cart {
        margin-top: 1rem;
        padding: 1rem;
        z-index: 100;
        width: 80%;
        background-color: #242424;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
    .hide-cart {
        position: fixed;
        top: 5vh;
        right: 5vh;
    }
</style>
