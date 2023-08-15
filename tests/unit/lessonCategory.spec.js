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

  //with ABUG
  // it("does toggle between lesson and currentlesson when toggled", async () => {
  //   const lessons =  [{
  //     id: 1,
  //     title: "Elder Souls",
  //     category: "Spiritual Growth",
  //     message:
  //       "Older souls often choose difficult lives to work on unresolved issues or new challenges. Observing life and guiding others from knowledge is a sacred task. Difficulties in your environment can seem tamer due to your abilities.",
  //     affirmation:
  //       "I embrace life's challenges as opportunities for spiritual growth and learning.",
  //     comments: [],
  //     likes: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "Spiritual Benefits of Autism",
  //     category: "Awareness",
  //     message:
  //       "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
  //     affirmation:
  //       "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
  //     comments: [],
  //     likes: 0,
  //   }];
  //   // const currentLesson = {
  //   //   id: 1,
  //   //   title: "Self-Inquiry",
  //   //   category: "Ramana Maharshi",
  //   //   message:
  //   //     "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
  //   //   affirmation: "I am not my thoughts; I am the silent observer of my mind.",
  //   // };

  //   const wrapper = shallowMount(LessonCategory ,{
  //     props: {
  //     lessons: lessons,
  //       currentLesson: lessons,
  //     },
  //   });

  //    // Wait for the next tick to allow component updates
  //    await wrapper.vm.$nextTick();

  //    // Ensure the button is visible and exists
  //    const inspireMeButton = wrapper.find("[data-testid='inspireMe']");
  //    expect(inspireMeButton.exists()).toBe(true);

  //    // Simulate clicking the "Inspire Me" button
  //    await inspireMeButton.trigger("click");

  //    // Wait for the DOM update after the button click
  //    await wrapper.vm.$nextTick();

  //    // Check if the component is in the "currentlesson" state
  //    expect(wrapper.vm.currentLesson).toBe(true);

  //    // Click the button again to toggle back
  //    await inspireMeButton.trigger("click");
  //    await wrapper.vm.$nextTick();

  //    // Check if the component is back in the "lesson" state
  //    expect(wrapper.vm.started).toBe(false);
  //  });
});
