import { Page, PageWrapper, AirQuality, SunHour, DegreeDays } from "./styles";
import Degree from "./components/Degree";

function App() {
  return (
    <Page>
      <PageWrapper>
        <Degree />
        <AirQuality></AirQuality>
        <SunHour></SunHour>
        <DegreeDays></DegreeDays>
      </PageWrapper>
    </Page>
  );
}

export default App;
