<template>
  <div
    class="about-container"
    :class="{ 'static-effect': mainStore.staticEffectActive }"
    data-augmented-ui="
  tl-2-clip-y tr-clip r-clip-y b-clip-y bl-clip both
"
  >
    <h3 class="title">About Me:</h3>
    <div class="text">
      <h4>Who am I?</h4>
      <p>
        I am on of the many self-thought programmers, who took the chance to
        learn the ropes of coding during the Great Pandemics.
      </p>
      <hr />
      <h4>How and Why?</h4>
      <p>
        I'm proficient with the Vue ecosystem (Vue3, Nuxt3, Pinia, Router), but
        as web development relies heavily on plain old JavaScript, I have
        aquired a deep understanding of HTML-CSS-Javascript too.
      </p>
      <hr />
      <h4>What can I do for you?</h4>
      <p>
        In other words I can deliver you anything small, one page websites to
        complex web applications.
      </p>
      <hr />
      <p>
        You can find my resume
        <a href="assets/pdf/Vue-3-Cheat-Sheet.pdf" target="_blank">HERE</a>.
      </p>
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
};
</script>

<style scoped>
.about-container {
  min-height: 80vh;
  height: fit-content;
  width: 80vw;
  display: grid;
  grid-template-rows: 1fr 11fr;
  padding: 2rem 3rem;
  --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  overflow: hidden;
}
.title {
  grid-row: 1/2;
  justify-self: center;
}
.text {
  grid-row: 2/3;
}
h4 {
  margin-bottom: 5px;
}
hr {
  width: 50%;
  margin: 20px auto;
}
</style>