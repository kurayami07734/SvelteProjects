<script lang="ts">
  //   import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const progress = tweened(0, {
    easing: cubicOut,
  });
</script>

<main>
  <progress value={$progress} />
  <button on:click={() => ($progress += 0.1)}>increment</button>
  <button on:click={() => ($progress -= 0.1)}>decrement</button>
</main>

<style>
</style>
