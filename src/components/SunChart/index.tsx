import { SunChartBox, SunChartTitleBox, ChartBox, TimeBox } from "./styles";
import sunHour from "../../assets/imgs/sun-hour.svg";
import chart from "../../assets/imgs/sun-chart.svg";
function SunChart() {
  return (
    <SunChartBox>
      <SunChartTitleBox>
        <img src={sunHour} alt="Sun Hour" />
        <h3>Horário do sol</h3>
      </SunChartTitleBox>
      <ChartBox>
        <img src={chart} alt="Sun Chart" />
        <TimeBox>
          <span>06:12</span>
          <span>18:52</span>
        </TimeBox>
      </ChartBox>
    </SunChartBox>
  );
}

export default SunChart;
