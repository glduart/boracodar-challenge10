import { Page, PageWrapper } from "./styles";
import Degree from "./components/Degree";
import AirQuality from "./components/AirQuality";
import FollowingDays from "./components/FollowingDays";
import SunHour from "./components/SunChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { IDegreeInfos } from "./components/Degree";
import configs from "./configs";

function App() {
  const [degreeInfos, setDegreeInfos] = useState<IDegreeInfos>(
    {} as IDegreeInfos
  );
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${configs.API_KEY}&lang=pt-br&units=metric`
        )
        .then(({ data }) => {
          setDegreeInfos(data);
        });
    });
  }, []);

  return (
    <Page>
      <PageWrapper>
        <Degree infos={degreeInfos} />
        <AirQuality />
        <SunHour />
        <FollowingDays />
      </PageWrapper>
    </Page>
  );
}

export default App;
