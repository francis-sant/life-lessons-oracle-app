<template>
  <div class="myForm">
    <form @submit.prevent="addNewMessage">
      <label for="title">Message Title:</label>
      <input v-model="newMessage.title" type="text" id="title" />

      <label for="content">Message Content:</label>
      <textarea v-model="newMessage.message" id="content"></textarea>

      <button type="submit">Add Message</button>
    </form>
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
        title: " ",
        message: " ",
        id: "",
      },
    };
  },
  methods: {
    addNewMessage() {
      const newComment = { ...this.newMessage, id: this.getNextId() };
      this.$emit("new-comment", newComment);
      this.newMessage.title = "";
      this.newMessage.message = "";
    },
    getNextId() {
      const presentIds = this.lesson.map((message) => message.id);
      return Math.max(...presentIds) + 1;
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
