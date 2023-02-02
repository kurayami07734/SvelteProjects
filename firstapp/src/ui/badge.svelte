<script>
  import { fade } from "svelte/transition";
</script>

<span transition:fade={{ duration: 150 }}>
  <slot />
</span>

<style>
  span {
    display: inline-block;
    margin: 0 0.15rem;
    border-radius: 3px;
    border: 1px solid #cf0056;
    background: #cf0056;
    color: white;
    padding: 0 0.5rem;
    font-family: "Lato", sans-serif;
    font-size: 0.8rem;
  }
</style>
