<template>
  <h1>Life Lesson Oracle</h1>

  <h2>Select your category:</h2>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <LifeLessonDisplay
    v-for="lesson in lessons"
    :lesson="lesson"
    :key="lesson.id"
  />
</template>

<script>
import LifeLessonDisplay from "./components/LifeLessonDisplay.vue";

export default {
  name: "App",
  data() {
    return {
      // categorySelected: [list],
      categoryList: [],
      lessons: [
        {
          id: 1,
          name: "You're a soul, not a body.",
          category: "Self-Improvement",
          message: "You are a work in progress.",
          affirmation: "I am amazing!",
        },
        {
          id: 2,
          name: "You're a second soul, not a body.",
          category: "Self-Love",
          message: "You are a work in progress.",
          affirmation: "I am amazing!",
        },
        {
          id: 3,
          name: "You're a third soul, not a body.",
          category: "Self-Knowledge",
          message: "You are a work in progress.",
          affirmation: "I am amazing!",
        },
        {
          id: 4,
          name: "You're a fourth soul, not a body.",
          category: "Self-Confidence",
          message: "You are a work in progress.",
          affirmation: "I am amazing!",
        },
      ],
    };
  },
  components: {
    LifeLessonDisplay,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
