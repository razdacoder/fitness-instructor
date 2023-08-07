import "./App.css";
import useAuthentication from "./hooks/useAuthentication";
import Home from "./screens/Home";
import Splash from "./screens/Splash";

function App() {
  const { session } = useAuthentication();

  return (
    <div className="h-screen w-screen">{session ? <Home /> : <Splash />}</div>
  );
}

export default App;
