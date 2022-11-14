import { LanguageCode, Regex, Synonym } from "./language";

interface SubListItem {
  listKey: string;
  synonyms: Array<Synonym>;
}

type requireComponent = "learned" | "regex" | "list" | "prebuilts";

export type Utterance = {
  text: string;
  language: LanguageCode;
  dataset: "Train" | "Test";
  intent: string;
  entities: Array<{
    category: string;
    offset: number;
    length: number;
  }>;
};

export type Intent = {
  category: string;
  confidenceScore?: number;
};

export type Entity = {
  category: string;
  compositionSetting?: "combineComponents" | "separateComponents";
  list?: { sublists: SubListItem[] };
  prebuilts?: Array<{ category: string }>; //https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/conversational-language-understanding/prebuilt-component-reference
  regex?: {
    expressions: Regex[];
  };
  requireComponents?: requireComponent[];
  confidenceScore?: number;
  length?: number;
  offset?: number;
  text?: string;
  extraInformation?: Array<{ extraInformationKind: string }>;
};

export type Assets = {
  projectKind: string;
  intents: Array<Intent>;
  entities: Array<Entity>;
  utterances: Array<Utterance>;
};

export type QueryModels = {
  kind: string;
  result: {
    query: string;
    prediction: {
      topIntent: string;
      projectType: string;
      intents: Array<Intent>;
      entities: Array<Entity>;
    };
  };
};
