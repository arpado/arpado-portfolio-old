<template>
  <div class="container">
    <div class="warning-triangle-container">
      <div data-augmented-ui="all-hexangle-up border" class="warning-triangle">
        <p>!</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: black; */
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
}
.warning-triangle-container::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: black; */
  opacity: 0.6;
}
.warning-triangle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}
.warning-triangle {
  --aug-all-height: 100px;
  --aug-border-all: 10px;
  --aug-border-bg: rgb(160, 0, 0);
  font-size: 5rem;
  color: rgb(160, 0, 0);
  text-shadow: 0 0 10px rgb(160, 0, 0);
}
@media (min-width: 850px) {
  .warning-triangle {
    --aug-all-height: 150px;
    --aug-border-all: 15px;
    font-size: 8rem;
  }
}
</style>