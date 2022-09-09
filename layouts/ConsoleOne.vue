<template>
  <div
    class="console-container"
    data-augmented-ui="
  tl-clip tr-2-clip-x r-clip br-clip-inset b-clip-x bl-clip-inset both"
  >
    <slot />
    <div
      class="filler-bll moving-gradient-background"
      data-augmented-ui="
  tr-clip-inset bl-clip-inset
"
    ></div>
    <div
      data-augmented-ui="
  tr-clip
"
      class="filler-blb moving-gradient-background"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.console-container {
  padding: 2rem;
  position: relative;
  flex-direction: column;
   --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  --aug-tl: 50px;
  --aug-tr-extend1: 40%;
  --aug-b-extend1: 20%;
}
.filler-bll {
  width: 20px;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  --aug-tr-inset1: 0%;
  --aug-tr-inset2: 0%;
}
.filler-blb {
  width: 30%;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>