<template>
  <transition name="modalanimation" :duration="300">
    <div
      class="modal-container"
      v-if="mainStore.showModal"
      @click="mainStore.closeOnOutsideClick"
    >
      <NuxtLayout
        name="console-one"
        class="main-console"
        :class="{ 'static-effect': mainStore.staticEffectActive }"
      >
        <div class="modal-content-box">
          <div class="project-title">
            <p>Project title:</p>
            <h3>{{ mainStore.modalContent.name }}</h3>
          </div>
          <div class="project-image">
            <img
              :src="getPic"
              :alt="`Preview of ${mainStore.modalContent.name}`"
              v-if="mainStore.modalContent.image"
            />
            <div class="img-container-2" v-else>
              <NuxtLayout name="no-data">
                <h2>No Data Available</h2>
              </NuxtLayout>
            </div>
          </div>
          <!-- <div class="project-image"> -->
          <!-- <div
    class="project-image"
    data-augmented-ui="all-hex border"
    @click="mainStore.openModal(content)"
    v-else
  > -->

          <!-- </div> -->
          <div class="project-description">
            <p>Project description:</p>
            <p>{{ mainStore.modalContent.description }}</p>
          </div>
          <div class="project-size">
            <p>Project size:</p>
            <p>{{ mainStore.modalContent.size }}</p>
          </div>
          <div class="project-created">
            <p>Project created:</p>
            <p>{{ mainStore.modalContent.date }}</p>
          </div>
          <div class="project-modified">
            <p>Project modified:</p>
            <p>{{ mainStore.modalContent.date }}</p>
          </div>
          <div class="project-language">
            <p>Languages/ frameworks:</p>
            <p>{{ mainStore.modalContent.language }}</p>
          </div>
          <div
            class="project-link"
            data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both
"
            @click="openLink(mainStore.modalContent.link)"
          >
            Open link in new window
          </div>
          <div
            class="modal-close"
            data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both
"
            @click="mainStore.closeModal"
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
  methods: {
    // closeModalOnEscape(e) {
    //   if (e.keyCode == 27) {
    //     this.mainStore.closeModal();
    //   }
    // },
    openLink(link) {
      if (link !== "") {
        window.open(link, "_blank");
      } else {
        this.mainStore.openMessageModal(
          "I'm sorry Dave, I'm afraid I can't do that."
        );
      }
    },
  },
  computed: {
    getPic() {
      return "/assets/images/" + this.mainStore.modalContent.image
    }
  },
  mounted() {
    document.addEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
};
</script>

<style>
.img-container-2 {
  width: 100%;
  z-index: 0;
  /* border: 30px solid black; */
  /* background-color: var(--darkGreen); */
}
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  /* color: white; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  font-size: 0.75rem;
}
.main-console {
  width: 95%;
  height: 95%;
  transition: all 0.3s linear;
  transition-delay: 0.3s;
}
.modal-content-box {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.project-title {
  grid-row: 1/2;
  grid-column: 1/11;
}
.project-image {
  grid-row: 2/7;
  grid-column: 1/13;
  height: 100%;
  width: 100%;
  max-width: fit-content;
  overflow-y: hidden;
  overflow-x: auto;
  justify-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.project-image > :only-child {
  height: 100%;
}
.project-description {
  grid-row: 7/10;
  grid-column: 1/13;
  overflow-y: auto;
}
.project-size {
  grid-row: 10/11;
  grid-column: 1/5;
}
.project-created {
  grid-row: 10/11;
  grid-column: 5/9;
}
.project-modified {
  grid-row: 10/11;
  grid-column: 9/13;
}
.project-language {
  grid-row: 11/12;
  grid-column: 1/5;
}
.project-link {
  width: 200px;
  height: 50px;
  padding: 0 0.5rem;
  grid-row: 12/13;
  grid-column: 1/13;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  text-align: center;
}
.project-link:hover {
  cursor: pointer;
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
  grid-column: 10/13;
  font-family: monospace;
}
.modal-close:hover {
  cursor: pointer;
}
.modal-close > p {
  transform: rotateZ(45deg);
}
/*.modalanimation-enter-active .modal-container,
.modalanimation-leave-active .modal-container {
    transition: all 0.3s linear;

}
.modalanimation-enter-from .modal-container,
.modalanimation-leave-to .modal-container {
  opacity: 0;
}
.modalanimation-enter-from .main-console,
.modalanimation-leave-to .main-console {
  transform: scaleX(0px);
} */
.modalanimation-enter-active,
.modalanimation-leave-active {
  transition: all 0.3s linear;
}
.modalanimation-enter-from,
.modalanimation-leave-to {
  opacity: 0;
}
@media (min-width: 600px) {
  .modal-container {
    font-size: 1rem;
  }
  .main-console {
    width: 80%;
    height: 80%;
  }
  .project-image {
    grid-row: 2/10;
    grid-column: 1/11;
  }
  .project-description {
    grid-row: 10/13;
    grid-column: 1/11;
  }
  .project-size {
    grid-row: 2/4;
    grid-column: 11/13;
  }
  .project-created {
    grid-row: 4/6;
    grid-column: 11/13;
  }
  .project-modified {
    grid-row: 6/8;
    grid-column: 11/13;
  }
  .project-language {
    grid-row: 8/10;
    grid-column: 11/13;
  }
  .project-link {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    grid-row: 10/13;
    grid-column: 11/13;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }
}
</style>