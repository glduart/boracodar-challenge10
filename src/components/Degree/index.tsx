import weather from "../../assets/imgs/weather.svg";
import pin from "../../assets/imgs/pin.svg";
import rain from "../../assets/imgs/rain.svg";
import humidity from "../../assets/imgs/humidity.svg";
import wind from "../../assets/imgs/wind.svg";

import MaxMinDegree from "../MaxMinDegree";

import {
  DegreeBox,
  Location,
  Temperature,
  CurrentDegree,
  Infos,
  InfoBox,
  InfoTexts,
} from "./styles";
interface IProps {
  infos: IDegreeInfos;
}
export interface IDegreeInfos {
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
  };
}

function Degree({ infos }: IProps) {
  return (
    <DegreeBox>
      <img src={weather} alt="Weather cloud" />
      <Location>
        <img src={pin} alt="Pin" />
        <span>Rio do Sul, SC</span>
      </Location>
      <Temperature>
        <CurrentDegree>
          {Math.round(infos?.main?.temp)} <span>ºC</span>
        </CurrentDegree>
        <MaxMinDegree max={infos?.main?.temp_max} min={infos?.main?.temp_min} />
      </Temperature>
      <Infos>
        <InfoBox>
          <img src={wind} alt="Wind" />
          <InfoTexts>
            <p>Vento</p>
            <span>
              {Math.round(3.6 * infos?.wind?.speed)} <span>km/h</span>
            </span>
          </InfoTexts>
        </InfoBox>
        <InfoBox>
          <img src={humidity} alt="Humidity" />
          <InfoTexts>
            <p>Umidade</p>
            <span>
              {infos?.main?.humidity} <span>%</span>
            </span>
          </InfoTexts>
        </InfoBox>
        <InfoBox>
          <img src={rain} alt="Rain" />
          <InfoTexts>
            <p>Chuva</p>
            <span>
              10 <span>%</span>
            </span>
          </InfoTexts>
        </InfoBox>
      </Infos>
    </DegreeBox>
  );
}

export default Degree;
