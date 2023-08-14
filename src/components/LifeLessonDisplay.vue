<template>
  <div>
    <div class="lesson" v-if="!started">
      <ul>
        <li class="roman">{{ lesson.id }}</li>
      </ul>
      <h3>{{ lesson.category }}</h3>
      <p>Your Lesson: {{ lesson.message }}</p>
      <p data-testid="affirmation">
        Affirmation of the day: {{ lesson.affirmation }}
      </p>
      <h2>{{ lesson.title }}</h2>
    </div>
    <div class="currentlesson" v-else-if="currentLesson">
      <ul>
        <li class="roman">{{ currentLesson.id }}</li>
      </ul>
      <h3>{{ currentLesson.category }}</h3>
      <p>Your Lesson: {{ currentLesson.message }}</p>
      <p>Affirmation of the day: {{ currentLesson.affirmation }}</p>
      <h2>{{ currentLesson.title }}</h2>
    </div>
    <!-- <div class="lessonlikes">Likes: {{ lesson.likes }}</div>
    <div>
      <button data-testid="likeMe" @click="likeMe">Like Me</button>
    </div> -->
  </div>

  <LessonsComments
    :started="started"
    :currentLesson="currentLesson"
    @new-comment="addNewComment"
  />

  <div class="thecomments" :class="{ started, currentLesson }">
    <h3>What is your realization with this lesson?</h3>
    <!-- <div v-if="hasComments(message)"> -->
    <div v-for="comment in message.comments" :key="comment">
      <h4>Title: {{ comment.title }}</h4>
      <h4>My Realization: {{ comment.message }}</h4>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <p>No comments available for this lesson.</p>
    </div> -->
  </div>
</template>

<script>
import LessonsComments from "./LessonsComments.vue";

export default {
  name: "LifeLessonDisplay",
  emits: ["update-lesson"],
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
      message: this.currentLesson,
    };
  },

  components: {
    LessonsComments,
  },

  methods: {
    // likeMe() {
    //   this.$emit("like-from-parent");
    // },
    addNewComment(newComment) {
      const updatedLesson = { ...this.currentLesson };
      updatedLesson.comments.push(newComment);
      this.$emit("update-lesson", updatedLesson);
      console.log(updatedLesson);
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
.lesson {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  width: 280px; /* Adjust this value to your preference */
  height: auto;
  min-height: 500px; /* Adjust this value to your preference */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: white;

  ol {
    padding: 0;
    margin-bottom: 10px;
    list-style: none;

    li.roman {
      list-style-type: upper-roman;
    }
  }

  p {
    margin: 10px 0;
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 0;
  }
}
.thecomments {
  display: none;
}
.started {
  display: block;
}
</style>
