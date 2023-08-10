<template>
  <div class="myForm">
    <form @submit.prevent="addNewMessage">
      <label for="title">Message Title:</label>
      <input v-model="newMessage.title" type="text" id="title" />

      <label for="content">Message Content:</label>
      <textarea v-model="newMessage.content" id="content"></textarea>

      <button type="submit">Add Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: {
        title: " ",
        message: " ",
          },
    };
  },
  methods: {
    addNewMessage() {
      this.messages.push({ ...this.newMessage, id: this.getNextId() });

      // Clear the input fields
      this.newMessage.title = "";
      this.newMessage.message = "";
    },
    getNextId() {
      // Calculate the next available ID based on the existing messages
      const existingIds = this.messages.map((message) => message.id);
      return Math.max(...existingIds) + 1;
    },
  },
  props: {
    messages: Array, // Pass the existing messages as a prop
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
