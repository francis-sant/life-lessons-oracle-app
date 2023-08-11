<template>
  <div class="myForm">
    <form @submit.prevent="addNewMessage">
      <label for="title">Title:</label>
      <input
        v-model="newMessage.title"
        type="text"
        id="title"
        placeholder="My Advice Title"
      />

      <label for="content">Your Realization:</label>
      <textarea
        v-model="newMessage.message"
        id="message"
        placeholder="My realization here"
      ></textarea>

      <button type="submit">Add Message</button>
    </form>

    <!-- <div class="myComments">
      <h2>Title: {{ newMessage.title }}</h2>
      <h2>My Message: {{ newMessage.message }}</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "LessonsComments",
  props: {
    lesson: {
      type: Array,
      default() {
        return [];
      },
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
        this.$emit("new-comment", newComment);
        this.newMessage.title = "";
        this.newMessage.message = "";
      }
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

// form {
//   padding: 20px;
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   border: 3px solid red;
//   max-width: 743px;
//   margin: 20px auto;
//   border-radius: 10px;
// }
</style>
