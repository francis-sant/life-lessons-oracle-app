<template>
  <div class="lesson">
    <h2>{{ lesson.title }}</h2>
    <h3>{{ lesson.category }}</h3>
    <p>Your Lesson: {{ lesson.message }}</p>
    <p>Affirmation of the day: {{ lesson.affirmation }}</p>

    <div>
      <button @click="likeMe">Like Me</button>
    </div>
    <div v-if="!started">
      <button @click="inspireMe">Inspire Me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifeLessonDisplay",
  props: {
    lesson: {
      type: Object,
      default() {
        return {
          id: 1,
          name: "You're a soul, not a body.",
          category: "Self-Improvement",
          message: "You are a work in progress.",
          affirmation: "I am amazing!",
        };
      },
    },
  },

  data() {
    return {
      started: false,
      likes: 0,
    };
  },

  methods: {
    inspireMe() {
      this.$emit("inspire-from-parent");
    },

    likeMe() {
      this.$emit("like-from-parent");
      this.likes++;
      //   this.classFull = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
