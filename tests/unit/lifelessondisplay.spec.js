
import { shallowMount } from "@vue/test-utils";
import LifeLessonDisplay from "@/components/LifeLessonDisplay.vue";
import LessonCategory from "@/components/LessonCategory.vue";

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

  //with ABUG
  // it("does toggle between lesson and currentlesson when toggled", async () => {
  //   const lesson =  [{
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
  //   const currentLesson = {
  //     id: 1,
  //     title: "Self-Inquiry",
  //     category: "Ramana Maharshi",
  //     message:
  //       "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
  //     affirmation: "I am not my thoughts; I am the silent observer of my mind.",
  //   };

  //   const wrapper = shallowMount(LifeLessonDisplay ,{
  //     props: {
  //       lesson,
  //       currentLesson,
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
  //    expect(wrapper.vm.started).toBe(true);
 
  //    // Click the button again to toggle back
  //    await inspireMeButton.trigger("click");
  //    await wrapper.vm.$nextTick();
 
  //    // Check if the component is back in the "lesson" state
  //    expect(wrapper.vm.started).toBe(false);
  //  });
});

