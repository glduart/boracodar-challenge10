import styled from "styled-components";
import backgroundImg from "./assets/imgs/background.png";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PageWrapper = styled.div`
  display: grid;
  width: 75%;
  height: 75%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1.8fr 1fr 1fr;
  grid-gap: 1.5rem; //24px
  grid-template-areas:
    "degree air-quality sun-hour"
    "degree following-days following-days";
  & > div,
  & > ul {
    background-color: #6d67d0;
    border-radius: 0.625rem; //10px
  }
`;
