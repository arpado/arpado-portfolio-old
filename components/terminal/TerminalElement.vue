<template>
  <div
    class="console-container"
    :class="{ hidden: terminalHidden, 'static-effect' : mainStore.staticEffectActive }"
    data-augmented-ui="
  tl-2-clip-x tr-clip br-2-clip-y bl-clip-inset both
"
  >
    <p>This is the terminal</p>
    <p>{{ scrollPos }}</p>
    <p>{{ windowHeight }}</p>
    <p>{{ scrollPerc.toFixed(2) }} %</p>
    <p>{{ mainStore.showModal }}</p>
    <div class="btn-toggle-terminal terminal-btn" @click="toggleTerminal">
      <div class="wrap">
        <div
          data-augmented-ui="all-triangle-left border"
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
  props: ["scrollPos", "windowHeight", "scrollPerc"],
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  data() {
    return {
      terminalHidden: false,
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
</style>