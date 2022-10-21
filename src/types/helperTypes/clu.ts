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
export type Entity = {
  category: string;
  compositionSetting: "combineComponents" | "separateComponents";
  list?: { sublists: SubListItem[] };
  prebuilts?: Array<{ category: string }>; //https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/conversational-language-understanding/prebuilt-component-reference
  regex?: {
    expressions: Regex[];
  };
  requireComponents?: requireComponent[];
};

export type Assets = {
  projectKind: string;
  intents: Array<{ category: string }>;
  entities: Array<Entity>;
  utterances: Array<Utterance>;
};
