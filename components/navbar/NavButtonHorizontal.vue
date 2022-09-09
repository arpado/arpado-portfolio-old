<template>
  <a
    class="wrapper nav-btn"
    :href="button.href"
    data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both"
    :style="{ right: `${btnArrayLength - index * 170 + 410}px` }"
  >
    <p>{{ button.name }}</p>
  </a>
</template>

<script>
export default {
  name: "DropdownItem",
  props: ["button", "index", "btnArrayLength"],
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  text-decoration: none;
  color: white;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  --aug-tr: 70px;
  --aug-bl: 70px;
}
</style>