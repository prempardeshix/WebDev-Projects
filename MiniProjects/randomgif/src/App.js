import "./App.css";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
    <div className="w-full h-[100%] flex flex-col bg-green-500 items-center">
      <h1 className="bg-white rounded-lg w-[80%] text-center mt-[40px] text-4xl">
        Random GIF
      </h1>
      <div className="flex flex-col">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
