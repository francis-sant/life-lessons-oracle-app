import { shallowMount } from "@vue/test-utils";
import LifeLessonDisplay from "@/components/LifeLessonDisplay.vue";
// import LessonCategory from "@/components/LessonCategory.vue";

describe("LifeLessonDisplay.vue", () => {
  it("does receive props lesson and currentLesson ", () => {
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
    expect(wrapper.find(".lesson p").text()).toContain(lesson.message);
    expect(wrapper.find("[data-testid='affirmation']").text()).toContain(
      lesson.affirmation
    );
    expect(wrapper.find(".lesson li.roman").text()).toBe(String(lesson.id));
    expect(wrapper.find(".lesson li h3").text()).toBe(lesson.category);
  });

  //likes and comments
});
