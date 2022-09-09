<template>
  <transition>
    <NuxtLayout
      name="footer-console"
      :class="{ hidden: footerHidden, 'static-effect' : mainStore.staticEffectActive }"
      class="footer-container"
      ref="footerContainer"
    >
      <div class="btn-toggle-footer footer-btn" @click="toggleFooter">
        <div class="wrap">
          <div
            data-augmented-ui="all-triangle-left border"
            class="arrow"
            :class="{ 'arrow-rotated': arrowRotated }"
          ></div>
        </div>
      </div>
      <div class="footer-text">
        <div class="page-structure">
          <h3>Navigation</h3>
          <a href="#hero">Hero</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">About</a>
          <a href="#contacts">Contacts</a>
        </div>
        <div class="libraries-used">
          <p>Boxes shaped with <a href="">Augmented UI</a></p>
          <p>Message form is powered by <a href="">SOMETHING</a></p>
          <p>Static effect is made by THIS GUY</p>
          <p class="copyright">Page made by Arpad O. copyright 2022</p>
        </div>
      </div>
    </NuxtLayout>
  </transition>
</template>

<script>
import {useMainStore} from '../../stores/MainStore.js';

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore }
  },
  data() {
    return {
      footerHidden: true,
      arrowRotated: true,
    };
  },
  methods: {
    toggleFooter() {
      this.footerHidden = !this.footerHidden;
      this.arrowRotated = !this.arrowRotated;
    },
  },
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 20%;
  bottom: 0%;
  left: 0;
  transition: all 0.5s linear;
  position: relative;
}
.btn-toggle-footer {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  position: absolute;
  top: 20%;
  right: 0%;
}
.btn-toggle-footer:hover {
  cursor: pointer;
}
.wrap {
  filter: drop-shadow(0 0 10px white);
}
.arrow {
  transition: all 1s cubic-bezier(0.54, 0.54, 0.54, 0.54);
}
.arrow-rotated {
  transform: rotateY(180deg);
}
.hidden {
  left: calc(-100% + 50px);
}
.footer-text {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}
.page-structure {
  display: flex;
  flex-direction: column;
}
.libraries-used {
  font-size: 0.75rem;
}
@media (min-width: 600px) {
  .libraries-used {
    font-size: inherit;
  }
}
</style>