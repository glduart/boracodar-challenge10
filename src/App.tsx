import { Page, PageWrapper, SunHour, DegreeDays } from "./styles";
import Degree from "./components/Degree";
import AirQuality from "./components/AirQuality";

function App() {
  return (
    <Page>
      <PageWrapper>
        <Degree />
        <AirQuality />
        <SunHour></SunHour>
        <DegreeDays></DegreeDays>
      </PageWrapper>
    </Page>
  );
}

export default App;
