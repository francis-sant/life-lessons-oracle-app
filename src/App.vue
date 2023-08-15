<template>
  <h1>Life Lesson Oracle</h1>

  <LessonCategory
    :lessons="lessons"
    :currentLesson="currentLesson"
    @category-selected="inspireMeAgain"
  />

  <LifeLessonDisplay
    :lesson="randomLesson"
    :started="started"
    :currentLesson="currentLesson"
    v-on:update-likes="updatelikes"
  />
</template>

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
        // console.log(this.currentLesson.comments);
      }

      this.started = true;
    },

    updatelikes(updatedLikes) {
      this.currentLesson.likes = updatedLikes;
    },
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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body {
  height: 100vh;
  background-image: url("https://hips.hearstapps.com/hmg-prod/images/space-background-with-realistic-nebula-and-royalty-free-illustration-1605710206.?resize=1200:*");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 80px 0;
  font-family: "Comfortaa", cursive;
}

h1 {
  margin-top: 30px;
  color: white;
  font-size: 40px;
  font-family: "Comfortaa", cursive;
}

.category-selector {
  margin: 20px auto;

  select {
    font-size: 20px;
    border: 3px solid rgb(248, 248, 248);
    background-color: transparent;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 20px auto;

    option {
      background-color: #5b0cb4;
      color: white;
    }
  }
  button {
    font-size: 20px;
    border: 1px solid rgb(248, 248, 248);
    background-color: transparent;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 20px auto;
  }

  button:hover {
    background-color: #5734f3f8;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px #a473fff8;
    border: 3px solid white;
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  // height: 850px;
  max-width: 690px;
  max-height: 850px;
  height: 100%;
  background-image: url("https://i.pinimg.com/originals/d8/b1/4c/d8b14c499edc29ffd89a78d0fd6055f6.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;

  border: 4px solid #5b0cb4;
}

div.myForm {
  border: 3px solid #36c3c3;
  max-width: 400px;
  width: 90%;
  margin: 71px auto;
  border-radius: 20px;
  color: #fbfbfb;

  h3 {
    border-bottom: 2px solid #36c3c3;
  }
}

form {
  padding: 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
  }

  #title {
    border: 3px solid #36c3c3;
    margin: 20px auto;
    border-radius: 10px;
    padding: 10px;
  }

  #message {
    border: 3px solid #36c3c3;
    margin: 20px auto;
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    max-width: 330px;
    height: 203px;
  }

  button {
    border: 3px solid #5f6bff;
    background-color: transparent;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 20px auto;
    font-size: 18px;
  }

  button:hover {
    background-color: #5f6bff;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px white;
    border: 3px solid white;
  }
}

.lesson,
.currentlesson {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid #5b0261;
  border-radius: 66px;
  padding: 20px;
  margin: auto;
  width: 100%;
  height: 785px;
  max-height: 850px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #230a3bd9;
  position: relative;
  color: white;
  overflow: hidden; /* To hide any overflowing content */

  ul {
    list-style: none;
    width: 90%;
    bottom: 5%;
    position: absolute;
    border: 2px solid #986da7;
    border-radius: 43px;

    hr {
      border: 1px solid #986da7;
      width: 231px;
      margin: auto;
    }
  }

  h2 {
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 7%;
  }

  p {
    font-size: 18px;
    text-align: center;
    margin: 10px 0;
    border: 1px solid #75328b;
    border-radius: 10px;
    padding: 10px;
  }

  .lessonlikes {
    font-size: 20px;
  }

  #likebtn button {
    border: 3px solid white;
    background-color: rgb(197, 5, 188);
    color: white;
    border-radius: 40px;
    padding: 10px;
    margin: 20px auto;
    font-size: 18px;
  }
  #likebtn button:hover {
    background-color: #5b0261;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px white;
    border: 3px solid white;
    padding: 10px 20px;
  }
}
#norealization {
  color: white;
  padding: 30px;
  border: 3px solid #f1f2f7;
  width: 300px;
  margin: 20px auto;
  border-radius: 10px;
}

.realizations {
  color: white;
  padding: 30px;
  border: 3px solid #f1f2f7;
  width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  font-size: 18px;

  h3 {
    margin: 10px 0;
    font-size: 20px;
    border-bottom: 2px solid white;
  }

  #uniquerealization {
    line-height: 30px;
    text-align: left;
    hr {
      width: 200px;
      border: 1px double #f1f2f7;
      margin: auto;
    }
  }
}

@media (min-width: 375px) and (max-width: 992px) {
  h1 {
    font-size: 35px;
  }

  .container {
    width: 90%;
  }

  .category-selector {
    font-size: 20px;
  }
  .lesson,
  .currentlesson {
    width: 380px;
    min-height: auto;
    padding: 10px;
    border-radius: 15px;
  }

  .currentlesson h2 {
    font-size: 20px;
    text-align: center;
    /* margin-top: 10px; */
    position: absolute;
    top: 5%;
  }

  .lesson h2,
  .currentlesson h2 {
    font-size: 25px;
  }

  .lesson p,
  .currentlesson p {
    font-size: 18px;
  }

  .lesson ul,
  .currentlesson ul {
    font-size: 15px;
    bottom: 2%;
  }

  #message {
    max-width: 300px;
  }

  .category-selector button {
    font-size: 20px;
  }
}

@media (max-width: 993px) {
  h1 {
    font-size: 35px;
  }

  .container {
    width: 90%;
    height: 850px;
    max-width: 850px;
    max-height: 850px;
  }
  .lesson,
  .currentlesson {
    width: 100%;
    height: 800px;
    padding: 10px;
    height: 100%;
    font-size: 20px;
    border-radius: 15px;
  }

  .currentlesson h2 {
    text-align: center;
    position: absolute;
    top: 2%;
  }

  #likeMe button {
    font-size: 20px;
  }
}
</style>
