import styled from "styled-components";

export const SunChartBox = styled.div`
  grid-area: sun-hour;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
  }
`;

export const SunChartTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  & > h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #dad8f7;
  }
  & > img {
    margin-right: 0.5rem;
  }
`;

export const ChartBox = styled.div`
  flex: 2;
  position: relative;

  rotate: calc(1.825deg * var(--pos-x));
  &:before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    background: #f6c833;
    border-radius: 50%;

    top: 10%;
    left: 50%;
    margin: -0.6rem;
    transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180)))
      translate(10.6rem);
  }

  &::after {
    position: absolute;
    top: 44%;
    right: 44%;
    content: "16.01";
    font-weight: 700;
    font-size: 0.875rem; //14px
    color: #fff;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  margin-top: -20px;
  justify-content: space-between;
  & span {
    font-size: 0.75rem; //12px
    color: #fff;
  }
`;
