<template>
  <div
    class="project-element"
    data-augmented-ui="all-hex border"
    @click="mainStore.openModal(content)"
    v-if="content.name !== 'No Title'"
  >
    <div class="img-container">
      <img :src="require(`~/public/images/${content.thumbnail}`)" alt="" />
    </div>

    <div>
      <h2>{{ content.name }}</h2>
    </div>
  </div>
  <div
    class="project-element"
    data-augmented-ui="all-hex border"
    @click="mainStore.openModal(content)"
    v-else
  >
    <div class="img-container-2">
      <NuxtLayout name="no-data">
        <h2>No Data Available</h2>
      </NuxtLayout>
    </div>
  </div>
</template>

<script>
// projectImage(content.image)
// require(`~/public/images/${content.thumbnail}`)
import { useMainStore } from "@/stores/MainStore.js";
export default {
  props: ["content"],
  emits: ["openModal"],
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
};
</script>

<style scoped>
.project-element {
  --aug-all-height: 100%;
  --aug-all-width: unset;
  background-color: black;
  margin: auto;
  --aug-border-all: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* padding: 0.5rem; */
  font-size: 0.7rem;
}
.project-element:hover {
  cursor: pointer;
}
.img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.img-container::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.img-container-2 {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
}
@media (min-width: 850px) {
  .project-element {
    --aug-all-width: unset;
    --aug-all-height: 30vh;
    font-size: inherit;
  }
}
</style>