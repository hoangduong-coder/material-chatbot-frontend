/* eslint-disable import/no-anonymous-default-export */

import { Answer, QueryModels, Question } from "../../types";

import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const postQuestion = async (question: QueryModels) => {
  const { data } = await axios.post<Question>(`${baseUrl}/api/qna`, question);
  return data;
};

const getAnswer = async (id: string) => {
  const { data } = await axios.get<Answer>(`${baseUrl}/api/qna/${id}`);
  return data;
};

export default {
  post: postQuestion,
  get: getAnswer
};
