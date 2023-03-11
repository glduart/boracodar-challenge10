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

function Degree() {
  return (
    <DegreeBox>
      <img src={weather} alt="Weather cloud" />
      <Location>
        <img src={pin} alt="Pin" />
        <span>Rio do Sul, SC</span>
      </Location>
      <Temperature>
        <CurrentDegree>
          18 <span>ºC</span>
        </CurrentDegree>
        <MaxMinDegree max={22} min={16} />
      </Temperature>
      <Infos>
        <InfoBox>
          <img src={wind} alt="Wind" />
          <InfoTexts>
            <p>Vento</p>
            <span>
              17 <span>km/h</span>
            </span>
          </InfoTexts>
        </InfoBox>
        <InfoBox>
          <img src={humidity} alt="Humidity" />
          <InfoTexts>
            <p>Umidade</p>
            <span>
              31 <span>%</span>
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
