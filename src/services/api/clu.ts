/* eslint-disable import/no-anonymous-default-export */

import QueryModels from "../../types/searchQuery";
import axios from "axios";

const postUtterance = async (query: string): Promise<any> => {
  const { data } = await axios.post<QueryModels>(
    //@ts-ignore
    process.env.REACT_APP_AZURE_CLU_URL,
    {
      kind: "Conversation",
      analysisInput: {
        conversationItem: {
          id: "1",
          participantId: "1",
          text: query,
          modality: "text",
          language: "en",
        },
      },
      parameters: {
        projectName: process.env.REACT_APP_CLU_PROJECT_NAME,
        deploymentName: process.env.REACT_APP_CLU_DEPLOYMENT_NAME,
        stringIndexType: "TextElement_V8",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
        "Apim-Request-Id": process.env.REACT_APP_APIM_REQUEST_ID,
      },
    }
  );
  return data;
};

export default {
  postUtterance: postUtterance,
};
