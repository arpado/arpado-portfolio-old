<template>
  <div class="galaxy-container">
    <img
      src="/images/pngegg.png"
      class="galaxy"
      :style="{ marginLeft: `${50 - Math.floor(mainStore.getScrollPercent)}%` }"
    />
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
};
</script>

<style scoped>
.galaxy-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/stars-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.galaxy {
  height: 1000px;
  width: 1000px;
  animation: bg-animation 600s infinite linear;
}
.galaxy-container::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
}
@keyframes bg-animation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>