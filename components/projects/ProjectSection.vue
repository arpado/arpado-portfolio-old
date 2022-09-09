<template>
  <section class="projects-container" id="projects">
    <div class="horizontal-project-navigation" v-if="windowWidth <= 1100">
      <ProjectsProjectButtonHorizontal
        v-for="(button, index) in buttons"
        :key="index"
        :button="button"
        :index="index"
        @emitChangeSubPage="changeSubPage"
      />
    </div>
    <div class="vertical-projecct-navigation" v-if="windowWidth > 1100">
      <ProjectsProjectButtonVertical
        v-for="(button, index) in buttons"
        :key="index"
        :button="button"
        :index="index"
        @emitChangeSubPage="changeSubPage"
      />
    </div>
    <div class="container">
      <div class="sub-container" v-if="activeSubPage === 'games'">
        <ProjectsProjectShowcase :content="gamesContent" />
      </div>
      <div class="sub-container" v-if="activeSubPage === 'webpages'">
        <ProjectsProjectShowcase :content="webpagesContent" />
      </div>
      <div class="sub-container" v-if="activeSubPage === 'utilities'">
        <ProjectsProjectShowcase :content="utilitiesContent" />
      </div>
    </div>
  </section>
</template>

<script>
import webpagesContent from "@/content/webpages.json";
import gamesContent from "@/content/games.json";
import utilitiesContent from "@/content/utilities.json";

export default {
  props: ["windowWidth"],
  data() {
    return {
      buttons: [
        {
          name: "Games",
          subPage: "games",
        },
        {
          name: "Webpages",
          subPage: "webpages",
        },
        {
          name: "Utilities",
          subPage: "utilities",
        },
      ],
      activeSubPage: "webpages",
      webpagesContent: webpagesContent,
      gamesContent: gamesContent,
      utilitiesContent: utilitiesContent,
    };
  },
  methods: {
    changeSubPage(page) {
      this.activeSubPage = page;
    },
  },
};
</script>

<style scoped>
.projects-container {
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
}
.horizontal-project-navigation {
  width: 100%;
  height: 10%;
  position: relative;
  overflow-x: clip;
}
.vertical-projecct-navigation {
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.container {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1100px) {
  .projects-container {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .container {
    width: fit-content;
  }
  .sub-container {
    width: fit-content;
  }
}
</style>