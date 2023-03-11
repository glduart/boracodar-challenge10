import styled from "styled-components";

export const FollowingDaysBox = styled.ul`
  grid-area: following-days;
  padding: 2.5rem; //40px
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FollowingDaysItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  flex: 1;
  p {
    font-weight: bold;
    font-size: 0.875rem; //14px
    color: #dad8f7;
  }
  img {
    max-width: 4rem;
    max-height: 4rem;
    width: 100%;
    height: 100%;
  }
  & > span {
    font-weight: bold;
    font-size: 1rem; //16px
    color: #fff;
    & > span {
      color: #c2bff4;
    }
  }
`;
