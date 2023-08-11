<template>
  <div class="category-selector">
    <h2>Select a Category:</h2>
    <select v-model="selectedCategory" @change="categorySelected">
      <option value="">All Categories</option>
      <option v-for="category in uniqueCategories" :key="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  props: {
    lessons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: "",
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
