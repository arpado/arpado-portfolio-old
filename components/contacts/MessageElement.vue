<template>
  <div
    class="message-container"
    data-augmented-ui="
  tl-clip tr-2-clip-y br-clip l-clip-y both
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
        await document.forms[0].submit();
        this.mainStore.openMessageModal("Your message has been sent!");
        document.querySelectorAll(".message-input").value = "";
      } catch (error) {
        this.mainStore.openMessageModal(`Something went wrong Dave: ${error}`);
      }
    },
  },
};
</script>

<style scoped>
/* Suggestion Box BG, yet to solve it */
/* input:-webkit-autofill {
    background-color: white !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
} */
/* .message-input:-webkit-autofill,
.message-input:-webkit-autofill:hover, 
.message-input:-webkit-autofill:focus, 
.message-input:-webkit-autofill:active,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px green inset !important;
    -webkit-box-shadow: 0 0 0 30px green inset !important;
    background-color: blue !important;
} */
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0 1000px #1b1b1b inset !important;
  -webkit-box-shadow: 0 0 0 1000px #1b1b1b inset !important;
  -webkit-text-fill-color: white !important;
}

.message-container {
  min-height: 80vh;
  width: 80vw;
  display: grid;
  grid-template-rows: 1fr 11fr;
  padding: 2rem 3rem;
  --aug-inlay-bg: var(--darkGreen);
  --aug-inlay-opacity: 0.7;
  --aug-tr-extend2: 30%;
  --aug-l-extend1: 30%;
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
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
}
.submit-btn:hover {
  cursor: pointer;
}
</style>