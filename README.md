# Life Lessons Oracle App Documentation

Welcome to the Life Lessons Oracle app documentation. This guide provides an overview of the app's functionality, components, and how to use it effectively.

## Introduction

The Life Lessons Oracle app is designed to provide users with a platform to gain Insight on various spiritual life lessons, allowing the user to gain some clarity on some emotional doubts or fear in Life. The app is still under development, however it integrates multiple components, allowing users to select the type of lessons that he/she would like to receive the 'Insight' over, that will be based on some categories or in a random option selection.

## Installation

To get started with the Life Lessons Oracle app, you need to have [Node.js] and [npm](Node Package Manager) installed on your system.

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install dependencies:
   ```
   npm install
   ```

## Getting Started

To launch the Life Lessons Oracle app, follow these steps:

1. Open your terminal and navigate to the project directory.
2. Run the following command:
   ```
   npm run serve
   ```
3. Open a web browser and go to the provided local development server URL.

## Components

The app consists of the following main components:

### LifeLessonsOracle Component

The `LifeLessonsOracle` component serves as the main app component that integrates other components and manages the overall functionality.

### LessonCategorySelector Component

The `LessonCategorySelector` component is placed at the top of the app. It allows users to select a category or choose "Random" to receive an Insight. This component receives life lesson data as an array and emits selections to the parent component.

### LessonDisplay Component

The 'LessonDisplay' component is responsible for displaying the lessons. It receives the lessons array and displays one Random lesson from the selected category. It also displays the buttons "Like", "Save", and "Comment" for the user to interact with the lesson. The user can save a new advice lesson and it will be displayed in the "Friendly Category". The user can also like the lesson and the number of likes will be displayed. 

## Usage

### Receiving an Insight - Lesson

1. Open the Life Lessons Oracle app in your web browser.
2. Use the LessonCategorySelector component to select a category that is related to your doubt or choose "Random" if you don't have any specific doubt topic.

### Clearing Selections

Once the insight/lesson is displaying the clear button is available to start over the oracle.

1. Ensure that you clicked in the button to receive the Insight to have the lesson displayed in the LessonDisplay component.
2. Click the "Clear" button to clear the selected lessons to start over.

### Random Lesson

To receive a random insight:

1. Use the LessonCategorySelector component to choose "Random."

## Testing

The app includes automated tests to ensure its functionality. To run the tests:

```
npm run test
```
