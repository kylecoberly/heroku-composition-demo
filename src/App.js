import './App.css';
import ConfigSection from "./ConfigSection"
import AppInformation from "./AppInformation"

function App() {
  return (
    <div className="App">
      <ConfigSection
        heading="App Information"
        description="Config vars change the way your app whatever"
        detail=<AppInformation />
      /> 
      <ConfigSection
        heading="App Information"
        description="Config vars change the way your app whatever"
        detail=<p>Hi!</p>
      /> 
    </div>
  );
}

export default App;
