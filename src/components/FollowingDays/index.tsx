import { FollowingDaysBox, FollowingDaysItem } from "./styles";
import weather from "../../assets/imgs/weather.svg";
import sun from "../../assets/imgs/sun.svg";
import coloredRain from "../../assets/imgs/colored-rain.svg";
import thunder from "../../assets/imgs/thunder.svg";
import cloudy from "../../assets/imgs/cloudy.svg";
import MaxMinDegree from "../MaxMinDegree";

function FollowingDays() {
  return (
    <FollowingDaysBox>
      <FollowingDaysItem>
        <p>Amanhã</p>
        <img src={weather} alt="Weather Cloud" />
        <MaxMinDegree max={21} min={16} />
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Sexta-Feira</p>
        <img src={sun} alt="Sun" />
        <MaxMinDegree max={28} min={20} />
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Sábado</p>
        <img src={coloredRain} alt="Rain" />
        <MaxMinDegree max={25} min={21} />
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Domingo</p>
        <img src={thunder} alt="Thunder" />
        <MaxMinDegree max={20} min={14} />
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Segunda-Feira</p>
        <img src={cloudy} alt="Cloudy" />
        <MaxMinDegree max={24} min={18} />
      </FollowingDaysItem>
    </FollowingDaysBox>
  );
}

export default FollowingDays;
