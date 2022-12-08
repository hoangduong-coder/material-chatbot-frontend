/* eslint-disable import/no-anonymous-default-export */

import { Answer, Question } from "../../types";

import axios from "axios";

const postQuestion = async (question: Question): Promise<any> => {
  const { data } = await axios.post<{ answers: Answer[] }>(
    //@ts-ignore
    process.env.REACT_APP_AZURE_QNA_URL,
    question,
    {
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
      },
    }
  );
  return data;
};

export default {
  postStaticQuestion: postQuestion,
};
