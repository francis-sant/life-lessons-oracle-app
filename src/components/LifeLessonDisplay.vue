<template>
  <div>
    <div class="lesson" v-if="!started">
      <ul>
        <li>{{ lesson.id }}</li>
        <li>{{ lesson.category }}</li>
      </ul>

      <p>Your Lesson: {{ lesson.message }}</p>
      <p data-testid="affirmation">
        Affirmation of the day: {{ lesson.affirmation }}
      </p>
      <h2>{{ lesson.title }}</h2>
    </div>
    <div class="currentlesson" v-else-if="currentLesson">
      <ul>
        <li>{{ currentLesson.id }}</li>
        <li>{{ currentLesson.category }}</li>
      </ul>
      <p>Your Lesson: {{ currentLesson.message }}</p>
      <p>Affirmation of the day: {{ currentLesson.affirmation }}</p>
      <h2>{{ currentLesson.title }}</h2>
    </div>
    <!-- <div class="lessonlikes">Likes: {{ lesson.likes }}</div>
    <div>
      <button data-testid="likeMe" @click="likeMe">Like Me</button>
    </div> -->
  </div>

  <LessonsComments @new-comment="addNewComment" />

  <div class="thecomments">
    <h3>What is your realization with this lesson?</h3>
    <div v-if="hasComments(message)">
      <div v-for="(comment, index) in message.comments" :key="index">
        <h4>Title: {{ comment.title }}</h4>
        <h4>My Realization: {{ comment.message }}</h4>
      </div>
    </div>
    <div v-else>
      <p>No comments available for this lesson.</p>
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
    newComment: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      comments: [],
      message: this.currentLesson,
      newMessage: {
        id: " ",
        title: " ",
        message: " ",
      },
    };
  },

  components: {
    LessonsComments,
  },

  methods: {
    likeMe() {
      this.$emit("like-from-parent");
    },
    addNewComment(newComment) {
      const updatedLesson = { ...this.currentLesson };
      updatedLesson.comments.push(newComment);
      this.$emit("update-lesson", updatedLesson);
      console.log(updatedLesson);
      // console.log(this.comments);
      console.log(newComment);
    },

    hasComments(message) {
      return message && message.comments && message.comments.length > 0;
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
