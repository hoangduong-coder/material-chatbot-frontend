import { QueryModels } from "../../types/helperTypes/clu";
import { Question } from "../../types";
import axios from "axios";

const baseUrl = `https://${process.env.REACT_APP_ENDPOINT}.cognitiveservices.azure.com/language/:analyze-conversations?api-version=2022-05-01`;

const postUtterance = async (query: Question) => {
  const { data } = await axios.post<QueryModels>(baseUrl, {
    kind: "Conversation",
    analysisInput: {
      conversationItem: {
        id: query.qnaId,
        participantId: query.userId,
        text: query.question,
      },
    },
    parameters: {
      projectName: process.env.REACT_APP_CLU_PROJECT_NAME,
      deploymentName: process.env.REACT_APP_CLU_DEPLOYMENT_NAME,
      stringIndexType: "TextElement_V8",
    },
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
      "Apim-Request-Id": process.env.REACT_APP_REQUEST_ID,
    },
  });
  return data;
};

export default {
  postUtterance: postUtterance,
};
