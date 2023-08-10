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
  it("Is the props lesson and currentLesson being received?", () => {
    const lesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
    };
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
        currentLesson,
      },
    });
    expect(wrapper.vm.lesson).toEqual(lesson);
    expect(wrapper.vm.currentLesson).toEqual(currentLesson);
  });

  it("does display inital random lesson when Started is false", () => {
    const lesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
    };

    const currentLesson = {};

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
        currentLesson,
      },
    });

    expect(wrapper.find(".lesson h2").text()).toBe(lesson.title);
    expect(wrapper.find(".lesson h3").text()).toBe(lesson.category);
    expect(wrapper.find(".lesson p").text()).toContain(lesson.message);
    expect(wrapper.find("[data-testid='affirmation' ]").text()).toContain(
      lesson.affirmation
    );
  });

  it("does toggle between lesson and currentlesson when toggled", async () => {
    const lesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
    };
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
        currentLesson,
      },
    });

    expect(wrapper.vm.started).toBe(false);
    await wrapper.find("[data-testid='inspireMe' ]").trigger("click");
    expect(wrapper.vm.started).toBe(true);
    await wrapper.find("[data-testid='inspireMe' ]").trigger("click");
    expect(wrapper.vm.started).toBe(false);
  });

  it("does display Like, Add a My spiritual advice buttons correclty ", () => {});

  it("does show another message when Inspire Me btn is clicked", () => {});

  it("does Like button works properly", () => {});

  it("does Add My spiritual advice to new advices category", () => {});
});
