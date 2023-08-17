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
    const lifeLessonDisplay = wrapper.findComponent({
      name: "LifeLessonDisplay",
    });

    expect(lessonCategory.props("lessons")).toEqual(wrapper.vm.lessons);
    expect(lessonCategory.props("currentLesson")).toEqual(
      wrapper.vm.currentLesson
    );

    expect(lifeLessonDisplay.props("lesson")).toEqual(wrapper.vm.randomLesson);
    expect(lifeLessonDisplay.props("started")).toEqual(wrapper.vm.started);
    expect(lifeLessonDisplay.props("currentLesson")).toEqual(
      wrapper.vm.currentLesson
    );
  });

  it("inspireMeAgain updates currentLesson and started when a category is selected", async () => {
    const wrapper = shallowMount(App);

    const selectedCategory = "Spiritual Growth";
    wrapper.vm.inspireMeAgain(selectedCategory);

    expect(wrapper.vm.currentLesson).not.toBe([]);
    expect(wrapper.vm.started).toBe(true);
  });

  it("updates currentLesson.likes when updatelikes method is called", async () => {
    const wrapper = shallowMount(App);

    const currentLesson = {
      id: 1,
      title: "Elder Souls",
      category: "Spiritual Growth",
      message: "...",
      affirmation: "...",
      comments: [],
      likes: 0,
    };

    wrapper.setData({ currentLesson });

    wrapper.vm.updatelikes(10);
    expect(wrapper.vm.currentLesson.likes).toBe(10);
  });



  it('return one random lesson[index] in randomLesson', () => {
  
    const lessons = [
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
    ];

    const wrapper = shallowMount(App, {
      data() {
        return {
          lessons: lessons,
        };
      },
    });

  
    const computedRandomLesson = wrapper.vm.randomLesson;

    expect(lessons).toContainEqual(computedRandomLesson);
  });

  //https://alexjeffburke.github.io/jest-unexpected/api/toContainEqual///
});
