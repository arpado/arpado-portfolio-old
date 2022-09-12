<template>
  <transition>
    <NuxtLayout
      name="footer-console"
      :class="{
        hidden: footerHidden,
        'static-effect': mainStore.staticEffectActive,
      }"
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
        <div class="text-container">
          <h3>Navigation</h3>
          <div class="links-container">
            <a href="#hero">Hero</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">About</a>
            <a href="#contacts">Contacts</a>
          </div>
        </div>
        <div class="text-container">
          <h3>Assets</h3>
          <div class="libraries-used">
            <div>
              <p>
                Boxes shaped with
                <a href="https://augmented-ui.com/">Augmented UI</a>. Message
                form is powered by
                <a href="https://formsubmit.co/">FormSubmit</a>. Static effect
                is made by
                <a href="https://codepen.io/farisk/pen/GMqvRV">faris k</a>.
              </p>
              <p class="copyright">Page made by Arpad O. Copyright 2022</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </transition>
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
  height: fit-content;
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
.text-container {
  display: flex;
  flex-direction: column;
}
.links-container,
.libraries-used {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
}
.links-container > a {
  margin: 10px 10px 10px 0;
}
@media (min-width: 600px) {
  .links-container,
  .libraries-used {
    font-size: inherit;
    flex-direction: row;
  }
}
</style>