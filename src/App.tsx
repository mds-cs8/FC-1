import Main from "./components/main/Main";
import SideBar from "./components/main/SideBar";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="mx-auto w-[98%] h-screen flex flex-col xl:flex-row justify-between gap-4 mt-[60px] text-white">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
