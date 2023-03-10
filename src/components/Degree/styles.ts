import styled from "styled-components";
import cloudsBackgroundDegree from "../../assets/imgs/clouds-background-degree.png";

export const DegreeBox = styled.div`
  grid-area: degree;
  margin-right: 0.5rem;
  background-image: url(${cloudsBackgroundDegree});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.75rem; //12px
  position: relative;
  display: grid;
  grid-template-areas:
    ". . location"
    ". temperature ."
    "infos infos infos";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 3.5rem 2fr 1fr;
  grid-gap: 2px;
  & > img {
    position: absolute;
    top: -56px;
    left: -48px;
  }
`;

export const Location = styled.div`
  grid-area: location;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-weight: bold;
    font-size: 0.875rem; //14px
    color: #c2bff4;
    margin-left: 4px;
  }
`;
export const Temperature = styled.div`
  grid-area: temperature;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const CurrentDegree = styled.h2`
  font-weight: 700;
  font-size: 5.5rem; //88px
  display: flex;
  align-items: flex-start;
  position: relative;
  & > span {
    position: absolute;
    right: -32px;
    top: 0px;
    font-size: 1.5rem; //24px
    color: #dad8f7;
    margin-top: 1.3rem;
    letter-spacing: 0.125rem;
  }
`;

export const MaxMinDegree = styled.p`
  font-weight: bold;
  font-size: 1.25rem; //20px
  & > span {
    color: #c2bff4;
  }
`;
export const Infos = styled.ul`
  grid-area: infos;
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;
`;

export const InfoBox = styled.li`
  flex: 1;
  height: 50%;
  border-radius: 0.375rem;
  background: rgba(102, 96, 200, 0.6);
  padding: 0.75rem 1rem;
  display: flex;
  gap: 0.75rem;
  & > img {
    flex: 1;
    display: flex;
  }
`;

export const InfoTexts = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    font-size: 0.75rem;
  }

  & > p,
  & > span {
    color: #e7e6fb;
  }

  & span {
    font-weight: 700;
    font-size: 1.125rem; //18px
  }

  & > span > span {
    color: #dad8f7;
    font-size: 0.875rem; //14px
    margin-left: 0.25rem; //4px
  }
`;
