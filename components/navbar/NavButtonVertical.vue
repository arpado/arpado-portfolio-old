<template>
  <a
    class="wrapper nav-btn"
    :href="button.href"
    data-augmented-ui="
  bl-clip-x br-clip-x t-clip-x both
"
    :style="{ top: `${index * 100 + 50}px` }"
  >
    <p>{{ button.name }}</p>
  </a>
</template>

<script>
// :style="{ transform: `translateY(${index * 100 + 50}px)` }"
export default {
  name: "DropdownItem",
  props: ["button", "index"],
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  right: 0;
  text-decoration: none;
  color: white;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%;
  --aug-t-extend1: 30%;
}
</style>