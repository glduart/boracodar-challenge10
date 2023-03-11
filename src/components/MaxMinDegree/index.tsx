import { MaxMin } from "./styles";

interface IProps {
  max: number;
  min: number;
}

function MaxMinDegree({ max, min }: IProps) {
  return (
    <MaxMin>
      {max}º <span>{min}º</span>
    </MaxMin>
  );
}

export default MaxMinDegree;
