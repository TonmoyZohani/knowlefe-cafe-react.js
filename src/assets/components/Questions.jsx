import React from "react";

const Questions = () => {
  return (
    <main className="w-300">
      <div className="text-center text-indigo-600 mb-4 font-bold text-4xl font-sans">
        React Questions and Answers
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 1:</span> What is the
            difference between Props and State?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            The difference between Props and States are, the items that are
            brought into the component from the outside, usually from a parent
            component, are known as props. State, on the other hand, represents
            the internal status of the component. Each component instance on the
            page receives an instance of the component class, and each one has
            its own state as a result.
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 2:</span> How does useState()
            work in react.js?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            The useState() hook is used to store and update any variable value
            at the component level. We would save the variable value inside the
            state so that we could access it without having to use any DOM
            manipulation techniques that React JS does not support.
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 3:</span> What does
            useEffect() do other than data loading?
          </h3>
          <p class="font-medium mb-2">
            What useEffect() hook does other than data loading;If any one of the
            dependency values has changed after the last render, useEffect will
            compare the list of values and run the effect accordingly. And a
            component is unmounted, it can also be used to clear up resources .
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 4:</span> How does React.js
            work?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            With the help of React.js, developers are able to design the website
            by using UI components (which are the piece of code) that may be
            reused and more effectively manage the state of their applications.
            It does this by rendering and updating only the essential components
            when the state changes, which ultimately results in an improvement
            to the application's performance as a whole.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Questions;
