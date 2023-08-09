// LessonDisplay Component
// The LessonDisplay component is responsible for displaying the lessons. It receives the lessons array
// and displays one Random lesson from the selected category. It also displays the buttons "Like", "Save", and
// "Comment" for the user to interact with the lesson. The user can save the lesson
// and it will be displayed in the "My Card Lesson" section. The user can also like
// the lesson and the number of likes will be displayed. The user can also add a comment
// to the lesson and it will be displayed in the "My realization comment" section.

import { shallowMount } from "@vue/test-utils";
// import LifeLessonsOracle from "@/components/LifeLessonsOracle.vue";
import LifeLessonDisplay from "@/components/LifeLessonDisplay.vue";

describe("LifeLessonDisplay.vue", () => {
  it("Is the props lesson working", () => {
       const lesson = {
          id: 1,
          title: "Self-Inquiry",
          category: "Ramana Maharshi",
          message:
            "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
          affirmation:
            "I am not my thoughts; I am the silent observer of my mind.",
        };
     
    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
      },
    });
    expect(wrapper.find("h2").text()).toContain(lesson.title);
    expect(wrapper.find("h3").text()).toContain(lesson.category);
    expect(wrapper.find("p").text()).toContain(lesson.message);
    
  });

  it("does display a random message for the starting random category", () => {});

  it("does it show Inspare Me button after the message appears", () => {});

  it("does display Like, Add a My spiritual advice buttons correclty ", () => {});

  it("does show another message when Inspire Me btn is clicked", () => {});

  it("does Like button works properly", () => {});

  it("does Add My spiritual advice to new advices category", () => {});
});
