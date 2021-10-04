import { TabComponent } from "./App.style";
import Tab from "./components/topTab";
function App() {
  return (
    <div className="App">
      <TabComponent>
        <Tab />
      </TabComponent>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
