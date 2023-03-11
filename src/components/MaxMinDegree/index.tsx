import { MaxMin } from "./styles";

interface IProps {
  max: number;
  min: number;
}

function MaxMinDegree({ max, min }: IProps) {
  return (
    <MaxMin>
      {Math.round(max)}º <span>{Math.round(min)}º</span>
    </MaxMin>
  );
}

export default MaxMinDegree;
