import styled from "styled-components";

export const AirQualityBox = styled.div`
  grid-area: air-quality;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div,
  & > ul {
    width: 100%;
  }
`;

export const AirQualityTitleBox = styled.div`
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

export const AirQualityNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  & > span {
    font-size: 1.125rem; //18px
    color: #87ebcd;
  }
  & > h2 {
    font-size: 2.5rem; //40px
    color: #e7e6fb;
  }
`;

export const AirChemistryBox = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const AirChemistryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 0.875rem; //14px
    color: #87ebcd;
  }
  & > p {
    font-size: 0.75rem; //12px
    color: #e7e6fb;
  }
`;
