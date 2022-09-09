<template>
  <div
    class="wrapper nav-btn"
    data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both"
  :style="{ gridArea: `${button.name}`, left: `${(index * 33)}%`}"
  @click="$emit('emitChangeSubPage', button.subPage)"
  >
    <p>{{ button.name }}</p>
  </div>
</template>

<script>
    // :style="{ right: `${btnArrayLength - index * 170 + 410}px` }"
export default {
  name: "ProjectItemHor",
  props: ["button", "index"],
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  text-decoration: none;
  color: white;
  font-weight: 900;
  height: 100%;
  width: 33%;
  min-width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  --aug-tr: 50px;
  --aug-bl: 50px;
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
}
.wrapper:hover {
    cursor: pointer;
}
@media (min-width: 550px) {
  .wrapper {
  font-size: 1.5rem;
  }
}
</style>