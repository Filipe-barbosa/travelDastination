# TreeView Challenge

"Hello!!

Welcome to the Travel Destination Challenge!!

This is a project developed for the selection process at Mozio company."


## Run the project

To run the project, install the dependencies using either yarn or npm install by executing the command `yarn` or `npm start`. The development utilized the Yarn library.

#### Setup

The project was developed using `TypeScript` and the `React` library. For CSS pre-processing, `StyledComponents` was chosen, and as the styling library, `Material UI` was employed. The choice of TypeScript brings numerous benefits to the application, emphasizing immutability in the code and a more direct and streamlined interpretation of the component for users interacting with the system. The selection of Vite is due to its quick setup for React, along with an extensive community that provides support and facilitates issue resolution during development.

## Project Structure

The project is structured into folders. The components folder contains all styling components. The hooks folder houses contexts and used logic.

## Understanding of the problem.

After reviewing the GIF that explained the desired functionality, the developer identified that the challenge was related to a proximity search based on geographic coordinates. With this understanding, he decided to implement a breadth-first search algorithm and recursion.

This choice was motivated by the efficiency of the algorithm compared to a naive iterative approach. The use of recursion brings better performance and greater legitimacy to the algorithm.

### Logic Resolution

The algorithm receives a list of objects and the selected object, so that it can interactively search for cities with coordinates closest to the selected one.

Then, it sorts and returns to the parent context the list of elements ordered by proximity.

### UI Components

In an effort to follow best practices, StyledComponents and Material UI were used. However, it was decided that for the search component, the AutoComplete from Material UI would be utilized because the implementation time was limited. While adding some dependencies would introduce additional complexity, it would be beneficial to facilitate timely delivery. The other components were implemented using Styled Components due to their simplicity and greater flexibility and speed in implementation.

### Code Formatting

During development, esLint and Prettier were used, configured in the project to establish a standard in case more people are involved. The default lint configuration was chosen, and there is room for improvement by adding custom configurations.


## Improvements

Given the time constraints, the product developed so far is considered version 0. For version 1, some improvements have been considered, such as:

<ul>

#### Implement caching of requests using React Query.

 <ul>
React Query simplifies data fetching and state management by providing intelligent caching, automatic refetching, and built-in support for pagination and infinite queries. Its centralized approach reduces the need for additional libraries, enhancing application performance and user experience.
</ul>

#### Implement a layer for backend API calls.

 <ul>
Implement backend API calls along with error handling for filters that may return an error state to the user, while also managing the loading state for these calls.
</ul>

#### Implement an algorithm with lower asymptotic complexity to enhance search efficiency.

 <ul>
Implement an algorithm with lower asymptotic complexity to enhance search efficiency. The goal is to create a more effective search method that optimizes processing, ensuring that the application performs satisfactorily even with large data volumes. The current implementation requires multiple interactions, leading to performance issues when processing substantial datasets.
</ul>


### Unit and integration tests.

<ul>
The new version of the product will incorporate the implementation of unit tests to enhance security and reliability. It is recommended to use the Jest tool for this task, as it offers a simple setup and a wide range of features. Additionally, integration tests will be performed using Cypress, which is ideal for validating the entire flow of the system and ensuring that the different components interact correctly.
</ul>


### UI component documentation with Storybook.

<ul>

To create a more developer-friendly experience and enhance code reusability across different projects, implementing Storybook for documenting UI interfaces would be highly beneficial. This approach would not only streamline the development process but also provide clear and organized documentation for future reference.
</ul>

#### Translation Key

<ul>
Create translation keys into the code, which ensures better usability and avoids having loose strings in the codebase.
</ul>



## Closing remarks

The practices developed took into account good code quality while also aiming to ensure timely delivery. It is worth noting that the developer had only a few hours to work on this project, as it was completed after regular working hours.
