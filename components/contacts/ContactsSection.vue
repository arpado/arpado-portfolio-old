<template>
  <section class="contacts" id="contacts">
    <ContactsAboutElement />
    <ContactsMessageElement />
  </section>
</template>

<script>
export default {};
</script>

<style>
.contacts {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 15vh 5rem 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.section-title {
  margin: 2rem auto;
}
.contacts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}
@media (min-width: 1000px) {
  .contacts {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .contacts > * {
    width: 45%;
    max-width: 600px;
  }
}
</style>