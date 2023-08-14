<template>
  <h1>Life Lesson Oracle</h1>

  <img alt="Vue logo" src="./assets/logo.png" />
  <LessonCategory
    :lessons="lessons"
    :currentLesson="currentLesson"
    @category-selected="inspireMeAgain"
  />

  <LifeLessonDisplay
    :lesson="randomLesson"
    :started="started"
    :currentLesson="currentLesson"
    @update-lesson="updateCurrentLesson"
  />
</template>

<!-- @like-from-child="theLikes" -->

<script>
import LifeLessonDisplay from "./components/LifeLessonDisplay.vue";
import LessonCategory from "./components/LessonCategory.vue";

export default {
  name: "App",

  data() {
    return {
      started: false,
      currentLesson: [],
      selectedCategory: "",
      newComment: {
        id: 0,
        title: " ",
        message: " ",
      },
      lessons: [
        {
          id: 1,
          title: "Elder Souls",
          category: "Spiritual Growth",
          message:
            "Older souls often choose difficult lives to work on unresolved issues or new challenges. Observing life and guiding others from knowledge is a sacred task. Difficulties in your environment can seem tamer due to your abilities.",
          affirmation:
            "I embrace life's challenges as opportunities for spiritual growth and learning.",
          comments: [],
          likes: 0,
        },
        {
          id: 2,
          title: "Spiritual Benefits of Autism",
          category: "Awareness",
          message:
            "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
          affirmation:
            "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
          comments: [],
          likes: 0,
        },
        {
          id: 3,
          title: "Where is My Money?",
          category: "Personal Fulfillment",
          message:
            "Life situations don't always align with our dreams. Happiness comes from making the best of what we have. Wisdom is gained through understanding and making conscious choices. Express love for yourself and embrace all possibilities.",
          affirmation:
            "I am grateful for the abundance in my life and open to new opportunities for personal fulfillment.",
          comments: [],
          likes: 0,
        },
        {
          id: 4,
          title: "Healing Self",
          category: "Self-Discovery",
          message:
            "Fill the void left after clearing negative patterns with unconditional love. Wisdom is gained through understanding experiences and choices. Embrace change, examine beliefs, and create your own reality.",
          affirmation:
            "I love and accept myself unconditionally, and I am open to receiving the wisdom that each experience brings.",
          comments: [],
          likes: 0,
        },
        {
          id: 5,
          title: "Can't Stop Crying",
          category: "Emotional Well-being",
          message:
            "Unresolved trauma from childhood can lead to suppressed emotions. Tears may be releasing hurt, guilt, and relief. Address the memories through regression or deep meditation. Allow yourself to heal and move forward.",
          affirmation:
            "I release emotional burdens and allow healing energy to flow through me, restoring my emotional well-being.",
          comments: [],
          likes: 0,
        },
        {
          id: 6,
          title: "Reality Check",
          category: "Personal Transformation",
          message:
            "Relationships based on fantasies can lead to dissatisfaction. Communication, self-honor, and creative self-expression are key. It's time to honor your true desires and create the life you want, regardless of past choices.",
          affirmation:
            "I trust my inner wisdom and take empowered steps to create a fulfilling life aligned with my true desires.",
          comments: [],
          likes: 0,
        },
        {
          id: 7,
          title: "The Power of Forgiveness",
          category: "Awareness",
          message:
            "Thoughts and beliefs shape our reality, and they are not predetermined. Use feelings and intuition to make choices, and be mindful of your thought patterns. Connect with your inner wisdom to navigate your life's path.",
          affirmation:
            "I am aware of my thought patterns and emotions, using them to consciously shape my reality.",
          comments: [],
          likes: 0,
        },
        {
          id: 8,
          title: "Life Lessons and Karma",
          category: "Spiritual Growth",
          message:
            "Violent acts and negative experiences are chosen as life lessons in duality. Karma is a belief in retribution, while life lessons offer opportunities for growth and understanding. Every experience contributes to spiritual evolution.",
          affirmation:
            "I embrace every experience as an opportunity for growth and understanding, transcending the limitations of karma.",
          comments: [],
          likes: 0,
        },
        {
          id: 9,
          title: "Why leave unconditional love?",
          category: "Spiritual Growth",
          message:
            "Choosing to reincarnate is not done for the purpose of finding unconditional love...",
          affirmation:
            "I embrace my journey of self-discovery and growth, knowing that I possess the power to create my reality.",
          comments: [],
          likes: 0,
        },
        {
          id: 10,
          title: "Which way is the right way?",
          category: "Self-Discovery",
          message:
            "The universe brings to a soul the things that it wished to experience...",
          affirmation:
            "I trust my inner guidance and make choices that align with my authentic self, even if they lead me to unexpected paths.",
          comments: [],
          likes: 0,
        },
        {
          id: 11,
          title: "Exposing the lessons",
          category: "Personal Fulfillment",
          message:
            "Positive energy drives things as well. Negative energy is the one that drives society...",
          affirmation:
            "I release guilt and embrace my journey of self-discovery, learning, and personal transformation.",
          comments: [],
          likes: 0,
        },
        {
          id: 12,
          title: "Why leave ove?",
          category: "Personal Transformation",
          message:
            "Choosing to reincarnate is not done for the purpose of finding unconditional love...",
          affirmation:
            "I embrace my journey of self-discovery and growth, knowing that I possess the power to create my reality.",
          comments: [],
          likes: 0,
        },
        {
          id: 13,
          title: "Which way is the right way?",
          category: "Self-Discovery",
          message:
            "The universe brings to a soul the things that it wished to experience...",
          affirmation:
            "I trust my inner guidance and make choices that align with my authentic self, even if they lead me to unexpected paths.",
          comments: [],
          likes: 0,
        },
        {
          id: 14,
          title: "Exposing the fultile",
          category: "Personal Fulfillment",
          message:
            "Positive energy drives things as well. Negative energy is the one that drives society...",
          affirmation:
            "I release guilt and embrace my journey of self-discovery, learning, and personal transformation.",
          comments: [],
          likes: 0,
        },
      ],
    };
  },
  components: {
    LifeLessonDisplay,
    LessonCategory,
  },

  methods: {
    inspireMeAgain(selectedCategory) {
      this.selectedCategory = "";
      if (!selectedCategory || selectedCategory === "All Categories") {
        const randomIndex = Math.floor(Math.random() * this.lessons.length);
        this.currentLesson = this.lessons[randomIndex];
      } else {
        const lessonsInCategory = this.lessons.filter(
          (lesson) => lesson.category === selectedCategory
        );
        const randomIndex = Math.floor(
          Math.random() * lessonsInCategory.length
        );
        this.currentLesson = lessonsInCategory[randomIndex];
        console.log(this.currentLesson.comments);
      }

      this.started = true;
    },

    updateCurrentLesson(updatedLesson) {
      const lessonIndex = this.lessons.findIndex(
        (lesson) => lesson.id === updatedLesson.id
      );
      if (lessonIndex !== -1) {
        this.lessons[lessonIndex] = updatedLesson;
        this.currentLesson = updatedLesson;
        this.started = true;
      }
    },

    // theLikes() {
    //   this.currentLesson.likes++;
    // },
  },
  computed: {
    randomLesson() {
      const randomIndex = Math.floor(Math.random() * this.lessons.length);
      return this.lessons[randomIndex];
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

form {
  display: grid;
  padding: 20px;
  margin: 20px auto;

  label {
    font-size: 20px;
  }

  #title {
    display: grid;
    border: 3px solid red;
    margin: 20px auto;
    border-radius: 10px;
    padding: 10px;
    width: 500px;
    height: 15px;
  }

  #message {
    display: grid;
    border: 3px solid red;
    margin: 20px auto;
    border-radius: 10px;
    padding: 10px;
    width: 500px;
    height: 169px;
  }

  button {
    display: grid;
    border: 3px solid red;
    border-radius: 10px;
    padding: 10px;
    margin: 20px auto;
  }

  button:hover {
    background-color: #10878b;
    color: white;
    cursor: pointer;
  }
}
</style>
