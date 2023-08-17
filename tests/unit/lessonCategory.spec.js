import { shallowMount } from "@vue/test-utils";
import LessonCategory from "@/components/LessonCategory.vue";

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

  it("triggers the click when 'Inspire Me' button is clicked", async () => {
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

  it("emits the Selected category when 'Inspire Me' button is clicked", async () => {
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

  it("computes the uniquecartegories", () => {
    const lessons = [
      { id: 1, category: "Spiritual Growth" },
      { id: 2, category: "Awareness" },
      { id: 3, category: "Personal Fulfillment" },
    ];

    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: lessons,
        currentLesson: lessons,
      },
    });

    const uniquecategories = wrapper.vm.uniqueCategories;

    expect(uniquecategories).toEqual([
      "Spiritual Growth",
      "Awareness",
      "Personal Fulfillment",
    ]);
  });

  it("doesnt show unique categories if empty array ", () => {
    const wrapper = shallowMount(LessonCategory, {
      props: {
        lessons: [],
        currentLesson: {},
      },
    });

    const uniquecategories = wrapper.vm.uniqueCategories;

    expect(uniquecategories).toEqual([]);
  });
});
