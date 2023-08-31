import { AppContainer, DropdownsContainer } from "./App.styles";
import { CPUInfo } from "./components/CPUInfo/CPUInfo";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { MemInfo } from "./components/MemInfo/MemInfo";
import { Modules } from "./components/Modules/Modules";
import { ProcessList } from "./components/ProcessList/ProcessList";
import { Uptime } from "./components/Uptime/Uptime";
import { Version } from "./components/Version/Version";
import { useSystemContext } from "./context/useSystemContext";

function App() {
  const { data, isLoading } = useSystemContext();

  return (
    <AppContainer>
      <h1>System monitor</h1>
      <h6>
        {isLoading
          ? "Updating..."
          : `Last updated at: ${data?.lastUpdatedAt.toString()}`}
      </h6>
      <DropdownsContainer>
        <Dropdown title="CPU Info">
          <CPUInfo />
        </Dropdown>
        <Dropdown title="Mem Info">
          <MemInfo />
        </Dropdown>
        <Dropdown title="Modules">
          <Modules />
        </Dropdown>
        <Dropdown title="Date">
          <Date />
        </Dropdown>
        <Dropdown title="Uptime">
          <Uptime />
        </Dropdown>
        <Dropdown title="Version">
          <Version />
        </Dropdown>
        <Dropdown title="Process List">
          <ProcessList />
        </Dropdown>
      </DropdownsContainer>
    </AppContainer>
  );
}

export default App;
