import { shallowMount } from "@vue/test-utils";
import LessonCategory from "@/components/LessonCategory.vue";
// import LifeLessonDisplay from "@/components/LifeLessonDisplay.vue";

describe("LessonCategory.vue", () => {
  it("renders the CategorySelector component correctly", () => {
    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: [],
        currentLesson: {},
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("displays life lesson categories in a select dropdown", () => {
    const lessons = [
      { category: "Spiritual Growth" },
      { category: "Awareness" },
      { category: "Personal Fulfillment" },
    ];

    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: lessons,
        currentLesson: {},
      },
    });

    const options = wrapper.findAll("option");
    expect(options.length).toBe(4); 
    expect(options.at(1).text()).toBe("Spiritual Growth");
    expect(options.at(2).text()).toBe("Awareness");
    expect(options.at(3).text()).toBe("Personal Fulfillment");
  });




  it("emits 'category-selected' event when 'Inspire Me' button is clicked", async () => {
    const lessons = [];
    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: lessons,
        currentLesson: {},
      },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted("category-selected")).toBeTruthy();
  });

  it("emits the selected category when 'Inspire Me' button is clicked", async () => {
    const lessons = [];
    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: lessons,
        currentLesson: {},
      },
    });

    wrapper.setData({ selectedCategory: "Spiritual Growth" });
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted("category-selected")[0]).toEqual([
      "Spiritual Growth",
    ]);
  });



});
