<template>
  <div id="main-container" ref="mainContainer">
    <BackgroundElement />
    <NavbarHorizontalMenu v-if="mainStore.windowWidth > 650" />
    <NavbarVerticalMenu v-if="mainStore.windowWidth <= 650" />
    <TerminalElement />
    <HeroSection />
    <ProjectsProjectSection>
      <slot />
    </ProjectsProjectSection>
    <ContactsSection />
    <FooterElement />
    <ModalsModalView />
    <ModalsMessageModal />
  </div>
</template>

<script>
import gsap from "gsap";
import { useMainStore } from "./stores/MainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  methods: {
    // ezt setupban kell amjd h\vni talan, de lehet, jo helyen van ott
    refreshWindowStats() {
      this.mainStore.windowWidth = window.innerWidth;
      this.mainStore.windowHeight = window.innerHeight;
      this.mainStore.pageHeight = this.$refs.mainContainer.clientHeight;
    },
  },
  mounted() {
    this.refreshWindowStats();
    visualViewport.addEventListener("resize", this.refreshWindowStats);
    window.addEventListener("scroll", this.mainStore.getPositionOnScroll);
  },
  unmounted() {
    visualViewport.removeEventListener("resize", this.refreshWindowStats);
    window.removeEventListener("scroll", this.mainStore.getPositionOnScroll);
  },
};
</script>

<style>
@import "/node_modules/augmented-ui/augmented-ui.min.css";
@import "/assets/white-noise.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  font-family: "Orbitron";
  font-weight: 100;
  text-shadow: 0 0 10px white;
}
body {
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
}
#main-container {
  height: fit-content;
  position: relative;
}
/* talan majd ezzel szinkronba lehet hozni, most nincs erre idom:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API */

.moving-gradient-background,
.console-container::after,
.hero-outer::after,
.nav-btn::after,
.project-element::after,
.about-container::after,
.message-container::after,
.footer-container::after,
.submit-btn::after,
.modal-close::after,
.project-link::after {
  /* background: linear-gradient(
    135deg,
    rgba(0, 90, 121, 1) 0%,
    rgba(0, 90, 121, 1) 49%,
    rgba(0, 212, 255, 1) 50%,
    rgba(0, 90, 121, 1) 51%,
    rgba(0, 90, 121, 1) 100%
  ); */
  background: #00ff41;
  background-size: 400%;
  background-position: left;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation-duration: 10s;
  /* animation-name: slide; */
  animation-iteration-count: infinite;
}
@keyframes slide {
  from {
    background-position: left;
  }

  to {
    background-position: right;
  }
}

:root {
  --lightGreen: #00ff41;
  --middleGreen: #008f11;
  --darkGreen: #003b00;
}
a {
  color: white;
  -webkit-transition: text-shadow 0.5s ease-out;
  -moz-transition: text-shadow 0.5s ease-out;
  -o-transition: text-shadow 0.5s ease-out;
  transition: text-shadow 0.5s ease-out;
}
a:hover {
  text-shadow: 0 0 30px white;
}
a:visited {
  color: white;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background-color: black;
}
::-webkit-scrollbar-thumb {
  background: var(--lightGreen);
  border-radius: 5px;
}
@media (min-width: 600px) {
  body {
    /* font-size: 1.15rem; */
  }
}

@media (min-width: 1000px) {
  body {
    /* font-size: 1.3rem; */
  }
}
</style>
