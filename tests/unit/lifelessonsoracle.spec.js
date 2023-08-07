import { shallowMount } from "@vue/test-utils";
import LifeLessonsOracle from "@/components/LifeLessonsOracle.vue";

describe("LifeLessonsOracle.vue", () => {
  it("renders the LessonCategory properly", () => {
    const wrapper = shallowMount(LifeLessonsOracle, {});
  });

  it("starts with an empty lessons array", () => {
    const wrapper = shallowMount(LifeLessonsOracle, {});
  });

  it("displays life lessons category in a list", async () => {
    
  });

  it("does not display the clear button when life lessons array is empty", async () => {

  });

  it("does display the learn My lesson button when life lessons array is empty", () => {

  });

  it("updates lessons array with random life lessons on Random category", async () => {
    
  });


});
