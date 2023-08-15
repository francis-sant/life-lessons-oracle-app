<template>
  <div class="category-selector">
    <select v-model="selectedCategory">
      <option value="">All Categories</option>
      <option v-for="category in uniqueCategories" :key="category">
        {{ category }}
      </option>
    </select>

    <div>
      <button data-testid="inspireMe" @click="categorySelected">
        Inspire Me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  emits: ["category-selected"],
  props: {
    lessons: {
      type: Object,
      required: true,
    },
    currentLesson: {
      type: (Array, Object),
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: "",
      newComment: {
        id: " ",
        title: " ",
        message: " ",
      },
    };
  },
  computed: {
    uniqueCategories() {
      const uniqueCategories = [];

      for (let lesson of this.lessons) {
        if (!uniqueCategories.includes(lesson.category)) {
          uniqueCategories.push(lesson.category);
        }
      }

      return uniqueCategories;
    },
  },
  methods: {
    categorySelected() {
      this.$emit("category-selected", this.selectedCategory);
    },
  },
};
</script>

<style scoped></style>
