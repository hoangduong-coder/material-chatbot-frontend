import {
  KnowledgeBaseAnswerContext,
  QueryFilters,
  RankerKind,
  ShortAnswerOptions,
} from "./helperTypes";

export default interface Question {
  answerSpanRequest?: ShortAnswerOptions;
  confidenceScoreThreshold?: number;
  context?: KnowledgeBaseAnswerContext;
  filters?: QueryFilters;
  includeUnstructuredSources?: boolean;
  qnaId: number;
  question: string;
  rankerType?: RankerKind;
  top?: number;
  userId?: string;
}
