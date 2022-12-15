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

- Visit our product [here](https://material-chatbot-vnteam.vercel.app/).

![image](https://user-images.githubusercontent.com/63698826/207586006-6da0eef4-827e-44b7-a671-b6d83d22f295.png)

- List of available questions:

| Type | Definition | Example |
| --- | --- | --- |
| Greeting | | Hello, thank you, goodbye, etc. |
| Direct | Fetch ID, international standards, physical quantities | What are the raw material and density of MAT0001 and MAT0002? <br> What are materials with Cr, Mn in? |
| Equivalent | Fetch ID of simliar material | Which material is similar to MAT0005 and MAT0009? |
| Calculation | Further calculaton (mass, cost) | What is the cost for 8mm length bar MAT0010? |
| Range | Display ID satisfied with a given range | Find materials whose diameter from 200-300 |
| All params | Give an ID and the bot shows all information about that material | MAT0003 |

-***Note:** Unfortunately, any other questions whose content are not mentioned above and/or contain pronunciation error(s) **may not** be answerd correctly.*

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
