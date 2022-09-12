<template>
  <transition name="modalanimation" :duration="300">
    <div
      class="modal-container"
      v-if="mainStore.showMessage"
      @click="mainStore.closeOnOutsideClick"
    >
      <NuxtLayout
        name="console-one"
        class="main-console"
        :class="{ 'static-effect': mainStore.staticEffectActive }"
      >
        <div class="modal-content-box">
          <div class="modal-message">
            <p>{{ mainStore.modalMessage }}</p>
          </div>
          <div
            class="modal-close"
            data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both
"
            @click="mainStore.closeMessageModal"
          >
            <p>+</p>
          </div>
        </div>
      </NuxtLayout>
    </div>
  </transition>
</template>

<script>
import { useMainStore } from "../../stores/MainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  mounted() {
    document.addEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
};
</script>

<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
}
.main-console {
  width: fit-content;
  height: fit-content;
  transition: all 0.3s linear;
  transition-delay: 0.3s;
}
.modal-content-box {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.modal-message {
  grid-row: 2/3;
  grid-column: 1/4;
}
.modal-close {
  width: 50px;
  height: 50px;
  font-size: 4rem;
  font-weight: bold;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/2;
  grid-column: 3/4;
  font-family: monospace;
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
}
.modal-close:hover {
  cursor: pointer;
}
.modal-close > p {
  transform: rotateZ(45deg);
}
.modalanimation-enter-active,
.modalanimation-leave-active {
  transition: all 0.3s linear;
}
.modalanimation-enter-from,
.modalanimation-leave-to {
  opacity: 0;
}
</style>