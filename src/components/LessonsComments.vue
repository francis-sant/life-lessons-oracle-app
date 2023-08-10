<template>
  <div class="myForm">
    <form @submit.prevent="addNewMessage">
      <label for="title">Message Title:</label>
      <input
        v-model="newMessage.title"
        type="text"
        id="title"
        placeholder="Your Advice Title"
      />

      <label for="content">Message Content:</label>
      <textarea
        v-model="newMessage.message"
        id="message"
        placeholder="Your Advice here"
      ></textarea>

      <button type="submit">Add Message</button>
    </form>

    <div class="myComments" :value="inputText">
      <h2>Title: {{ newMessage.title }}</h2>
      <h2>My Message: {{ newMessage.message }}</h2>
    </div>
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
    inputText: {
      type: String,
      default: "",
    },
    // currentLesson: {
    //   type: Object,
    //   required: true,
    // },
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
      let newMsg = [];
      const newComment = { ...this.newMessage };
      this.$emit("new-comment", newComment);
      this.newMessage.title = newComment.title;
      this.newMessage.message = newComment.message;
      this.newMessage.id = newComment.id + 1;
      newMsg = this.newMessage;
      // return newMsg;
      console.log(newMsg);
    },
    // getNextId() {
    //   const presentIds = this.lesson.map((message) => message.id);
    //   return Math.max(...presentIds) + 1;
    // },
    // getNextId() {
    //   let beginToEnd = 0;

    //   for (let lesson of this.currentLesson) {
    //     if (lesson.id > beginToEnd) {
    //       beginToEnd = lesson.id;
    //     } else {
    //       beginToEnd += beginToEnd;
    //     }
    //     // console.log(beginToEnd);
    //   }

    // console.log(beginToEnd + 1);
  },

  // getNextId() {
  //   let highestId = 0;

  //   for (let lesson of this.currentLesson) {
  //     if (lesson.id > highestId) {
  //       highestId = lesson.id;
  //     }
  //   }

  //   const nextId = highestId + 1;
  //   return nextId;
  //   // console.log(nextId); // Log the calculated next ID
  //   // return nextId; // Return the next ID
  // },
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
