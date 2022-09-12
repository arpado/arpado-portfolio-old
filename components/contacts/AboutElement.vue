<template>
  <div
    class="about-container"
    ref="aboutContainer"
    :class="{ 'static-effect': mainStore.staticEffectActive }"
    data-augmented-ui="
  tl-2-clip-y tr-clip r-clip-y bl-clip both
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
      <h4>What do I do?</h4>
      <p>
        I'm proficient with the Vue ecosystem (Vue3, Nuxt3, Pinia and Router), but
        as web development relies heavily on plain old JavaScript, I have
        aquired a deep understanding of HTML-CSS-JavaScript too, plus a little
        bit of MySQL and I'm also familiar with Git, npm, bash and test-driven-development.
      </p>
      <hr />
      <h4>How may I help you?</h4>
      <p>
        <!-- In other words  -->
        I can deliver anything ranging from a small, one page
        website to a complex web application, and make your site fully responsive
        and indexed high on the list of search engines with SEO. When you are
        satisfied I can even host and maintain your website for you.
      </p>
      <hr />
      <p>
        You can find my resume
        <a href="/pdf/arpad-ozsvar-cv.pdf" target="_blank">HERE</a>.
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
  width: 80vw; 
  display: grid;
  grid-template-rows: 1fr 11fr;
  padding: 2rem 3rem;
  --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  --aug-tl-extend1: 30%;
  --aug-r-extend1: 30%;
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