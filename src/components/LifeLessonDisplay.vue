<template>
  <div class="lesson">
    <h2>{{ lesson.name }}</h2>
    <h3>{{ lesson.category }}</h3>
    <p>{{ lesson.message }}</p>
    <p>{{ lesson.affirmation }}</p>

    <div v-if="started == true">
      <button @click="inspireMe">Inspire Me</button>
    </div>
    <div v-else-if="reset == true">
      <button @click="ResetMe">Ask Again</button>
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
      reset: true,
    };
  },

  methods: {
    inspireMe() {
      this.$emit("count-to-parent");
      this.count++;
      this.classFull = true;
    },
    ResetMe() {
      this.$emit("reset-from-parent");
      this.count--;
      this.classFull = false;
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
