<template>
  <div class="container-big">
    <transition-group appear @enter="enter" @afterEnter="afterEnter">
      <ProjectsProjectElement
        v-for="(hex, index) in hexes"
        :key="hex.id"
        :class="`hex-${hex.id}`"
        :data-id="hex.fadeInOrder"
        :index="index"
        :content="content[index]"
        @open-modal="$emit('openModal')"
      />
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: ["content"],
  emits: ["openModal"],
  data() {
    return {
      hexes: [
        {
          id: 1,
          fadeInOrder: 3,
        },
        {
          id: 2,
          fadeInOrder: 7,
        },
        {
          id: 3,
          fadeInOrder: 2,
        },
        {
          id: 4,
          fadeInOrder: 6,
        },
        {
          id: 5,
          fadeInOrder: 1,
        },
        {
          id: 6,
          fadeInOrder: 5,
        },
        {
          id: 7,
          fadeInOrder: 4,
        },
      ],
    };
  },
  methods: {
    enter(el) {
      el.style.opacity = 0;
    },
    afterEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        onComplete: done,
        delay: el.dataset.id * 0.2,
      });
    },
  },
};
</script>

<style scoped>
.container-big {
  width: 100%;
  aspect-ratio: 1/1.5;
  border: 1px solid black;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
}
.hex-1 {
  grid-row: 4/5;
  grid-column: 4/6;
}
.hex-2 {
  grid-row: 1/2;
  grid-column: 3/5;
}
.hex-3 {
  grid-row: 2/3;
  grid-column: 2/4;
}
.hex-4 {
  grid-row: 2/3;
  grid-column: 4/6;
}
.hex-5 {
  grid-row: 3/4;
  grid-column: 1/3;
}
.hex-6 {
  grid-row: 3/4;
  grid-column: 3/5;
}
.hex-7 {
  grid-row: 4/5;
  grid-column: 2/4;
}
@media (min-width: 500px) {
  .container-big {
    width: unset;
    height: 100%;
  }
}
@media (min-width: 850px) {
  .container-big {
    height: 100%;
    width: 100vh;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
  }
  .hex-1 {
    grid-row: 1/2;
    grid-column: 2/4;
  }
  .hex-2 {
    grid-row: 1/2;
    grid-column: 4/6;
  }
  .hex-3 {
    grid-row: 2/3;
    grid-column: 1/3;
  }
  .hex-4 {
    grid-row: 2/3;
    grid-column: 3/5;
  }
  .hex-5 {
    grid-row: 2/3;
    grid-column: 5/7;
  }
  .hex-6 {
    grid-row: 3/4;
    grid-column: 2/4;
  }
  .hex-7 {
    grid-row: 3/4;
    grid-column: 4/6;
  }
}
</style>