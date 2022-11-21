import List from "./material.json";
import { QuestionAsk } from "./../../types/helperTypes/clu";

const EquivalentQuestion = (props: QuestionAsk) => {
  const searched: any = List.find(
    (l) => l[props.code?.key!] === props.code?.value!
  );
  const listSearched = List.filter(
    (ls) => ls[props.searchKey?.key!] === searched[props.searchKey?.key!]
  );
  const ans = listSearched.map((s) => s[props.code?.key!]);
  return ans.join();
};

export default EquivalentQuestion;
