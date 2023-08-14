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

      <div class="lessonlikes">Likes: {{ currentLesson.likes }}</div>
      <div>
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
