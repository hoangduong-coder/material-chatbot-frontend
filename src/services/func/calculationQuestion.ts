import List from "./material.json";
import { QuestionAsk } from "./../../types/helperTypes/clu";
var math = require('mathjs')

const CalculationQuestion = (props: QuestionAsk) => {
  let ans: string = 'Can not calculate';
  const inputValue = math.unit(props.value?.value!).toNumber('m')
  const searched: any = List.find(
    (l) => l[props.code?.key!] === props.code?.value!.toUpperCase()
  );
  switch (props.searchKey?.key!) {
    case 'Cost':
      if (props.value?.kind! === 'LengthResolution') 
        {ans = `${(searched.Mass * inputValue * searched.Cost).toFixed(3)}`} 
      else {ans = `${(inputValue * searched.Cost).toFixed(3)}`}
      break;
    case 'Mass': 
      ans = `${(searched.Mass * inputValue).toFixed(3)}`
      break;
  }
  return ans
}

export default CalculationQuestion