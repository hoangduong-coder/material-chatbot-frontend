import List from"./material.json"
import { QuestionAsk } from "./../../types/helperTypes/clu";

const DirectQuestion = (props: QuestionAsk) => {
  const searched = List.filter(l => l[props.code?.key!] == props.code?.value!)
  const ans = searched.map(s => s[props.searchKey?.key!])
  return ans.join()
}

export default DirectQuestion