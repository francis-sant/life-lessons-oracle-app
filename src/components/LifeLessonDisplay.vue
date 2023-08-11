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
    <div class="currentlesson" v-else-if="currentLesson || selectedCategory">
      <h2>
        {{ currentLesson ? currentLesson.title : selectedCategory.title }}
      </h2>
      <h3>
        {{ currentLesson ? currentLesson.category : selectedCategory.category }}
      </h3>
      <p>
        Your Lesson:
        {{ currentLesson ? currentLesson.message : selectedCategory.message }}
      </p>
      <p>
        Affirmation of the day:
        {{
          currentLesson
            ? currentLesson.affirmation
            : selectedCategory.affirmation
        }}
      </p>
    </div>
    <div>{{ likes }}</div>
    <div>
      <button data-testid="likeMe" @click="likeMe">Like Me</button>
    </div>
    <div>
      <button data-testid="inspireMe" @click="inspireMe">Inspire Me</button>
    </div>
  </div>

  <LessonsComments @new-comment="addNewComment" />

  <div class="thecomments">
    <h3>What is your realization with this lesson?</h3>
    <div v-for="(comment, index) in comments" :key="index">
      <h4>Title: {{ comment.title }}</h4>
      <h4>My Realization: {{ comment.message }}</h4>
    </div>
  </div>
</template>

<script>
import LessonsComments from "./LessonsComments.vue";

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
    newComment: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      started: false,
      likes: 0,
      comments: [],
    };
  },

  components: {
    LessonsComments,
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
    addNewComment(newComment) {
      this.comments.push(newComment);
      console.log(this.comments[this.comments.length - 1]);

      // for (const [key, value] of Object.entries(newComment)) {
      //   console.log(`${key}: ${value}`);
      // }
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
