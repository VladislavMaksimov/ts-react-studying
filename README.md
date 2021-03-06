# TypeScript & React simple project

I created this project while I was watching a small [course](https://youtu.be/92qcfeWxtnY) on React and TypeScript. So it is just a way I study some React and TypeScript features and tools connected with them.

## Used tools 

Frameworks, libraries, advanced features of programming languages, etc.

### Main stack

- [React](https://ru.reactjs.org/)
  - [React Router](https://reactrouter.com/) to implement routing
- [TypeScript](https://www.typescriptlang.org/) to implement static typing
- [CSS modules](https://github.com/css-modules/css-modules) to make the project structure better
- [Create React App](https://create-react-app.dev/) to use project configuration templates
  - typescript template

### Interface Logic
- advanced React features 
  - [React.lazy](https://reactjs.org/docs/react-api.html#reactlazy) to implement lazy loading of pages
  - hooks
    - [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) to implement memoization
  - custom hooks
    - *useFetching* that handles fetching data state of a component
    - *useFilteredArray* that filter array via callback function

### Connection with API

- [Axios](https://github.com/axios/axios) to create HTTP requests via simple code