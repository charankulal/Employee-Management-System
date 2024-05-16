import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return <>
  <HeaderComponent></HeaderComponent>
  <ListEmployeeComponent/>
  <FooterComponent></FooterComponent>
  </>;
}

export default App;
