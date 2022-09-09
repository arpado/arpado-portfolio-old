<template>
  <div id="main-container" ref="mainContainer">
    <div class="galaxy-container">
      <img
        src="/assets/images/pngegg.png"
        class="galaxy"
        :style="{ marginLeft: `${50 - Math.floor(this.getScrollPercent)}%` }"
      />
    </div>

    <NavbarHorizontalMenu v-if="this.windowWidth > 650" />
    <NavbarVerticalMenu v-if="this.windowWidth <= 650" />
    <TerminalElement 
      :scrollPos="scrollPos"
      :windowHeight="windowHeight"
      :scrollPerc="getScrollPercent"
    />
    <HeroSection />
    <ProjectsProjectSection :windowWidth="windowWidth">
      <slot />
    </ProjectsProjectSection>
    <ContactsSection />
    <FooterElement />
    <ModalsModalView />
    <ModalsMessageModal />
    <!-- <modal-view /> -->
  </div>
</template>

<script>
import gsap from "gsap";
// const showModal = useState('showModal', false)
// const logConsole = useState('logConsole', () => console.log('poop'))
import { useMainStore } from './stores/MainStore.js'

export default {
  data() {
    return {
      windowWidth: null,
      scrollPos: null,
      windowHeight: null,
      pageHeight: null,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.pageHeight = this.$refs.mainContainer.clientHeight;
    visualViewport.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.pageHeight = this.$refs.mainContainer.clientHeight;
      // console.log(this.viewportWidth);
      // console.log(document.querySelector('#__nuxt').scrollTop)
    });
    window.addEventListener("scroll", this.onScroll);
    // let elem = document.querySelector('.main-container')
    // console.log(this.$refs.mainContainer.clientHeight)
    useMainStore()
  },
  computed: {
    getScrollPercent() {
      return (this.scrollPos / (this.pageHeight - this.windowHeight)) * 100;
    },
  },
  methods: {
    onScroll(e) {
      this.scrollPos =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
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
.galaxy-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("assets/images/stars-bg.jpg");
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
.submit-btn::after {
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
  --lightGreen:  #00ff41;
  --middleGreen: #008f11;
  --darkGreen: #003b00;
}
a {
  color: white;
  /* text-shadow: 0 0 10px white; */
  -webkit-transition: text-shadow 0.5s ease-out;
  -moz-transition: text-shadow 0.5s ease-out;
  -o-transition: text-shadow 0.5s ease-out;
  transition: text-shadow 0.5s ease-out;
}
a:hover {
  /* color: var(--darkGreen); */
  text-shadow: 0 0 30px white;
}
a:visited {
  color: white;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
/* ::-webkit-scrollbar-button {
  display: none;
} */
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
