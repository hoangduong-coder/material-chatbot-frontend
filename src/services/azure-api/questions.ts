import { Answer, Question } from "../../types";

import axios from "axios";

const baseUrl = `https://${process.env.REACT_APP_ENDPOINT}.cognitiveservices.azure.com//language/:query-knowledgebases?projectName=material-chatbot&api-version=2021-10-01&deploymentName=test`;

const postQuestion = async (question: Question) => {
  const { data } = await axios.post<{ answers: Answer[] }>(baseUrl, question, {
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
    },
  });
  return data;
};

export default {
  postQuestion: postQuestion,
};
