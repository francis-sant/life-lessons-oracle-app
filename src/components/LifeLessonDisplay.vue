<template>
  <div>
    <div class="lesson" v-if="!started">
      <h2>{{ lesson.title }}</h2>
      <h3>{{ lesson.category }}</h3>
      <p>Your Lesson: {{ lesson.message }}</p>
      <p data-testid="affirmation">
        Affirmation of the day: {{ lesson.affirmation }}
      </p>
    </div>
    <div class="currentlesson" v-else>
      <h2>{{ currentLesson.title }}</h2>
      <h3>{{ currentLesson.category }}</h3>
      <p>Your Lesson: {{ currentLesson.message }}</p>
      <p>Affirmation of the day: {{ currentLesson.affirmation }}</p>
    </div>

    <div>
      <button data-testid="likeMe" @click="likeMe">Like Me</button>
    </div>
    <div>
      <button data-testid="inspireMe" @click="inspireMe">Inspire Me</button>
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
          title: "Self-Inquiry",
          category: "Ramana Maharshi",
          message:
            "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
          affirmation:
            "I am not my thoughts; I am the silent observer of my mind.",
        };
      },
    },
    currentLesson: {
      type: Object,
      required: true,
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
      this.started = !this.started;
      if (this.started) {
        this.$emit("inspire-from-parent");
      }
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
