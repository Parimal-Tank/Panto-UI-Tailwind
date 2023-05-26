import "./App.css";
import "./index.css";
import Home from "./Home/Home";
import Experiences from "./pages/Experiences";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Experiences />
    </div>
  );
}

export default App;
