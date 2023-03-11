import { Page, PageWrapper, SunHour } from "./styles";
import Degree from "./components/Degree";
import AirQuality from "./components/AirQuality";
import FollowingDays from "./components/FollowingDays";

function App() {
  return (
    <Page>
      <PageWrapper>
        <Degree />
        <AirQuality />
        <SunHour></SunHour>
        <FollowingDays />
      </PageWrapper>
    </Page>
  );
}

export default App;
