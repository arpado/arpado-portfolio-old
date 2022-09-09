<template>
  <div class="container">
      <!-- appear -->
    <transition-group
      @enter="enter"
      @afterEnter="afterEnter"
      @leave="onLeave"
    >
      <NavbarNavButtonVertical
        v-show="menuVisible"
        v-for="(button, index) in buttons"
        :key="button.name"
        :button="button"
        :index="index"
        :data-index="index"
      />
    </transition-group>
    <div
      class="btn-toggle-menu nav-btn"
      data-augmented-ui="
  tl-clip tr-clip br-clip-x bl-clip-x both"
      @click="toggleMenu"
    >
      <span class="wrap">
      <div
        data-augmented-ui="all-triangle-down border"
        :class="{ 'arrow-rotated': arrowRotated }"
      ></div>
      </span>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      buttons: [
        {
          name: "Hero",
          href: "#hero",
        },
        {
          name: "Projects",
          href: "#projects",
        },
        {
          name: "Contacts",
          href: "#contacts",
        },
      ],
      menuVisible: false,
      arrowRotated: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.arrowRotated = !this.arrowRotated;
    },
    enter(el) {
      el.style.transform = `translateY(-${el.dataset.index * 100 + 160}px)`;
      // let after = window.getComputedStyle(el,':after');
      // let content = after['']
      // nem lehet az aftert modositani
    },
    afterEnter(el, done) {
      gsap.to(el, {
        transform: `translateY(0px)`,
        delay: el.dataset.index * 0.5,
        onComplete: () => {el.style.transform = ''}
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        transform: `translateY(-${el.dataset.index * 100 + 160}px)`,
        delay: (this.buttons.length - el.dataset.index) * 0.5 - 0.5,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.container {
  height: fit-content;
  width: fit-content;
  top: 10px;
  right: 20px;
  position: fixed;
  z-index: 995;
  font-size: 1.5rem;
  font-weight: 900;
}
.btn-toggle-menu {
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  top: 0;
  right: 0;
  --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%;
}
.btn-toggle-menu> .wrap > :only-child {
  transition: all 1s cubic-bezier(0.54, 0.54, 0.54, 0.54);
}
.arrow-rotated {
  transform: rotateX(180deg);
}
.nav-btn {
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
  filter: drop-shadow(0 0 10px white);
}
.wrap {
  filter: drop-shadow(0 0 10px white);
}
</style>