<template>
  <section class="section-1" id="hero">
    <NuxtLayout
      name="console-one"
      class="hero-outer"
      :class="{ 'static-effect': mainStore.staticEffectActive }"
    >
      <div class="text-container">
        <h1>Hello, my name is Arpad</h1>
        <div class="intro-text">
          <p>
            I am an aspiring&nbsp;<span id="wordOnPrint">{{ wordOnPrint }}</span
            ><span class="blinky"></span>
          </p>
        </div>
      </div>
      <div class="competences-container">
        <NuxtLayout name="textbox-one">HTML</NuxtLayout>
        <NuxtLayout name="textbox-one">CSS</NuxtLayout>
        <NuxtLayout name="textbox-one">JavaScript</NuxtLayout>
        <NuxtLayout name="textbox-one">Vue3</NuxtLayout>
        <NuxtLayout name="textbox-one">Nuxt3</NuxtLayout>
      </div>
    </NuxtLayout>
  </section>
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
      wordsToType: [
        "programmer",
        "coder",
        "web developer",
        "software engineer",
        "web designer",
      ],
      speed: 125,
      counter: 0,
      wordIterator: 0,
      word: "",
      wordOnPrint: "",
      wordToStay: 1000,
    };
  },
  methods: {
    write() {
      if (this.counter < this.word.length + 1) {
        this.wordOnPrint = this.word.substring(0, this.counter);
        this.counter++;
        setTimeout(this.write, this.speed);
      }
    },
    erease() {
      if (this.wordOnPrint.length > 0) {
        this.wordOnPrint = this.wordOnPrint.substring(
          0,
          this.wordOnPrint.length - 1
        );
        setTimeout(this.erease, this.speed);
      }
    },
    awaitTimeout(delay) {
      return new Promise((resolve) => setTimeout(resolve, delay));
    },
    typewriter() {
      this.wordIterator =
        (this.wordsToType.length + this.wordIterator) % this.wordsToType.length;
      this.word = this.wordsToType[this.wordIterator];
      this.wordIterator++;
      this.counter = 0;
      this.write(this.word);
      this.awaitTimeout(
        this.word.length * this.speed + 4 * this.speed + this.wordToStay
      ).then(() => this.erease());
      this.awaitTimeout(
        this.word.length * 2 * this.speed + 4 * this.speed + this.wordToStay
      ).then(() => this.typewriter());
    },
  },
  created() {
    this.typewriter();
  },
  mounted() {
    this.mainStore.setRandomStaticEffect();
  },
};
</script>

<style scoped>
.section-1 {
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hero-outer {
  margin: 0 auto 10vh;
  height: fit-content;
  min-height: 40vh;
  width: 90vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}
.text-container {
  grid-row: 1/2;
}
.intro-text {
  display: flex;
  flex-wrap: wrap;
  min-width: 200px;
  min-height: 100px;
}
.competences-container {
  grid-row: 2/3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
/*#wordOnPrint::after*/
.blinky {
  content: "";
  height: 1em;
  width: 0.5em;
  background-color: white;
  box-shadow: 0px 0px 3px 1px white;
  display: inline-block;
  margin-left: 2px;
  animation: cursor-blink 0.75s steps(2) infinite;
}
@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}
@media screen and (min-width: 350px) {
  .intro-text {
    min-width: 200px;
    min-height: 100px;
  }
  .hero-outer {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 600px) {
  .intro-text {
    min-width: 200px;
    min-height: 100px;
  }
  .hero-outer {
    font-size: 2rem;
  }
}
@media (min-width: 1000px) {
  .hero-outer {
    margin: 0 5vw 10vh 5vw;
    max-width: 1000px;
  }
}
</style>