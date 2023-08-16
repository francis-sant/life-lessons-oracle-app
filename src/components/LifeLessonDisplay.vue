<template>
  <h2>Life has something to tell you, ask for your Inspiration:</h2>
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
        <button v-if="!liked" data-testid="likeMe" @click="likeMe">
          Like Me
        </button>
        <button v-else data-testid="likeMe" :class="{ liked }" @click="likeMe">
          UnLike Me
        </button>
      </div>
    </div>
  </div>

  <LessonsComments
    :started="started"
    :currentLesson="currentLesson"
    @new-comment="newComment"
    @delete-comment="deleteComment"
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
      likes: 0,
      liked: false,
    };
  },

  components: {
    LessonsComments,
  },

  methods: {
    newComment(newComment) {
      const updatedLesson = { ...this.currentLesson };
      updatedLesson.comments.push(newComment);
      console.log(updatedLesson);
      console.log(newComment);
    },

    deleteComment(commentId) {
      const updatedLesson = { ...this.currentLesson };

      if (updatedLesson.comments) {
        const commentIndex = updatedLesson.comments.findIndex(
          (comment) => comment.id === commentId
        );

        if (commentIndex !== -1) {
          updatedLesson.comments.splice(commentIndex, 1);
        }
      }
    },
    likeMe() {
      const updatedLesson = { ...this.currentLesson };
      if (updatedLesson.likes === 0) {
        updatedLesson.likes = updatedLesson.likes + 1;
        this.liked = true;
      } else {
        updatedLesson.likes = updatedLesson.likes - 1;
        this.liked = false;
      }
      this.$emit("update-likes", updatedLesson.likes);
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
