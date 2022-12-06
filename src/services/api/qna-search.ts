/* eslint-disable import/no-anonymous-default-export */

import { Answer, QueryModels } from "../../types";

import axios from "axios";

const baseUrl = `https://material-chatbot-backend.vercel.app/api/qna`;

const postQuestion = async (question: QueryModels) => {
  const { data } = await axios.post<Answer>(baseUrl, question);
  return data;
};

export default {
  postQuestion: postQuestion,
};
