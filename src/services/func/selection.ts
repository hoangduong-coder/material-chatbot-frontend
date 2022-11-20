import List from"./material.json"
import { QuestionAsk } from "./../../types/helperTypes/clu";

const Selection = (props: QuestionAsk) => {
  const searched: any = List.find(l => l[props.code?.key!] == props.code?.value!)
  let ans: string = '';
  for (const [key, value] of Object.entries(searched)) {
    ans += `${key}: ${value} `;
  }
  return ans
}

export default Selection