import {
  AirQualityBox,
  AirQualityTitleBox,
  AirQualityNumberBox,
  AirChemistryBox,
  AirChemistryItem,
} from "./styles";
import leaf from "../../assets/imgs/leaf.svg";

function AirQuality() {
  return (
    <AirQualityBox>
      <AirQualityTitleBox>
        <img src={leaf} />
        <h3>Qualidade do ar</h3>
      </AirQualityTitleBox>

      <AirQualityNumberBox>
        <span>Boa</span>
        <h2>21</h2>
      </AirQualityNumberBox>

      <AirChemistryBox>
        <AirChemistryItem>
          <span>12.9</span>
          <p>PM2.5</p>
        </AirChemistryItem>
        <AirChemistryItem>
          <span>12.9</span>
          <p>PM10</p>
        </AirChemistryItem>
        <AirChemistryItem>
          <span>2.1</span>
          <p>
            SO<sub>2</sub>
          </p>
        </AirChemistryItem>
        <AirChemistryItem>
          <span>1.4</span>
          <p>
            NO<sub>2</sub>
          </p>
        </AirChemistryItem>
        <AirChemistryItem>
          <span>21.2</span>
          <p>
            O<sub>3</sub>
          </p>
        </AirChemistryItem>
        <AirChemistryItem>
          <span>0.7</span>
          <p>CO</p>
        </AirChemistryItem>
      </AirChemistryBox>
    </AirQualityBox>
  );
}

export default AirQuality;
