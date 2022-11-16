import { Value } from "sass";
import { QueryModels, QuestionAsk } from "./../../types/helperTypes/clu";
import DirectQustion from "./directQuestion"
import Selection from "./selection"
import EquivalentQuestion from "./equivalentQuestion"

let question: QuestionAsk;
let answer: string;

const MainQuestion = (props: QueryModels) => {
  switch (props.result.prediction.topIntent) {
    case 'DirectQuestion':
      question = {
        searchKey: {
          key: props.result.prediction.entities[0].extraInformation?.[0].key!
        },
          code: {
          key: props.result.prediction.entities[1].category!,
          value: props.result.prediction.entities[1].text!
        }
      }
      answer = DirectQustion(question)
      break;
      case 'Selection':
       question = {
        code: {
          key: props.result.prediction.entities[0].category!,
          value: props.result.prediction.entities[0].text!
        }
       } 
       answer = Selection(question)
      break;
      case 'EquivalentQuestion':
        question = {
          searchKey: {
            key: props.result.prediction.entities[0].extraInformation?.[0].key!
          },
            code: {
            key: props.result.prediction.entities[2].category!,
            value: props.result.prediction.entities[2].text!
          }
        }
        answer = EquivalentQuestion(question)
      break;
  }
  return answer
}

export default MainQuestion