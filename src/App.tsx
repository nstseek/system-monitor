import { useSystemContext } from "./context/useSystemContext";

function App() {
  const data = useSystemContext();

  console.log(data);

  return <>test</>;
}

export default App;
