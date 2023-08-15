<template>
  <div class="myForm" :class="{ started, currentLesson }">
    <h3>What is your realization with this lesson?</h3>
    <form @submit.prevent="addNewMessage">
      <label for="title">Title</label>
      <input
        v-model="newMessage.title"
        type="text"
        id="title"
        placeholder="My Advice Title"
      />

      <label for="content">Your Realization</label>
      <textarea
        v-model="newMessage.message"
        id="message"
        placeholder="My realization here"
      ></textarea>

      <button type="submit">Add Message</button>
    </form>
  </div>
  <div class="thecomments" :class="{ started, currentLesson }">
    <div class="realizations" v-if="hasComments(currentLesson)">
      <h3>My Realizations:</h3>
      <div
        id="uniquerealization"
        v-for="comment in currentLesson.comments"
        :key="comment"
      >
        <h4>Title:</h4>
        <p data-testid="comenttitle">{{ comment.title }}</p>
        <h4>My Realization:</h4>
        <p data-testid="comentmessage">{{ comment.message }}</p>
        <hr />
      </div>
    </div>
    <div
      class="nocomment"
      :class="{ started, currentLesson }"
      v-else-if="shouldShowNoComment"
    >
      <h3 id="norealization">No Realizations Yet</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonsComments",
  emits: ["new-comment"],
  props: {
    lesson: {
      type: Array,
      default() {
        return [];
      },
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
      newMessage: {
        id: 0,
        title: " ",
        message: " ",
      },
    };
  },
  methods: {
    addNewMessage() {
      if (
        this.newMessage.title.trim() !== "" &&
        this.newMessage.message.trim() !== ""
      ) {
        const newComment = { ...this.newMessage };
        this.newMessage.id = this.newMessage.id + 1;
        this.newMessage.title = "";
        this.newMessage.message = "";
        this.$emit("new-comment", newComment);
      }
    },

    hasComments(currentLesson) {
      return (
        currentLesson &&
        currentLesson.comments &&
        currentLesson.comments.length > 0
      );
    },
  },

  computed: {
    shouldShowNoComment() {
      return !this.hasComments(this.currentLesson);
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

.myForm {
  display: none;
}

.nocomment {
  display: none;
}

.started {
  display: block;
}
</style>
