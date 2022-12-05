/* eslint-disable import/no-anonymous-default-export */

import { Answer, QueryModels } from "../../types";

import axios from "axios";

const baseUrl = `http://localhost:3001/qna`;

const postQuestion = async (question: QueryModels) => {
  const { data } = await axios.post<Answer>(baseUrl, question);
  return data;
};

export default {
  postQuestion: postQuestion,
};
