<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  export let title;
  const dispatch = createEventDispatcher();
</script>

<div transition:fade class="backdrop" on:click={() => dispatch("cancel")} />
<div transition:fly={{ y: -100 }} class="modal">
  <h1>{title}</h1>
  <div class="content"><slot /></div>
  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: #dddddd;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #ccc;
    background-color: white;
    font-family: "Roboto Slab", sans-serif;
  }
  .content {
    padding: 1rem;
  }
  footer {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
