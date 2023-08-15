import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders the app title", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("h1").text()).toBe("Life Lesson Oracle");
  });

  it("passes props to LessonCategory and LifeLessonDisplay", () => {
    const wrapper = shallowMount(App);
    const lessonCategory = wrapper.findComponent({ name: "LessonCategory" });
    const lifeLessonDisplay = wrapper.findComponent({ name: "LifeLessonDisplay" });

    expect(lessonCategory.props("lessons")).toEqual(wrapper.vm.lessons);
    expect(lessonCategory.props("currentLesson")).toEqual(wrapper.vm.currentLesson);

    expect(lifeLessonDisplay.props("lesson")).toEqual(wrapper.vm.randomLesson);
    expect(lifeLessonDisplay.props("started")).toEqual(wrapper.vm.started);
    expect(lifeLessonDisplay.props("currentLesson")).toEqual(wrapper.vm.currentLesson);
  });

});