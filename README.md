# Material-chatbot project

## Description

### 1. Introduction

The project is from [Wärtsilä](https://www.wartsila.com/), a global leader in innovative technologies and lifecycle solutions for the marine and energy markets. Each of their products contains many small elements, with a numerous data of chemical compositions, physicals parameters, standards, etc. In some cases, that might be an obstacle for any designer. For this reason, this chatbot is expected to be a solution which assists the customer and designer to get more information about the components and materials.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 2. Main functions

- Quickly and automatically reply most of the questions from customers and designers.
- Contains AI service ([Azure Cognitive Service for Language](https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/)) to analyze and understand input questions.
- Provide to users either further selective options or suitable answer based on the data fetch from the material database. See also this [backend server](https://github.com/hoangduong-coder/material-chatbot-backend).

### 3. Final products

- Go to [this link](https://material-chatbot-vnteam.vercel.app/) for more details.

![Screenshot 2022-12-07 235111](https://user-images.githubusercontent.com/63698826/206306466-cd7bb1c7-a9fe-473f-ab48-8d51567ad735.png)

## Available Scripts and setup

1. Install the dependencies using `npm` or `yarn`:

```
npm install
```

or

```
yarn install
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
