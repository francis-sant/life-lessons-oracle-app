import { shallowMount } from "@vue/test-utils";
import LifeLessonDisplay from "@/components/LifeLessonDisplay.vue";

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
      comments: [],
      likes: 0,
    };

    const currentLesson = {};

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
        currentLesson,
      },
    });

    expect(wrapper.find(".lesson h2").text()).toBe(lesson.title);
    expect(wrapper.find(".lesson p").text()).toBe(lesson.message);
    expect(wrapper.find("[data-testid='affirmation']").text()).toBe(
      lesson.affirmation
    );
    expect(wrapper.find(".lesson li.roman").text()).toBe(String(lesson.id));
    expect(wrapper.find(".lesson li h3").text()).toBe(lesson.category);
  });

  it("displays the 'currentLesson' details when started is true ", async () => {
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };
    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson: {},
        started: true,
        currentLesson,
      },
    });
    await wrapper.vm.currentLesson;

    await wrapper.vm.$nextTick();

    expect(wrapper.find(".currentlesson h2").text()).toBe(currentLesson.title);
    expect(wrapper.find('[data-testid="claffirmation"]').text()).toBe(
      currentLesson.affirmation
    );
    expect(wrapper.find(".currentlesson li.roman").text()).toBe(
      String(currentLesson.id)
    );
    expect(wrapper.find(".currentlesson li h3").text()).toBe(
      currentLesson.category
    );
  });

  it("emits 'update-likes' event when 'likeMe' is clicked", async () => {
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };
    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson: {},
        started: true,
        currentLesson,
      },
    });

    await wrapper.find('[data-testid="likeMe"]').trigger("click");
    expect(wrapper.emitted("update-likes")).toBeTruthy();
    expect(wrapper.emitted("update-likes")[0]).toEqual([1]);
  });

  it("toggles the 'Like Me' button between 'Like Me' and 'UnLike Me' when clicked", async () => {
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message: "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson: {},
        started: true,
        currentLesson,
      },
    });


    const likeButton = wrapper.find('[data-testid="likeMe"]');

    expect(likeButton.exists()).toBe(true);
    expect(likeButton.text()).toBe("Like Me");

    
    await likeButton.trigger("click");
    await wrapper.vm.$nextTick();


    const unlikeButton = wrapper.find('[data-testid="unlikeMe"]');
    expect(unlikeButton.exists()).toBe(true);
    expect(unlikeButton.text()).toBe("UnLike Me");


    await unlikeButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(likeButton.exists()).toBe(true);
    expect(likeButton.text()).toBe("Like Me");

  });


  it("renders LessonsComments component with correct props", async () => {
    const lesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };

    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson,
        currentLesson,
      },
    });

    await wrapper.vm.$nextTick();

    const LessonsComments = wrapper.findComponent({ name: "LessonsComments" });
    expect(LessonsComments.exists()).toBe(true);
    expect(LessonsComments.props("started")).toBeFalsy();
    expect(LessonsComments.props("currentLesson")).toBeTruthy();
  });

  it("adds a new comment when 'newComment' method is called", async () => {
    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [],
      likes: 0,
    };

    const newComment = {
      id: 1,
      title: "Comment 1",
      message: "This is my realization.",
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson: {},
        started: true,
        currentLesson,
      },
    });

    await wrapper.vm.newComment(newComment);

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.currentLesson.comments[0]).toEqual(newComment);
  });

  it("deletes a comment when 'deleteComment' method is called", async () => {
    const commentDeleted = {
      id: 1,
      title: "Comment 1",
      message: "This is a comment to delete.",
    };

    const currentLesson = {
      id: 1,
      title: "Self-Inquiry",
      category: "Ramana Maharshi",
      message:
        "Turn your attention inward and ask, 'Who am I?' Dive into the depths of your being to discover the true self beyond thoughts and identifications.",
      affirmation: "I am not my thoughts; I am the silent observer of my mind.",
      comments: [commentDeleted],
      likes: 0,
    };

    const wrapper = shallowMount(LifeLessonDisplay, {
      props: {
        lesson: {},
        started: true,
        currentLesson,
      },
    });

    wrapper.vm.deleteComment(commentDeleted.id);

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.currentLesson.comments).toHaveLength(0);
  });
});
