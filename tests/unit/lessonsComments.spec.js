import { shallowMount } from "@vue/test-utils";
import LessonsComments from "@/components/LessonsComments.vue";

describe("LessonsComments.vue", () => {
  it("renders the component properly", () => {
    const lesson = [ {
          id: 2,
          title: "Spiritual Benefits of Autism",
          category: "Awareness",
          message:
            "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
          affirmation:
            "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
          comments: [
            {
              id: 1,
              title: "Comment 1",
              message: "This is my realization.",
            },
            {
              id: 2,
              title: "Comment 2",
              message: "Another realization here.",
            },
          ],
          likes: 0,
        }];
    const currentLesson = lesson;

    const wrapper = shallowMount(LessonsComments, {
      props: {
        lesson,
        currentLesson,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("displays added comments properly", async () => {
    const lessons = [
      {
        id: 2,
        title: "Spiritual Benefits of Autism",
        category: "Awareness",
        message:
          "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
        affirmation:
          "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
        comments: [
          {
            id: 1,
            title: "Comment 1",
            message: "This is my realization.",
          },
          {
            id: 2,
            title: "Comment 2",
            message: "Another realization here.",
          },
        ],
        likes: 0,
      },
      {
        id: 3,
        title: "Spiritual Benefits of Autism",
        category: "Awareness",
        message:
          "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
        affirmation:
          "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
        comments: [
          {
            id: 1,
            title: "Comment 1",
            message: "This is my realization.",
          },
          {
            id: 2,
            title: "Comment 2",
            message: "Another realization here.",
          },
        ],
        likes: 0,
      },
    ];
  
    const currentLesson = lessons[0]; 
  
    const wrapper = shallowMount(LessonsComments, {
      props: {
        lesson: lessons,
        currentLesson: currentLesson,
      },
    });
  
    await wrapper.vm.$nextTick();

    const commentTitleElements = wrapper.findAll("[data-testid='comenttitle']");
    const commentMessageElements = wrapper.findAll("[data-testid='comentmessage']");

    currentLesson.comments.forEach((comment, index) => {
      const commentTitleElement = commentTitleElements.at(index);
      const commentMessageElement = commentMessageElements.at(index);

      expect(commentTitleElement.text()).toBe(comment.title);
      expect(commentMessageElement.text()).toBe(comment.message);
    });
  });


  it('adds a comment when the Add button is clicked', async () => {
    const lessons = [
      {
        id: 2,
        title: "Spiritual Benefits of Autism",
        category: "Awareness",
        message:
          "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
        affirmation:
          "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
        comments: [
          {
            id: 1,
            title: "Comment 1",
            message: "This is my realization.",
          },
          {
            id: 2,
            title: "Comment 2",
            message: "Another realization here.",
          },
        ],
        likes: 0,
      },
      {
        id: 3,
        title: "Spiritual Benefits of Autism",
        category: "Awareness",
        message:
          "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
        affirmation:
          "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
        comments: [
          {
            id: 1,
            title: "Comment 1",
            message: "This is my realization.",
          },
          {
            id: 2,
            title: "Comment 2",
            message: "Another realization here.",
          },
        ],
        likes: 0,
      },
    ];
    const newComment = {
      id: 1,
      title: 'New Comment',
      message: 'This is a new realization.',
    };

    const currentLesson = lessons[0]; 
    const wrapper = shallowMount(LessonsComments, {
      props: {
        lesson: lessons,
        currentLesson: currentLesson,
      },
    });
  
    await wrapper.setData({ newMessage: newComment });

    await wrapper.vm.$nextTick();

    const commentTitleElements = wrapper.findAll("[data-testid='comenttitle']");
    const commentMessageElements = wrapper.findAll("[data-testid='comentmessage']");

    currentLesson.comments.forEach((comment, index) => {
      const commentTitleElement = commentTitleElements.at(index);
      const commentMessageElement = commentMessageElements.at(index);

      expect(commentTitleElement.text()).toBe(comment.title);
      expect(commentMessageElement.text()).toBe(comment.message);

    });
  });
});