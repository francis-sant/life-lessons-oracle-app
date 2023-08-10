<template>
  <h1>Life Lesson Oracle</h1>

  <h2>Select your category: {{ likes }}</h2>
  <h2>RandomId: {{ randomLesson.id }}</h2>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <LifeLessonDisplay
    :lesson="randomLesson"
    :current-lesson="currentLesson"
    @like-from-parent="addOneLike"
    @inspire-from-parent="inspireMeAgain"
  />
</template>

<script>
import LifeLessonDisplay from "./components/LifeLessonDisplay.vue";

export default {
  name: "App",
  data() {
    return {
      // categorySelected: [list],
      likes: 0,
      currentLesson: [],
      lessons: [
        {
          id: 1,
          title: "Self-Inquiry",
          category: "Ramana Maharshi",
          message:
            "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
          affirmation:
            "I am not my thoughts; I am the silent observer of my mind.",
        },
        {
          id: 2,
          title: "Mindfulness",
          category: "Osho",
          message:
            "Be present in every moment without judgment or attachment. Observe your thoughts, emotions, and sensations as they arise, and let them pass.",
          affirmation: "I am here and now, witnessing life as it unfolds.",
        },
        {
          id: 3,
          title: "Inner Engineering",
          category: "Sadhguru",
          message:
            "Cultivate inner balance through yogic practices and self-awareness. Align your body, mind, and energy to experience harmony and transformation.",
          affirmation:
            "I am the master of my inner state, creating a life of joy and wellbeing.",
        },
        {
          id: 4,
          title: "Silent Presence",
          category: "Mooji",
          message:
            "Rest in the stillness of your own being. Recognize that you are the unchanging awareness that witnesses all experiences.",
          affirmation:
            "I am the eternal presence beyond all forms and stories.",
        },
        {
          id: 5,
          title: "Holistic Healing",
          category: "Louise Hay",
          message:
            "Heal your life by changing your thoughts and beliefs. Recognize the connection between your mental patterns and physical health.",
          affirmation:
            "I release old patterns and embrace loving thoughts, inviting health and happiness into my life.",
        },
        {
          id: 6,
          title: "Akashic Records",
          category: "Edgar Cayce",
          message:
            "Access the Akashic Records to gain insights into your soul's journey. Seek guidance and clarity from the universal wisdom.",
          affirmation:
            "I open myself to the wisdom of the universe, receiving guidance from the depths of existence.",
        },
      ],
    };
  },
  components: {
    LifeLessonDisplay,
  },

  computed: {
    randomLesson() {
      const randomIndex = Math.floor(Math.random() * this.lessons.length);
      return this.lessons[randomIndex];
    },
    // getRandomLesson() {
    //   const randomIndex = Math.floor(Math.random() * this.lessons.length);
    //   return this.lessons[randomIndex];
    // },
  },

  methods: {
    addOneLike() {
      this.likes++;
    },
    inspireMeAgain() {
      this.currentLesson = [];
      const randomIndex = Math.floor(Math.random() * this.lessons.length);
      this.currentLesson = this.lessons[randomIndex];
      console.log(this.currentLesson);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
