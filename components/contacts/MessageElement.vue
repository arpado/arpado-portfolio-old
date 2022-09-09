<template>
  <div
    class="message-container"
    data-augmented-ui="
  tl-clip tr-2-clip-y br-clip b-clip-y l-clip-y both
"
  >
    <h3 class="title">Do you have questons?</h3>
    <form
      class="email-form"
      :class="{ 'static-effect': mainStore.staticEffectActive }"
      action="https://formsubmit.co/2504b17c1cdcf59e3fd818d8e727da33"
      method="POST"
      name="”EmailForm”"
    >
      <label for="name">
        <p>Name</p>
        <input class="message-input" type="text" name="name" required />
      </label>
      <label for="email">
        <p>Email</p>
        <input class="message-input" type="email" name="email" required />
      </label>
      <label for="subject">
        <p>Subject</p>
        <input class="message-input" type="text" name="_subject" />
      </label>
      <label for="message">
        <p>Message</p>
        <textarea
          class="message-input"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <!-- <input
        type="hidden"
        name="_next"
        value="https://arpado.github.io/thanks.html"
      /> -->
      <div
        type="submit"
        class="submit-btn"
        data-augmented-ui="
  tl-clip tr-clip br-clip bl-clip both
"
        @click="submitForm"
      >
        Send Message
      </div>
    </form>
  </div>
</template>

<script>
import { useMainStore } from "../../stores/MainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  methods: {
    async submitForm() {
      try {
      await document.forms[0].submit()
        .then(
          this.mainStore.openMessageModal('Your message has been sent!')
        )
        
      } catch (error) {
          this.mainStore.openMessageModal(`Something went wrong: ${error}`)
      }
    },
  },
};
</script>

<style scoped>
.message-container {
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
.email-form {
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
label {
  font-weight: 900;
}
input {
  height: 2rem;
}
input,
textarea {
  font-family: "Orbitron";
  font-weight: 900;
  letter-spacing: 1px;
}
.message-input {
  width: 100%;
  margin: 10px auto;
}
.submit-btn {
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 900;
  margin: 10px auto;
  text-align: center;
}
.submit-btn:hover {
  cursor: pointer;
}
</style>