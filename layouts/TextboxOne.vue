<template>
  <div
    data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both
"
    class="container"
  >
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  --aug-inlay-bg: #008f11;
  --aug-inlay-opacity: 0.7;
  --aug-border-all: 1px;
  --aug-inlay-all: 6px;
}
</style>