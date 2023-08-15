<template>
  <div class="container">
    <div class="lesson" v-if="!started">
      <h2>{{ lesson.title }}</h2>
      <h3>Your Lesson:</h3>
      <p>{{ lesson.message }}</p>
      <h3>Affirmation of the day:</h3>
      <p data-testid="affirmation">
        {{ lesson.affirmation }}
      </p>
      <ul>
        <li class="roman">{{ lesson.id }}</li>
        <hr />
        <li>
          <h3>{{ lesson.category }}</h3>
        </li>
      </ul>
    </div>

    <div class="currentlesson" v-else-if="currentLesson">
      <h2>{{ currentLesson.title }}</h2>
      <h3>Your Lesson:</h3>
      <p>{{ currentLesson.message }}</p>
      <h3>Affirmation of the day:</h3>
      <p>{{ currentLesson.affirmation }}</p>
      <ul>
        <li class="roman">{{ currentLesson.id }}</li>
        <hr />
        <li>
          <h3>{{ currentLesson.category }}</h3>
        </li>
      </ul>
      <div class="lessonlikes">Likes: {{ currentLesson.likes }}</div>
      <div id="likebtn">
        <button data-testid="likeMe" @click="likeMe">Like Me</button>
      </div>
    </div>
  </div>

  <LessonsComments
    :started="started"
    :currentLesson="currentLesson"
    @new-comment="newComment"
  />
</template>

<script>
import LessonsComments from "./LessonsComments.vue";

export default {
  name: "LifeLessonDisplay",
  emits: ["update-likes"],
  props: {
    lesson: {
      type: Object,
      required: true,
    },
    currentLesson: {
      type: Object,
      required: true,
    },
    started: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      comments: [],
      likes: 0,
    };
  },

  components: {
    LessonsComments,
  },

  methods: {
    newComment(newComment) {
      const updatedLesson = { ...this.currentLesson };
      updatedLesson.comments.push(newComment);
      this.$emit("update-lesson");
      console.log(updatedLesson);
      console.log(newComment);
    },
    likeMe() {
      const updatedLesson = { ...this.currentLesson };
      updatedLesson.likes = updatedLesson.likes + 1; // Increment the likes count
      this.$emit("update-likes", updatedLesson.likes); // Emit the updated likes count
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.thecomments {
  display: none;
}
.started {
  display: block;
}
</style>
