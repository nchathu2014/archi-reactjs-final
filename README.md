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

### 4- useRef():

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

In React there is a concept called Controlled Components andUncontrolled Components. For Uncontrolled ones we use useRef() hook.

### 5- useLayoutEffect()

useLayoutEffect is identical to useEffect, but it's major key difference is that it gets triggered synchronously after all DOM mutation. You only want to use this hook when you need to do any DOM changes directly.

### 6- useImperativeHandle()

useImperativeHandle allows you to pass values and functions from a Child component back up to a Parent using a ref . From there, the Parent can either use it itself or pass it to another Child. Note that you can only pass a ref as a prop to a child that wraps its component in forwardRef
