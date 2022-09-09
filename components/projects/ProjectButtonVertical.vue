<template>
  <div
    class="wrapper nav-btn"
    data-augmented-ui="
  bl-clip-x br-clip-x t-clip-x both
"
  @click="$emit('emitChangeSubPage', button.subPage)"
  >
    <p>{{ button.name }}</p>
  </div>
</template>

<script>
    // :style="{ transform: `translateY(${index * 100 + 50}px)` }"
    //   :style="{ top: `${index * 100 + 50}px` }"
export default {
  name: "DropdownItem",
  props: ["button", "index"],
};
</script>

<style scoped>
.wrapper {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%;
  --aug-t-extend1: 30%;
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
}
.wrapper:hover {
    cursor: pointer;
}
</style>