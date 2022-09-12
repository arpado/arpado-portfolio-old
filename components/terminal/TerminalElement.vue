<template>
  <div
    class="console-container"
    :class="{
      hidden: terminalHidden,
      'static-effect': mainStore.staticEffectActive,
    }"
    data-augmented-ui="
  tl-2-clip-x tr-clip br-2-clip-y bl-clip-inset both
"
  >
    <p>This is the terminal</p>
    <hr />
    <div class="text-container">
      <div class="text-column">
        <div class="text-item">
          <p>Window Height</p>
          <p>{{ mainStore.windowHeight }} px</p>
        </div>
        <div class="text-item">
          <p>Window Width</p>
          <p>{{ mainStore.windowWidth }} px</p>
        </div>
        <div class="text-item">
          <p>Scroll Position</p>
          <p>{{ mainStore.scrollPos.toFixed(2) }} px</p>
        </div>
        <div class="text-item">
          <p>Scroll Progress</p>
          <p>{{ mainStore.getScrollPercent.toFixed(2) }} %</p>
        </div>
      </div>
      <!-- <div class="text-column"></div> -->
    </div>

    <p>{{ mainStore.showModal }}</p>
    <div class="btn-toggle-terminal terminal-btn" @click="toggleTerminal">
      <div class="wrap">
        <div
          data-augmented-ui="all-triangle-right border"
          class="arrow"
          :class="{ 'arrow-rotated': arrowRotated }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../../stores/MainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  data() {
    return {
      terminalHidden: true,
      arrowRotated: false,
    };
  },
  methods: {
    toggleTerminal() {
      this.terminalHidden = !this.terminalHidden;
      this.arrowRotated = !this.arrowRotated;
    },
  },
};
</script>

<style scoped>
.console-container {
  width: 300px;
  height: 200px;
  --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  padding: 2rem;
  color: white;
  position: fixed;
  top: 70px;
  left: 0;
  transition: all 0.5s linear;
  z-index: 2;
}
.btn-toggle-terminal {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  top: 0%;
  right: 0;
}
.btn-toggle-terminal:hover {
  cursor: pointer;
}
.arrow {
  transition: all 1s cubic-bezier(0.54, 0.54, 0.54, 0.54);
}
.arrow-rotated {
  transform: rotateY(180deg);
}
.hidden {
  left: -250px;
}
.wrap {
  filter: drop-shadow(0 0 10px white);
}
.text-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
}
.text-column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.text-item {
  display: flex;
  justify-content: space-between;
}
hr {
  margin: 10px;
}
</style>