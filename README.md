# ReactJS Hooks

### 1- useState():

The useState() is a Hook that allows you to have state variables in
functional components

### 2- useReducer():

useReducer is usually preferable to useState when you have complex
state logic that involves multiple sub-values or when the next state
depends on the previous one. useReducer also lets you optimize
performance for components that trigger deep updates because you can
pass dispatch down instead of callbacks.

### 3- useEffect():

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. `useEffect(<function>, <dependency>)`

### 4- UseRef():

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

In React there is a concept called Controlled Components andUncontrolled Components. For Uncontrolled ones we use useRef() hook.
