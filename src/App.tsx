import { useState } from "react";
import { save } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");

  const saveFileContents = async () => {
    try {
      const savePath = await save();
      if (!savePath) return;
      await invoke("save_file", { path: savePath, contents: "test" });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          saveFileContents();
        }}
      >
        Greet
      </button>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
