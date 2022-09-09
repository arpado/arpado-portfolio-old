<template>
  <div
    class="container"
    data-augmented-ui="
   tl-clip tr-2-clip-x br-clip-inset both
"
  >
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 1rem 50px 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  flex-direction: column;
  --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  --aug-br-inset1: 30px;
  --aug-br-inset2: 50px;
}
</style>