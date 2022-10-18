# Material-chatbot project

## Description

### 1. Introduction

The project is from [Wärtsilä](https://www.wartsila.com/), a global leader in innovative technologies and lifecycle solutions for the marine and energy markets. Each of their products contains many small elements, with a numerous data of chemical compositions, physicals parameters, standards, etc. In some cases, that might be an obstacle for any designer. For this reason, this chatbot is expected to be a solution which assists the customer and designer to get more information about the components and materials.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 2. Main functions

- Quickly and automatically reply most of the questions from customers and designers.
- Contains AI service ([Azure Cognitive Service for Language](https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/)) to analyze and understand input questions.
- Provide to users either further selective options or suitable answer based on the data fetch from the material database. See also this [backend server](https://github.com/hoangduong-coder/material-chatbot-backend).

## Available Scripts and setup

### 1. Setup and run tutorials:

1. Install the dependencies using `npm` or `yarn`:

```
npm install
```

or

```
yarn add
```

2. Create `.env` file with the correct credentials to access Azure service.
3. Run the program by `npm` or `yarn` in the development mode.:

```
npm start
```

or

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### 2. Other scripts

> `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

> `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
