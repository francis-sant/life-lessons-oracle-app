import { shallowMount } from "@vue/test-utils";
import LessonsComments from "@/components/LessonsComments.vue";

describe("LessonsComments.vue", () => {
  it("renders the component properly", () => {
    const lesson = [
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
    ];
    const currentLesson = lesson;

    const wrapper = shallowMount(LessonsComments, {
      props: {
        lesson,
        currentLesson,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });



  it("displays added comments properly", () => {
    const currentLesson = {
      id: 2,
      title: "Spiritual Benefits of Autism",
      category: "Awareness",
      message: "Autism can provide a unique perception...",
      affirmation: "I open my mind to different perspectives...",
      comments: [
        {
          id: 1,
          title: "Comment 1",
          message: "This is my realization.",
        },
        {
          id: 2,
          title: "Comment 2",
          message: "Another realization.",
        },
      ],
      likes: 0,
    };

    const wrapper = shallowMount(LessonsComments, {
      propsData: {
        currentLesson: currentLesson,
      },
    });

    const commentTitleElements = wrapper.findAll("[data-testid='comenttitle']");
    const commentMessageElements = wrapper.findAll(
      "[data-testid='comentmessage']"
    );

    const comment1 = currentLesson.comments[0];
    const comment2 = currentLesson.comments[1];

    const commentTitle1 = commentTitleElements.at(0);
    const commentMessage1 = commentMessageElements.at(0);

    const commentTitle2 = commentTitleElements.at(1);
    const commentMessage2 = commentMessageElements.at(1);

    expect(commentTitle1.text()).toBe(comment1.title);
    expect(commentMessage1.text()).toBe(comment1.message);

    expect(commentTitle2.text()).toBe(comment2.title);
    expect(commentMessage2.text()).toBe(comment2.message);
  });



  it("does not add a comment when form fields are empty", async () => {
    const currentLesson = {
      id: 2,
      title: "Spiritual Benefits of Autism",
      category: "Awareness",
      message:
        "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
      affirmation:
        "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
      comments: [],
      likes: 0,
    };

    const wrapper = shallowMount(LessonsComments, {
      propsData: {
        currentLesson: currentLesson,
      },
    });

    await wrapper.find("form button[type='submit']").trigger("click");
    expect(wrapper.emitted("new-comment")).toBeFalsy();
  });



  it("does emit the new comment when form fields and button clicked ", async () => {
    const currentLesson = {
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
    };

    const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson: currentLesson,
      },
    });

    const newMessage = {
      id: 3,
      title: "Comment 3",
      message: "This is the third comment.",
    };

    await wrapper.setData({ newMessage: newMessage });
    await wrapper.find("[data-testid='submitbtn']").trigger("click");

    wrapper.vm.addNewMessage(newMessage);

    expect(wrapper.emitted("new-comment")).toBeTruthy();
    expect(wrapper.emitted("new-comment")[0][0].title).toBe("Comment 3");
    expect(wrapper.emitted("new-comment")[0][0].message).toBe(
      "This is the third comment."
    );
  });




  it("does emit the delete-comment with id properly", async () => {
    const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson: {
          comments: [
            { id: 1, title: "Title 1", message: "Message 1" },
            { id: 2, title: "Title 2", message: "Message 2" },
          ],
        },
      },
    });

    const idToDelete = 1;

    await wrapper.vm.deleteCommentId(idToDelete);

    expect(wrapper.emitted("delete-comment")).toBeTruthy();
    expect(wrapper.emitted("delete-comment")[0]).toEqual([idToDelete]);
  });



  it('correctly determines if it hasComment', () => {
    const currentLesson = {
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
    };

    
    const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson,
      },
    });

    wrapper.vm.hasComments(currentLesson);
    expect(wrapper.vm.hasComments(currentLesson)).toBe(true);
    
  });



  it('correctly determines if there are no comments', () => {
    const noComments = [];

     const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson: {
          comments: noComments,
        },
      },
    });

    expect(wrapper.vm.hasComments(wrapper.props().currentLesson)).toBe(false);
  });


  it('correctly determines if "No Realizations Yet" should be shown', () => {
    const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson: {
          comments: [], 
        },
      },
    });
    const shouldShowNoComment = wrapper.vm.shouldShowNoComment;

   expect(shouldShowNoComment).toBe(true);
  });



  it('correctly determines if comments are present, so "No Realizations Yet" should not be shown', () => {
      const wrapper = shallowMount(LessonsComments, {
      props: {
        currentLesson: {
          comments: [
            { id: 1, title: 'Title 1', message: 'Message 1' },
            { id: 2, title: 'Title 2', message: 'Message 2' },
          ],
        },
      },
    });

 
    const shouldShowNoComment = wrapper.vm.shouldShowNoComment;

    expect(shouldShowNoComment).toBe(false);
  });

});

// ---- New option with loop-

// it("displays added comments properly", () => {
//   const lessons = [
//     {
//       id: 2,
//       title: "Spiritual Benefits of Autism",
//       category: "Awareness",
//       message:
//         "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
//       affirmation:
//         "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
//       comments: [
//         {
//           id: 1,
//           title: "Comment 1",
//           message: "This is my realization.",
//         },
//         {
//           id: 2,
//           title: "Comment 2",
//           message: "Another realization.",
//         },
//       ],
//       likes: 0,
//     },
//     {
//       id: 3,
//       title: "Spiritual Benefits of Autism",
//       category: "Awareness",
//       message:
//         "Autism can provide a unique perception of energies and communication with spirits. It's chosen for various purposes, including exploration of human characteristics and life lessons. Your child's unique perception is a reminder of unexplored possibilities.",
//       affirmation:
//         "I open my mind to different perspectives, knowing that unique perceptions offer valuable insights.",
//       comments: [
//         {
//           id: 1,
//           title: "Comment 1",
//           message: "This is my realization.",
//         },
//         {
//           id: 2,
//           title: "Comment 2",
//           message: "Another here.",
//         },
//       ],
//       likes: 0,
//     },
//   ];

//   const currentLesson = lessons[0];

//   const wrapper = shallowMount(LessonsComments, {
//     props: {
//       lesson: lessons,
//       currentLesson: currentLesson,
//     },
//   });

//   const commentTitle = wrapper.findAll("[data-testid='comenttitle']");
//   const commentMessage = wrapper.findAll(
//     "[data-testid='comentmessage']"
//   );

//   currentLesson.comments.forEach((comment, index) => {
//     const commentTitle = commentTitle.at(index);
//     const commentMessage = commentMessage.at(index);

//     expect(commentTitle.text()).toBe(comment.title);
//     expect(commentMessage.text()).toBe(comment.message);
//   });
// });
