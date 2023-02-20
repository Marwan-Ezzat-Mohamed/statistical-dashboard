import Sidebar from "./components/Sidebar/index";
import Home from "./components/Home/Home";
import UserPanel from "./components/UserPanel/index";

function App() {
  return (
    <main
      className="flex h-screen w-screen"
      style={{
        backgroundColor: "#F5F6FA",
      }}
    >
      <Sidebar />
      <Home />
      <UserPanel />
    </main>
  );
}

export default App;
