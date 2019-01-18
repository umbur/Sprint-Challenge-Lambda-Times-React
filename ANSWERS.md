Q: What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
A: Proptypes are used to setup type-checking.
When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.

Q: Describe a life-cycle event in React?
A: When developing in React, every Component follows a cycle from when it's created and mounted on the DOM to when it is unmounted and destroyed. React provides hooks, methods that get called automatically at each point in the lifecycle, that give you good control of what happens at the point it is invoked.

Q: Explain the details of a Higher Order Component?
A: A higher-order component (HOC) is an advanced technique in React for reusing component logic.
They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.

Q: What are three different ways to style components in React? Explain some of the benefits of each.
Styled-components-- is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS.
Reactstrap-- have some pre-built components that are already styled out for you using the Bootstrap styling library. So not only do you get a chance to use the Bootstrap styling library for the use of built in styled classes etc. you also get interactive styled components that you can use for interactivity throughout your react application.
