import { FollowingDaysBox, FollowingDaysItem } from "./styles";
import weather from "../../assets/imgs/weather.svg";
import sun from "../../assets/imgs/sun.svg";
import coloredRain from "../../assets/imgs/colored-rain.svg";
import thunder from "../../assets/imgs/thunder.svg";
import cloudy from "../../assets/imgs/cloudy.svg";

function FollowingDays() {
  return (
    <FollowingDaysBox>
      <FollowingDaysItem>
        <p>Amanhã</p>
        <img src={weather} alt="Weather Cloud" />
        <span>
          21º <span>16º</span>
        </span>
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Sexta-Feira</p>
        <img src={sun} alt="Sun" />
        <span>
          28º <span>20º</span>
        </span>
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Sábado</p>
        <img src={coloredRain} alt="Rain" />
        <span>
          25º <span>21º</span>
        </span>
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Domingo</p>
        <img src={thunder} alt="Thunder" />
        <span>
          20º <span>14º</span>
        </span>
      </FollowingDaysItem>
      <FollowingDaysItem>
        <p>Segunda-Feira</p>
        <img src={cloudy} alt="Cloudy" />
        <span>
          24º <span>18º</span>
        </span>
      </FollowingDaysItem>
    </FollowingDaysBox>
  );
}

export default FollowingDays;
