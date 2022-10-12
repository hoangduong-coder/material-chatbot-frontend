import { Answer, Question } from "../types";

import axios from "axios";

const baseUrl = `https://${process.env["LANGUAGE_STUDIO_ENDPOINT"]}.api.cognitive.microsoft.com//language/:query-knowledgebases?projectName=material-chatbot&api-version=2021-10-01&deploymentName=test`;

const postQuestion = async (question: Question) => {
  const { data } = await axios.post<Answer[]>(baseUrl, question, {
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": process.env["LANGUAGE_STUDIO_API_KEY"],
    },
  });
  console.log(JSON.stringify(data, null, 4));
  return data;
};

export default {
  postQuestion,
};
